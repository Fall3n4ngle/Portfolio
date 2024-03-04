"use client";

import { animationVariants, navigationItems } from "@/common/const";
import { skills } from "./const";
import { motion } from "framer-motion";
import { useSectionInView } from "@/common/hooks";

export default function Skills() {
  const { ref } = useSectionInView("skills", 1);

  return (
    <motion.section
      ref={ref}
      id={navigationItems.skills.id}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-20 scroll-mt-24"
    >
      <h2 className="h2 mb-14 text-center">Skills</h2>
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
    </motion.section>
  );
}
