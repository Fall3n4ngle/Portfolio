import { useScopedI18n } from "@/lib/i18n/client";
import Link from "next/link";
import { LuLinkedin, LuPhone, LuGithub } from "react-icons/lu";

export default function ContactsInfo() {
  const t = useScopedI18n("contacts");

  return (
    <div className="text-center md:text-start">
      <p className="lead mb-10">{t("message")}</p>
      <address className="flex flex-col items-center gap-2.5 md:items-start">
        <Link
          href="https://github.com/Fall3n4ngle"
          className="flex items-center gap-4"
          target="_blank"
        >
          <div className="p-3">
            <LuGithub className="h-6 w-6 " />
          </div>
          https://github.com/Fall3n4ngle
        </Link>
        <Link
          href="https://www.linkedin.com/in/oleksandr-oliiar"
          className="flex items-center gap-4"
          target="_blank"
        >
          <div className="p-3">
            <LuLinkedin className="h-6 w-6 " />
          </div>
          www.linkedin.com/in/oleksandr-oliiar
        </Link>
        <Link href="tel:+380980253732" className="flex items-center gap-4">
          <div className="p-3">
            <LuPhone className="h-6 w-6 " />
          </div>
          +38 (098) 025 3732
        </Link>
      </address>
    </div>
  );
}
