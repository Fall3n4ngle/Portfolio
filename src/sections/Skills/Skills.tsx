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
      className="mb-32 scroll-mt-24"
    >
      <motion.h2 {...animationVariants} className="h2 mb-16 text-center">
        {" "}
        {t("title")}
      </motion.h2>
      <motion.div
        {...animationVariants}
        className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
      >
        {skills.map((skill, id) => (
          <SkillCard {...skill} key={id} />
        ))}
      </motion.div>
    </section>
  );
}
