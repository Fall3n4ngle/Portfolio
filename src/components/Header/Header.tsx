import LocaleToggle from "./LocaleToggle";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SidebarNavigation from "./SidebarNavigation";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-bg-primary py-3">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="md:hidden">
            <SidebarNavigation />
          </div>
          <Logo />
        </div>
        <div className="hidden md:block">
          <Navigation />
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LocaleToggle />
        </div>
      </div>
    </header>
  );
}
