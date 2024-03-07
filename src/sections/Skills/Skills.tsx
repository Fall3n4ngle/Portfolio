"use client";

import { animationVariants, navigationItems } from "@/common/const";
import { skills } from "./const";
import { motion } from "framer-motion";
import { useSectionInView } from "@/common/hooks";
import { useScopedI18n } from "@/lib/i18n/client";
import { HoverEffect } from "@/ui";

export default function Skills() {
  const { ref } = useSectionInView("skills", 1);
  const t = useScopedI18n("skills");

  return (
    <section
      ref={ref}
      id={navigationItems.skills.id}
      className="mb-28 scroll-mt-24"
    >
      <motion.h2 {...animationVariants} className="h2 mb-14 text-center">
        {" "}
        {t("title")}
      </motion.h2>
      <motion.div {...animationVariants}>
        <HoverEffect items={skills} />
      </motion.div>
    </section>
  );
}
