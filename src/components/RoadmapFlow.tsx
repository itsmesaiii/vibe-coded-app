import React, { useCallback, useState, useEffect } from "react";
import ReactFlow, {
  Controls,
  Node,
  useReactFlow,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";
import { useTheme } from "../contexts/ThemeContext";
import { RoadmapData } from "../types";

interface RoadmapFlowProps {
  data: RoadmapData; // 👈 new
  completedSections: Set<string>;
  currentSection: string | null;
  onSectionClick: (sectionId: string) => void;
  completedTasks: Set<string>;
}

const RoadmapFlowInner: React.FC<RoadmapFlowProps> = ({
  data,
  completedSections,
  currentSection,
  onSectionClick,
  completedTasks,
}) => {
  const { theme } = useTheme();
  const reactFlowInstance = useReactFlow();

  const nodeStyle = {
    padding: "16px 24px",
    borderRadius: "16px",
    border: "none",
    fontSize: "14px",
    width: 280,
    textAlign: "center" as const,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    boxShadow: "none",
    background: theme === "dark" ? "#1e293b" : "#ffffff",
    borderColor: theme === "dark" ? "#334155" : "#e2e8f0",
    color: theme === "dark" ? "#e2e8f0" : "#334155",
    backdropFilter: "blur(8px)",
  };

  // Calculate positions
  const calculateNodePositions = () => {
    const positions: Record<string, { x: number; y: number }> = {};
    const HORIZONTAL_SPACING = 350;
    const VERTICAL_SPACING = 150;
    const INITIAL_Y_OFFSET = 20;
    let currentLevel = 0;
    let nodesInCurrentLevel: string[] = [data.sections[0]?.id];

    while (nodesInCurrentLevel.length > 0) {
      nodesInCurrentLevel.forEach((nodeId, index) => {
        const xOffset =
          (index - (nodesInCurrentLevel.length - 1) / 2) * HORIZONTAL_SPACING;
        positions[nodeId] = {
          x: xOffset,
          y: currentLevel * VERTICAL_SPACING + INITIAL_Y_OFFSET,
        };
      });

      const nextLevelNodes: string[] = [];
      nodesInCurrentLevel.forEach((nodeId) => {
        const section = data.sections.find((s) => s.id === nodeId);
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
      return theme === "dark"
        ? "rgba(37, 99, 235, 0.8)"
        : "rgba(59, 130, 246, 0.9)";
    }
    if (completedTasks.has(id)) {
      return theme === "dark"
        ? "rgba(6, 95, 70, 0.8)"
        : "rgba(5, 150, 105, 0.9)";
    }
    return theme === "dark"
      ? "rgba(30, 41, 59, 0.8)"
      : "rgba(255, 255, 255, 0.95)";
  };

  const nodes = data.sections.map((section) => {
    const tasksCompleted = section.tasks.filter((task) => {
      const taskId = `${section.id}-task-${task.id}`;
      return completedTasks.has(taskId);
    }).length;

    const totalTasks = section.tasks.length;
    const progress =
      totalTasks > 0 ? Math.round((tasksCompleted / totalTasks) * 100) : 0;

    return {
      id: section.id,
      data: {
        label: (
          <div
            style={{
              ...nodeStyle,
              background: getNodeBackgroundColor(section.id),
              transform:
                currentSection === section.id ? "scale(1.03)" : "scale(1)",
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
              <div
                className={`mt-3 h-1.5 ${
                  currentSection === section.id
                    ? "bg-white/40 dark:bg-slate-900/40"
                    : "bg-gray-200/30 dark:bg-gray-700/30"
                } rounded-full overflow-hidden`}
              >
                <div
                  className={`h-full ${
                    currentSection === section.id
                      ? "bg-white/90 dark:bg-slate-100/90"
                      : "bg-blue-500/70 dark:bg-blue-400/70"
                  } rounded-full transition-all duration-500`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </div>
        ),
      },
      position: nodePositions[section.id] || { x: 0, y: 0 },
      type: "default",
      style: {
        background: "transparent",
        border: "none",
        width: 280,
      },
    };
  });

  const edges = data.sections.flatMap((section) =>
    (section.nextSections || []).map((nextId) => ({
      id: `${section.id}-${nextId}`,
      source: section.id,
      target: nextId,
      style: {
        stroke: theme === "dark" ? "#475569" : "#cbd5e1",
        strokeWidth: 1.5,
        strokeDasharray: "5,5",
      },
      type: "smoothstep",
    }))
  );

  const handleNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      onSectionClick(node.id);
    },
    [onSectionClick]
  );

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
        proOptions={{ hideAttribution: true }}Created by ChatGPT
        className={`${
          theme === "dark" ? "bg-slate-900/50" : "bg-slate-50/70"
        } backdrop-blur-sm border-0`}
        style={{ border: "none", outline: "none" }}
      >
        <Controls className="m-2" showInteractive={false} />
      </ReactFlow>
    </div>
  );
};

export const RoadmapFlow: React.FC<RoadmapFlowProps> = (props) => (
  <ReactFlowProvider>
    <RoadmapFlowInner {...props} />
  </ReactFlowProvider>
);
