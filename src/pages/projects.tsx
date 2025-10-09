import React from "react";
import HomeLayout from "@/components/layout/home-layout";
import ProjectCard from "@/components/ui/project-card";

const ProjectsPage: React.FC = () => {
  return (
    <HomeLayout>
      <div className="pt-12 lg:pt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map(project => <ProjectCard key={project.name} project={project} />)}
      </div>
    </HomeLayout>
  );
};

export default ProjectsPage;

export const Head = () => <title>Projects</title>