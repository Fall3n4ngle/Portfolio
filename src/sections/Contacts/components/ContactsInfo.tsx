import { useScopedI18n } from "@/lib/i18n/client";
import { LuMail, LuPhone, LuGithub } from "react-icons/lu";

export default function ContactsInfo() {
  const t = useScopedI18n("contacts");

  return (
    <div>
      <p className="lead mb-10 text-center sm:text-left">{t("message")}</p>
      <address className="flex flex-col items-center gap-3 sm:items-start">
        <a
          href="https://github.com/Fall3n4ngle"
          className="flex items-center gap-4"
          target="_blank"
        >
          <div className="bg-bg-secondary flex items-center justify-center rounded-full p-3">
            <LuGithub className="h-6 w-6" />
          </div>
          https://github.com/Fall3n4ngle
        </a>
        <a
          href="mailto:sashaoliyar7@gmail.com"
          className="flex items-center gap-4"
        >
          <div className="bg-bg-secondary flex items-center justify-center rounded-full p-3">
            <LuMail className="h-6 w-6" />
          </div>
          sashaoliyar7@gmail.com
        </a>
        <a href="tel:+380980253732" className="flex items-center gap-4">
          <div className="bg-bg-secondary flex items-center justify-center rounded-full p-3">
            <LuPhone className="h-6 w-6" />
          </div>
          +38 (098) 025 3732
        </a>
      </address>
    </div>
  );
}
