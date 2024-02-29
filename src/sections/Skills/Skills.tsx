import { skills } from "./const";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="mb-20 scroll-mt-24">
      <h2 className="h2 mb-14 text-center">Skills</h2>
      <ul className="mx-auto flex max-w-[650px] flex-wrap items-center justify-center gap-3">
        {skills.map((skill, index) => (
          <SkillCard key={index} title={skill} />
        ))}
      </ul>
    </section>
  );
}
