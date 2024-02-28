import { navigationItems } from "@/common/const";
import { cn } from "@/common/utils";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="rounded-3xl bg-secondary px-2.5 py-1.5">
      <ul className="flex items-center gap-2 ">
        {navigationItems.map((item, index) => {
          const { href, label } = item;
          const isActive = index === 0;

          return (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "relative z-20 inline-block rounded-3xl px-[15px] py-[5px] text-text-primary/70 transition-all hover:text-text-primary",
                  isActive && "text-primary-foreground"
                )}
              >
                {label}
                {isActive && (
                  <span className="absolute inset-0 -z-10 rounded-3xl bg-primary" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
