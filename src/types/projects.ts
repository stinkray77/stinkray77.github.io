import type { ActionButtonField } from "./action-button";

export interface ProjectItem {
    name: string;
    description: string;
    // name, description is required
    // date, svgIcons and actions are optional
}

export interface ProjectContent {
    // an array of projects
}