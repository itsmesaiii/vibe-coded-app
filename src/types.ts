export interface Resource {
    name: string;
    url: string;
}

export interface Task {
    id: string;
    title: string;
    description: string;
    resources: Array<{
        title: string;
        url: string;
    }>;
}

export interface RoadmapSection {
    id: string;
    title: string;
    emoji: string;
    description: string;
    tasks: Task[];
    nextSections?: string[]; // IDs of the next sections in the roadmap
}

export interface RoadmapData {
    overview: string;
    sections: RoadmapSection[];
} 
