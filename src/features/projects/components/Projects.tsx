import React from "react";
import ProjectItem from "./ProjectItem";
import { ProjectData } from "../projects.types";

interface ProjectsProps {
    data: ProjectData[];
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
    return (
        <section className="projects w-full">
            <ul className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 p-0">
                {data.map((project) => (
                    <li key={project.id} className="list-none">
                        <ProjectItem title={project.title} imageUrl={project.imageUrl} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
