import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/ui";
import { cn } from "@/common/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { NavigationKey, navigationItems } from "@/common/const";
import { useActiveSection } from "@/providers";

export default function SidebarNavigation() {
  const { activeSection, scrollToSection } = useActiveSection();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent className="flex w-full items-center justify-center bg-background min-[440px]:max-w-[384px]">
        <nav>
          <ul className="flex flex-col items-center gap-3">
            {Object.keys(navigationItems).map((key) => {
              const { href, label, id } = navigationItems[key as NavigationKey];
              const isActive = id === activeSection;

              return (
                <li key={id}>
                  <Link href={href} onClick={() => scrollToSection(id)}>
                    <SheetClose
                      className={cn(
                        "text-text-primary/70 inline-block rounded-3xl px-10 py-2 text-xl transition-all",
                        isActive && "bg-primary text-primary-foreground",
                      )}
                    >
                      {label}
                    </SheetClose>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
