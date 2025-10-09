import React from "react";
import HomeLayout from "@/components/layout/home-layout";
import ProjectCard from "@/components/ui/project-card";

const ProjectsPage: React.FC = () => {
  return (
    <HomeLayout>
      <div className="pt-12 lg:pt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <ProjectCard project={{ name: "Project 1", description: "project 1" }} />
        <ProjectCard project={{ name: "Project 2", description: "project 2" }} />
        <ProjectCard project={{ name: "Project 3", description: "project 3" }} />
        <ProjectCard project={{ name: "Project 4", description: "project 4" }} />
        <ProjectCard project={{ name: "Project 5", description: "project 5" }} />
      </div>
    </HomeLayout>
  );
};

export default ProjectsPage;

export const Head = () => <title>Projects</title>