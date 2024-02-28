"use client";

import { useTheme } from "next-themes";
import ProjectCard from "./ProjectCard";
import { projects } from "./const";

export default function Projects() {
  const { theme } = useTheme();

  return (
    <section
      id="projects"
      className="mx-auto max-w-[900px] scroll-mt-24 mb-20"
    >
      <h2 className="mb-14 scroll-m-20 text-center text-3xl font-semibold tracking-tight first:mt-0">
        Projects
      </h2>
      <div className="flex flex-col gap-16">
        {projects.map(({ image, ...project }, index) => {
          return (
            <ProjectCard
              key={index}
              {...project}
              image={theme === "dark" ? image.dark : image.light}
              direction={index % 2 === 0 ? "rtl" : "ltr"}
            />
          );
        })}
      </div>
    </section>
  );
}
