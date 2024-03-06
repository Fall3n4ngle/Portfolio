import { useScopedI18n } from "@/lib/i18n/client";
import Link from "next/link";

export default function Logo() {
  const t = useScopedI18n("header");

  return (
    <Link href="#home">
      <h3 className="h3">{t("logo")}</h3>
    </Link>
  );
}
