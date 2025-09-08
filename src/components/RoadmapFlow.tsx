import React, { useCallback } from 'react';
import ReactFlow, {
  Controls,
  Node,
  useReactFlow,
  ReactFlowProvider
} from 'reactflow';
import 'reactflow/dist/style.css';
import { roadmapData } from '../roadmap-data';
import { useTheme } from '../contexts/ThemeContext';

interface RoadmapFlowProps {
  completedSections: Set<string>;
  currentSection: string | null;
  onSectionClick: (sectionId: string) => void;
  completedTasks: Set<string>;
}

// Inner component that uses React Flow hooks
const RoadmapFlowInner: React.FC<RoadmapFlowProps> = ({
  completedSections,
  currentSection,
  onSectionClick,
  completedTasks,
}) => {
  const { theme } = useTheme();
  const reactFlowInstance = useReactFlow();

  const nodeStyle = {
    padding: '16px 24px',
    borderRadius: '16px',
    border: 'none',
    fontSize: '14px',
    width: 280,
    textAlign: 'center' as const,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    boxShadow: 'none',
    background: theme === 'dark' ? '#1e293b' : '#ffffff',
    borderColor: theme === 'dark' ? '#334155' : '#e2e8f0',
    color: theme === 'dark' ? '#e2e8f0' : '#334155',
    backdropFilter: 'blur(8px)',
  };

  // Calculate positions for nodes in a grid layout
  const calculateNodePositions = () => {
    const positions: { [key: string]: { x: number; y: number } } = {};
    const HORIZONTAL_SPACING = 350;
    const VERTICAL_SPACING = 150; // Reduced vertical spacing
    const INITIAL_Y_OFFSET = 20; // Reduced top padding
    let currentLevel = 0;
    let nodesInCurrentLevel: string[] = ['web-fundamentals'];

    while (nodesInCurrentLevel.length > 0) {
      nodesInCurrentLevel.forEach((nodeId, index) => {
        const xOffset = (index - (nodesInCurrentLevel.length - 1) / 2) * HORIZONTAL_SPACING;
        positions[nodeId] = {
          x: xOffset,
          y: currentLevel * VERTICAL_SPACING + INITIAL_Y_OFFSET
        };
      });

      const nextLevelNodes: string[] = [];
      nodesInCurrentLevel.forEach(nodeId => {
        const section = roadmapData.sections.find(s => s.id === nodeId);
        if (section?.nextSections) {
          nextLevelNodes.push(...section.nextSections);
        }
      });

      nodesInCurrentLevel = nextLevelNodes;
      currentLevel++;
    }

    return positions;
  };

  const nodePositions = calculateNodePositions();

  const getNodeBackgroundColor = (id: string) => {
    if (currentSection === id) {
      return theme === 'dark' ? 'rgba(37, 99, 235, 0.8)' : 'rgba(59, 130, 246, 0.9)';
    }
    if (completedTasks.has(id)) {
      return theme === 'dark' ? 'rgba(6, 95, 70, 0.8)' : 'rgba(5, 150, 105, 0.9)';
    }
    return theme === 'dark' ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.95)';
  };

  const nodes = roadmapData.sections.map((section) => {
    const tasksCompleted = section.tasks.filter(task => {
      const taskId = `${section.id}-task-${task.id}`;
      const isCompleted = completedTasks.has(taskId);
      return isCompleted;
    }).length;
    const totalTasks = section.tasks.length;
    const progress = totalTasks > 0 ? Math.round((tasksCompleted / totalTasks) * 100) : 0;

    return {
      id: section.id,
      data: {
        label: (
          <div
            style={{
              ...nodeStyle,
              background: getNodeBackgroundColor(section.id),
              transform: currentSection === section.id ? 'scale(1.03)' : 'scale(1)',
            }}
            className="group hover:shadow-lg"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xl">{section.emoji}</span>
              <span className="font-medium">{section.title}</span>
            </div>
            <div className="text-xs opacity-75">
              {tasksCompleted}/{totalTasks} tasks completed
            </div>
            {progress > 0 && (
              <div className={`mt-3 h-1.5 ${
                currentSection === section.id 
                  ? 'bg-white/40 dark:bg-slate-900/40' 
                  : 'bg-gray-200/30 dark:bg-gray-700/30'
              } rounded-full overflow-hidden`}>
                <div
                  className={`h-full ${
                    currentSection === section.id
                      ? 'bg-white/90 dark:bg-slate-100/90' 
                      : 'bg-blue-500/70 dark:bg-blue-400/70'
                  } rounded-full transition-all duration-500`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </div>
        ),
      },
      position: nodePositions[section.id] || { x: 0, y: 0 },
      type: 'default',
      style: { 
        background: 'transparent', 
        border: 'none', 
        width: 280,
      },
    };
  });

  const edgeStyle = {
    stroke: theme === 'dark' ? '#475569' : '#cbd5e1',
    strokeWidth: 1.5,
    strokeDasharray: '5,5',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: theme === 'dark' ? 0.6 : 0.8,
  };

  // Handler for node click with animation and centering
  const handleNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    // Get the node's position
    const nodePosition = nodePositions[node.id];
    
    if (nodePosition) {
      // Calculate viewport dimensions
      const viewportWidth = document.querySelector('.react-flow')?.clientWidth || 0;
      const viewportHeight = document.querySelector('.react-flow')?.clientHeight || 0;
      
      // Zoom settings
      const zoomLevel = 1.8;
      
      // Center the node with animation
      reactFlowInstance.setViewport(
        {
          x: -(nodePosition.x * zoomLevel) + viewportWidth / 2 - (nodeStyle.width / 2) * zoomLevel, 
          y: -(nodePosition.y * zoomLevel) + viewportHeight / 2 - 100, // Center vertically with slight offset
          zoom: zoomLevel,
        },
        { duration: 800 } // Animation duration in ms
      );
    }
    
    // Call the original handler after centering
    onSectionClick(node.id);
  }, [nodePositions, onSectionClick, reactFlowInstance]);

  // Add scroll position tracking
  const [showDragPrompt, setShowDragPrompt] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.react-flow__viewport') as HTMLElement;
      if (!container) return;
      
      // Get the last node's position
      const lastNode = nodes[nodes.length - 1];
      if (!lastNode?.position) return;

      // Convert node position to viewport coordinates
      const viewportTransform = container.style.transform;
      const match = viewportTransform.match(/translate\(([-\d.]+)px,\s*([-\d.]+)px\)/);
      if (!match) return;

      const [, , translateY] = match;
      const scale = parseFloat(viewportTransform.match(/scale\(([-\d.]+)\)/)?.[1] || '1');
      
      const lastNodeViewportY = lastNode.position.y * scale + parseFloat(translateY);
      const containerHeight = container.parentElement?.clientHeight || 0;

      // Hide prompt when last node is in view
      setShowDragPrompt(lastNodeViewportY > containerHeight);
    };

    const container = document.querySelector('.react-flow') as HTMLElement;
    if (container) {
      const observer = new MutationObserver(handleScroll);
      observer.observe(container, { 
        attributes: true, 
        subtree: true,
        attributeFilter: ['style'] 
      });
      handleScroll(); // Check initial position
      return () => observer.disconnect();
    }
  }, [nodes]);

  // Create edges based on nextSections
  const edges = roadmapData.sections.flatMap((section) => {
    return (section.nextSections || []).map((nextSectionId) => ({
      id: `${section.id}-${nextSectionId}`,
      source: section.id,
      target: nextSectionId,
      style: {
        ...edgeStyle,
        opacity: currentSection && (currentSection === section.id || currentSection === nextSectionId) ? 1 : 0.6,
        strokeWidth: currentSection && (currentSection === section.id || currentSection === nextSectionId) ? 2 : 1.5,
        strokeDasharray: completedSections.has(section.id) && completedSections.has(nextSectionId) ? 'none' : '5,5',
        stroke: completedSections.has(section.id) && completedSections.has(nextSectionId)
          ? (theme === 'dark' ? '#22c55e' : '#22c55e')
          : (theme === 'dark' ? '#475569' : '#94a3b8'),
      },
      type: 'smoothstep',
      animated: Boolean(currentSection && (currentSection === section.id || currentSection === nextSectionId)),
    }));
  });

  // Set initial viewport on mount
  React.useEffect(() => {
    // Short delay to ensure the flow is rendered first
    const timer = setTimeout(() => {
      reactFlowInstance.setViewport(
        {
          x: 0,
          y: 0,
          zoom: 1.5,
        },
        { duration: 0 } // No animation for initial positioning
      );
    }, 100);
    
    return () => clearTimeout(timer);
  }, [reactFlowInstance]);

  return (
    <div className="roadmap-flow-container h-[calc(100vh-300px)] min-h-[500px] w-full relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeClick={handleNodeClick}
        fitView={false}
        minZoom={0.5}
        maxZoom={2.5}
        defaultViewport={{ x: 0, y: 0, zoom: 1.5 }}
        nodesDraggable={false}
        nodesConnectable={false}
        nodeDragThreshold={1}
        proOptions={{ hideAttribution: true }}
        className={`${theme === 'dark' ? 'bg-slate-900/50' : 'bg-slate-50/70'} backdrop-blur-sm border-0`}
        style={{ border: 'none', outline: 'none' }}
      >
        <Controls 
          className={`m-2 ${theme === 'dark' ? 'bg-slate-800/60' : 'bg-white/80'} backdrop-blur-sm border-0 shadow-md rounded-lg`}
          showInteractive={false}
        />
      </ReactFlow>      
      {showDragPrompt && (
      <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 ${theme === 'dark' ? 'bg-slate-800/80' : 'bg-slate-700/90'} text-white backdrop-blur-sm px-3 py-1.5 rounded-full text-xs animate-pulse shadow-md`}>
        <span className="flex items-center gap-1">
          Drag to pan the diagram
        </span>
        </div>
      )}
    </div>
  );
};

// Wrap the inner component with ReactFlowProvider
export const RoadmapFlow: React.FC<RoadmapFlowProps> = (props) => {
  return (
    <ReactFlowProvider>
      <RoadmapFlowInner {...props} />
    </ReactFlowProvider>
  );
};
