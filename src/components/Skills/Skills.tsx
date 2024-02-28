import { skills } from "./const";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="mb-20 scroll-mt-24">
      <h2 className="mb-14 scroll-m-20 text-center text-3xl font-semibold tracking-tight first:mt-0">
        Skills
      </h2>
      <ul className="mx-auto flex max-w-[650px] flex-wrap items-center justify-center gap-3">
        {skills.map((skill, index) => (
          <SkillCard key={index} title={skill} />
        ))}
      </ul>
    </section>
  );
}
