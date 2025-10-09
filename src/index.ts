import type { ProjectItem } from "./types/projects";

const projects: ProjectItem[] = [
    {
        name: "Portfolio Website",
        description: "A personal website built with React and TypeScript.",
        additional_description: "Deployed on Vercel with CI/CD setup.",
        date: "2024-06"
    },
    {
        name: "Task Manager API",
        description: "REST API for managing tasks using Node.js and Express.",
        date: "2024-03"
    },
    {
        name: "Data Scraper",
        description: "A Python script that extracts data from websites and stores it in CSV.",
    }
];

console.log("=== Projects ===");
projects.map((proj, i) => {
    console.log(`\n${i + 1}. ${proj.name}`);
    console.log(`   ${proj.description}`);
    if (proj.additional_description) console.log(`   Note: ${proj.additional_description}`);
    if (proj.date) console.log(`   Date: ${proj.date}`);
});