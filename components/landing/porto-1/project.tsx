"use client";

import { Title } from "./group-porto-1";
import React from "react";
import { projectsData } from "./lib/data";
import ProjectItem from "./project-item";
import useSectionView from "./useSectionView";

export default function Project() {
  const { ref } = useSectionView("Projects");

  return (
    <section ref={ref} id="projects" className="scroll-mt-24">
      <Title>My Projects</Title>
      <div className="flex flex-col gap-3">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectItem {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
