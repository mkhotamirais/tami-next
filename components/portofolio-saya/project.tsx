import { Title } from "./components";
import { projectList } from "./menu";
import ProjectItem from "./project-item";
import React from "react";

export default function Project() {
  return (
    <section className="min-h-[80vh] max-w-xl mx-auto px-3">
      <Title>My Projects</Title>
      <div className="flex flex-col gap-4">
        {projectList.map((item, i) => (
          <React.Fragment key={i}>
            <ProjectItem {...item} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
