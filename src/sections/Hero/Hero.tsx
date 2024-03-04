"use client";

import { Button } from "@/ui";
import { ArrowDown, ArrowDownToLine } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { animationVariants, navigationItems } from "@/common/const";
import { useSectionInView } from "@/common/hooks";

export default function Hero() {
  const { ref } = useSectionInView("home", 0.75);

  return (
    <section
      ref={ref}
      id={navigationItems.home.id}
      className="relative flex h-screen max-h-[600px] scroll-mt-24 items-center justify-center gap-24 text-center"
    >
      <div className="max-w-[750px]">
        <motion.h3 {...animationVariants} className="h3 mb-2">
          Hi, I&apos;m Olexander
        </motion.h3>
        <motion.h1
          {...animationVariants}
          transition={{
            delay: 0.1,
          }}
          className="h1 mb-5"
        >
          I&apos;m a <span className="text-primary">Frontend Developer</span>
        </motion.h1>
        <motion.p
          {...animationVariants}
          transition={{
            delay: 0.2,
          }}
          className="lead mb-6"
        >
          I specialize in building <strong>modern</strong>,{" "}
          <strong>responsive</strong>, <strong>fast</strong>,{" "}
          <strong>seo-friendly</strong> and <strong>accessible</strong>{" "}
          web-applications using <strong>React.js</strong> and{" "}
          <strong>Next.js</strong>
        </motion.p>
        <motion.div
          {...animationVariants}
          transition={{
            delay: 0.3,
          }}
          className="flex flex-wrap-reverse items-center justify-center gap-3"
        >
          <Link href="#projects">
            <Button className="gap-1">
              Projects
              <ArrowDown className="h-5 w-5" />
            </Button>
          </Link>
          <Button variant="secondary" className="gap-1">
            Download CV
            <ArrowDownToLine className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
