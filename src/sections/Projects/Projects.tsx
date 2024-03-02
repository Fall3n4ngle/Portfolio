"use client";

import { useTheme } from "next-themes";
import ProjectCard from "./ProjectCard";
import { projects } from "./const";
import { motion } from "framer-motion";
import { animationVariants } from "@/common/const";

export default function Projects() {
  const { theme } = useTheme();

  return (
    <section id="projects" className="mx-auto mb-20 max-w-[900px] scroll-mt-24">
      <motion.h2 {...animationVariants} className="h2 mb-14 text-center">
        Projects
      </motion.h2>
      <ul className="flex flex-col gap-16">
        {projects.map(({ image, ...project }, index) => {
          return (
            <motion.li key={index} {...animationVariants}>
              <ProjectCard
                {...project}
                image={theme === "dark" ? image.dark : image.light}
                direction={index % 2 === 0 ? "rtl" : "ltr"}
              />
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
