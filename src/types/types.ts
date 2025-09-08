export interface Resource {
    name: string;
    url?: string;
}

export interface Task {
    description: string;
    resources?: Resource[];
}

export interface RoadmapSection {
    id: string;
    title: string;
    icon: string;
    description: string;
    tasks: Task[];
    nextSections?: string[]; // IDs of the next sections in the roadmap
    isOptional?: boolean;
}

export interface RoadmapData {
    overview: string;
    sections: RoadmapSection[];
} 
