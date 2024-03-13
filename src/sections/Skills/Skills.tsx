"use client";

import { animationVariants, navigationItems } from "@/common/const";
import { skills } from "./const";
import { motion } from "framer-motion";
import { useSectionInView } from "@/common/hooks";
import { useScopedI18n } from "@/lib/i18n/client";
import SkillCard from "./SkillCard";

export default function Skills() {
  const { ref } = useSectionInView("skills", 1);
  const t = useScopedI18n("skills");

  return (
    <section
      ref={ref}
      id={navigationItems.skills.id}
      className="mb-36 scroll-mt-24"
    >
      <motion.h2 {...animationVariants} className="h2 mb-28 text-center">
        {" "}
        {t("title")}
      </motion.h2>
      <motion.ul
        {...animationVariants}
        className="grid gap-y-12 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
      >
        {skills.map((skill, id) => (
          <li key={id}>
            <SkillCard {...skill} />
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
