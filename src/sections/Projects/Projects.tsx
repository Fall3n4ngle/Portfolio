"use client";

import { useTheme } from "next-themes";
import ProjectCard from "./ProjectCard";
import { projects } from "./const";
import { motion } from "framer-motion";
import { animationVariants, navigationItems } from "@/common/const";
import { useSectionInView } from "@/common/hooks";
import { useScopedI18n } from "@/lib/i18n/client";

export default function Projects() {
  const { theme } = useTheme();
  const { ref } = useSectionInView("projects", 0.25);
  const t = useScopedI18n("projects");

  return (
    <section
      ref={ref}
      id={navigationItems.projects.id}
      className="mx-auto mb-28 scroll-mt-24"
    >
      <motion.h2 {...animationVariants} className="h2 mb-14 text-center">
        {t("title")}
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
