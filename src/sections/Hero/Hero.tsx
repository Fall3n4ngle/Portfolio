"use client";

import { navigationItems } from "@/common/const";
import { useSectionInView } from "@/common/hooks";
import { animationVariants } from "@/common/const";
import { Button } from "@/ui";
import { LuArrowDown, LuArrowDownToLine } from "react-icons/lu";
import Link from "next/link";
import { useScopedI18n } from "@/lib/i18n/client";
import { motion } from "framer-motion";

export default function Hero() {
  const { ref } = useSectionInView("home", 0.75);
  const t = useScopedI18n("hero");

  return (
    <section
      ref={ref}
      id={navigationItems.home.id}
      className="relative flex h-screen max-h-[700px]  scroll-mt-24 items-center gap-24"
    >
      <div className="text-center max-w-[800px] mx-auto">
        <motion.h3 {...animationVariants} className="h3 mb-3">
          {t("subtitle")}
        </motion.h3>
        <motion.h1
          {...animationVariants}
          transition={{
            delay: 0.1,
          }}
          className="h1 mb-6"
          dangerouslySetInnerHTML={{ __html: t("title") }}
        />
        <motion.p
          {...animationVariants}
          transition={{
            delay: 0.2,
          }}
          className="lead mb-8 leading-10"
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
              <LuArrowDown className="h-5 w-5" />
            </Button>
          </Link>
          <Button variant="secondary" className="gap-1">
            {t("cvButton")}
            <LuArrowDownToLine className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
