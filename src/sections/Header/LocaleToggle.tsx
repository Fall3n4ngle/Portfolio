import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui";
import { Globe } from "lucide-react";
import {
  useChangeLocale,
  useCurrentLocale,
  useScopedI18n,
} from "@/lib/i18n/client";

export default function LocaleToggle() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const t = useScopedI18n("header.localeToggle");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center rounded-md p-2 transition-all"
        >
          <Globe className="text-text-secondary mr-1.5 h-4 w-4" />
          <span className="text-lg">{locale}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{t("title")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="p-0">
          <button onClick={() => changeLocale("en")} className="p-2 text-left">
            {t("en")}
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem className="p-0">
          <button onClick={() => changeLocale("uk")} className="p-2 text-left">
            {t("uk")}
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
