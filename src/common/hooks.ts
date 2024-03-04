import { useActiveSection } from "@/providers/ActiveSection";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { SectionId } from "./const";

export const useSectionInView = (section: SectionId, amount: number) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount });
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(section);
    }
  }, [isInView, setActiveSection, section]);

  return { ref };
};
