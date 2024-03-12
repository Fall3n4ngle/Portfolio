import Image, { StaticImageData } from "next/image";
import { Button } from "@/ui";
import Link from "next/link";
import { cn } from "@/common/utils";
import { Project } from "./types";

type Props = Omit<Project, "image"> & {
  direction: "rtl" | "ltr";
  image: StaticImageData;
};

export default function ProjectCard({
  categories,
  description,
  githubLink,
  image,
  siteLink,
  title,
  direction,
}: Props) {
  return (
    <article className="flex flex-col items-center gap-7 md:flex-row">
      <div
        className={cn("relative aspect-[9/6] w-full md:basis-1/2", {
          "md:order-2": direction === "ltr",
          "md:order-1": direction === "rtl",
        })}
      >
        <Image src={image} alt={title} fill className="rounded-xl" />
      </div>
      <div
        className={cn("p-4 text-center md:basis-1/2 md:text-left", {
          "md:order-1": direction === "ltr",
          "md:order-2": direction === "rtl",
        })}
      >
        <ul
          className={cn(
            "flex items-center justify-center gap-4 md:justify-start mb-6",
          )}
        >
          {categories.map((category) => (
            <li
              key={category}
              className="rounded-full bg-secondary px-4 py-1 text-sm font-semibold italic text-secondary-foreground"
            >
              {category}
            </li>
          ))}
        </ul>
        <h3 className="h4 mb-2.5 ">{title}</h3>
        <p className="text-sm leading-7 tracking-wide text-muted-foreground md:text-base mb-7">
          {description}
        </p>
        <div className=" flex items-center justify-center gap-3 md:justify-start">
          <Link href={siteLink} target="_blank">
            <Button variant="link">View site</Button>
          </Link>
          <Link href={githubLink} target="_blank">
            <Button variant="link">Github</Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
