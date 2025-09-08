import { RoadmapData } from "../types";
import { fullstackRoadmap } from "./fullstack";
import { aiMlRoadmap } from "./ai-ml";
import { cyberSecRoadmap } from "./cybersecurity";
import { blockchainRoadmap } from "./blockchain";

export const allRoadmaps: Record<string, RoadmapData> = {
  fullstack: fullstackRoadmap,
  aiMl: aiMlRoadmap,
  cyber: cyberSecRoadmap,
  blockchain: blockchainRoadmap,
};
