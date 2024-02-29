import { Mail, Phone, Github } from "lucide-react";

export default function ContactsInfo() {
  return (
    <div>
      <p className="mb-10 text-center text-xl text-muted-foreground sm:text-left leading-[1.85rem]">
        Feel free to reach out with any inquiries, collaborations, or projects!
        I&apos;m passionate about creating engaging web experiences and would
        love to connect with you.
      </p>
      <address className="flex flex-col items-center gap-3 sm:items-start">
        <a
          href="https://github.com/Fall3n4ngle"
          className="flex items-center gap-4"
          target="_blank"
        >
          <div className="bg-bg-secondary flex items-center justify-center rounded-full p-3">
            <Github className="h-6 w-6" />
          </div>
          https://github.com/Fall3n4ngle
        </a>
        <a
          href="mailto:sashaoliyar7@gmail.com"
          className="flex items-center gap-4"
        >
          <div className="bg-bg-secondary flex items-center justify-center rounded-full p-3">
            <Mail className="h-6 w-6" />
          </div>
          sashaoliyar7@gmail.com
        </a>
        <a href="tel:+380980253732" className="flex items-center gap-4">
          <div className="bg-bg-secondary flex items-center justify-center rounded-full p-3">
            <Phone className="h-6 w-6" />
          </div>
          +38 (098) 025 3732
        </a>
      </address>
    </div>
  );
}
