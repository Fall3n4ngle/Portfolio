"use client";

import { cn } from "@/common/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons/lib";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    Icon: IconType;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6",
        className,
      )}
    >
      {items.map(({ Icon, title }, idx) => (
        <div
          key={idx}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-lg bg-secondary"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-20 w-full cursor-pointer overflow-hidden rounded-md bg-background p-4 ring-primary transition-all duration-500 group-hover:ring-2">
            <div className="space-y-4 py-5">
              <Icon className="mx-auto h-7 w-7" />
              <p className="sm:text-lg text-muted-foreground text-center">{title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
