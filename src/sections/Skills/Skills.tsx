"use client";

import { animationVariants, navigationItems } from "@/common/const";
import { skills } from "./const";
import { motion } from "framer-motion";
import { useSectionInView } from "@/common/hooks";
import { useScopedI18n } from "@/lib/i18n/client";

export default function Skills() {
  const { ref } = useSectionInView("skills", 1);
  const t = useScopedI18n("skills");

  return (
    <section
      ref={ref}
      id={navigationItems.skills.id}
      className="mb-20 scroll-mt-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h2 mb-14 text-center"
      >
        {" "}
        {t("title")}
      </motion.h2>
      <ul className="mx-auto flex max-w-[650px] flex-wrap items-center justify-center gap-3">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            {...animationVariants}
            transition={{ delay: index * 0.03 }}
            className="h-[44px] whitespace-nowrap rounded-2xl bg-secondary px-5 py-2.5 font-semibold sm:text-lg"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
