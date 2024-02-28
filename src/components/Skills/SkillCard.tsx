type Props = {
  title: string;
};

export default function SkillCard({ title }: Props) {
  return (
    <li className="h-[44px] whitespace-nowrap rounded-2xl bg-secondary px-5 py-2.5 font-semibold sm:text-lg">
      {title}
    </li>
  );
}
