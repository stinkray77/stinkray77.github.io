import type { ActionButtonField } from "./action-button";

export interface ProjectItem {
    name: string;
    description: string;
    date?: string;
    actions?: ActionButtonField[];
}

export interface ProjectContent {
    // an array of projects
}