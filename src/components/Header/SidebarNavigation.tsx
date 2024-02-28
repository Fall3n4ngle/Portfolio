import { Button, Sheet, SheetClose, SheetContent, SheetTrigger } from "@/ui";
import { cn } from "@/common/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { navigationItems } from "@/common/const";

export default function SidebarNavigation() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent className="flex w-full items-center justify-center bg-bg-secondary min-[440px]:max-w-[384px]">
        <nav>
          <ul className="flex flex-col items-center gap-3">
            {navigationItems.map(({ href, label }, index) => {
              const isActive = index === 0;

              return (
                <li key={href}>
                  <Link href={href}>
                    <SheetClose
                      className={cn(
                        "inline-block rounded-3xl px-10 py-2 text-xl text-text-primary/70 transition-all",
                        isActive && "bg-primary text-primary-foreground"
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
