"use client";

import { Button } from "@/ui";
import { ArrowDown, ArrowDownToLine } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { animationVariants, navigationItems } from "@/common/const";
import { useSectionInView } from "@/common/hooks";
import { useScopedI18n } from "@/lib/i18n/client";

export default function Hero() {
  const { ref } = useSectionInView("home", 0.75);
  const t = useScopedI18n("hero");

  return (
    <section
      ref={ref}
      id={navigationItems.home.id}
      className="relative flex h-screen max-h-[600px] scroll-mt-24 items-center justify-center gap-24 text-center"
    >
      <div className="max-w-[750px]">
        <motion.h3 {...animationVariants} className="h3 mb-2">
          {t("subtitle")}
        </motion.h3>
        <motion.h1
          {...animationVariants}
          transition={{
            delay: 0.1,
          }}
          className="h1 mb-5"
          dangerouslySetInnerHTML={{ __html: t("title") }}
        />
        <motion.p
          {...animationVariants}
          transition={{
            delay: 0.2,
          }}
          className="lead mb-6"
          dangerouslySetInnerHTML={{ __html: t("info") }}
        />
        <motion.div
          {...animationVariants}
          transition={{
            delay: 0.3,
          }}
          className="flex flex-wrap-reverse items-center justify-center gap-3"
        >
          <Link href="#projects">
            <Button className="gap-1">
              {t("projectsButton")}
              <ArrowDown className="h-5 w-5" />
            </Button>
          </Link>
          <Button variant="secondary" className="gap-1">
            {t("cvButton")}
            <ArrowDownToLine className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
