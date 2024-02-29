import { Button } from "@/ui";
import { ArrowDown, ArrowDownToLine } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen max-h-[600px] scroll-mt-24 items-center justify-center gap-24 text-center"
    >
      <div className="max-w-[750px]">
        <h3 className="h3 mb-2">Hi, I'm Olexander</h3>
        <h1 className="h1 mb-5">
          I'm a <span className="text-primary">Frontend Developer</span>
        </h1>
        <p className="lead mb-6">
          I specialize in building <strong>modern</strong>,{" "}
          <strong>responsive</strong>, <strong>fast</strong>,{" "}
          <strong>seo-friendly</strong> and <strong>accessible</strong>{" "}
          web-applications using <strong>React.js</strong> and{" "}
          <strong>Next.js</strong>
        </p>
        <div className="flex flex-wrap-reverse items-center justify-center gap-3">
          <Link href="#projects">
            <Button className="gap-1">
              Projects
              <ArrowDown className="h-5 w-5" />
            </Button>
          </Link>
          <Button variant="secondary" className="gap-1">
            Download CV
            <ArrowDownToLine className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
