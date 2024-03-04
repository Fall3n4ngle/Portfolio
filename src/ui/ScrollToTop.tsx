"use client";

import { useEffect, useState } from "react";
import { Button } from "./Button";
import { ChevronsUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useActiveSection } from "@/providers";
import Link from "next/link";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToSection } = useActiveSection();

  useEffect(() => {
    const callback = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", callback);
    return () => window.removeEventListener("scroll", callback);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-5 right-5 md:bottom-7 md:right-7"
          onClick={() => {
            scrollToSection("home");
          }}
        >
          <Link href="#home">
            <Button className="h-12 w-12 rounded-full p-3">
              <ChevronsUp className="h-7 w-7" />
            </Button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
