"use client";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Title } from "./group-porto-1";
import useSectionView from "./useSectionView";
import { experiencesData } from "./lib/data";
import React from "react";
import { useInView } from "react-intersection-observer";
// import { useInView } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-24 mb-32">
      <Title>Experience</Title>
      <VerticalTimeline animate lineColor="">
        {experiencesData.map((exp, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible
              className="vertical-timeline-element--work dark:text-black"
              contentStyle={{ background: "#f3f4f6", boxShadow: "none", border: "1px solid rgba(0,0,0,0.05)" }}
              contentArrowStyle={{ borderRight: "0.4rem solid #9ca3af" }}
              date={exp.date}
              intersectionObserverProps={useInView}
              iconStyle={{ background: "white", fontSize: "1.5rem" }}
              icon={exp.icon}
            >
              <h3 className="font-semibold capitalize">{exp.title}</h3>
              <p className="font-normal !mt-0">{exp.location}</p>
              <p className="!mt-1 !font-normal">{exp.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
