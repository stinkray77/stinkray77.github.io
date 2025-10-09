import React from "react";
import HomeLayout from "@/components/layout/home-layout";
import { ProjectItem } from "@/types/projects";
import ProjectCard from "@/components/ui/project-card";

const ProjectsPage: React.FC = () => {
  const projects: ProjectItem[] = [
    {
      name: "Project 1",
      description: "Description of project",
      date: "Aug 2025 - Present",
      actions: [{
        text: "Repo",
        link: "https://github.com/ShearesWeb/ReactWorkSHop/blob/main/src/pages/index.tsx"
      }]
    },
    {
      name: "Project 2",
      description: "Description of project",
      date: "Aug 2025 - Present",
      actions: [{
        text: "Repo",
        link: "https://github.com/ShearesWeb/ReactWorkSHop/blob/main/src/pages/index.tsx"
      }]
    }
  ]

  return (
    <HomeLayout>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <h2 className="text-xl font-semibold mb-4">Projects Page!</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map(project => (
            <ProjectCard project={project}></ProjectCard>
          ))}
        </div>
      </div>
    </HomeLayout>
  );
};

export default ProjectsPage;

export const Head = () => <title>Projects</title>