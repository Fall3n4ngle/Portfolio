"use client";

import { useTheme } from "next-themes";
import ProjectCard from "./ProjectCard";
import { ProjectKey, projects } from "./const";
import { motion } from "framer-motion";
import { animationVariants, navigationItems } from "@/common/const";
import { useSectionInView } from "@/common/hooks";
import { useScopedI18n } from "@/lib/i18n/client";

export default function Projects() {
  const { theme } = useTheme();
  const { ref } = useSectionInView("projects", 0.25);
  const t = useScopedI18n("projects");
  const viewSiteText = t("viewSiteText");

  return (
    <section
      ref={ref}
      id={navigationItems.projects.id}
      className="mx-auto mb-32 scroll-mt-24"
    >
      <motion.h2 {...animationVariants} className="h2 mb-16 text-center">
        {t("title")}
      </motion.h2>
      <ul className="flex flex-col gap-16">
        {Object.keys(projects).map((key, index) => {
          const { image, ...data } = projects[key as ProjectKey];
          const description = t(`${key as ProjectKey}.description`);

          return (
            <motion.li key={index} {...animationVariants}>
              <ProjectCard
                {...data}
                description={description}
                viewSiteText={viewSiteText}
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
