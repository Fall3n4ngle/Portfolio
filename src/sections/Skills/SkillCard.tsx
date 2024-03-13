import { IconType } from "react-icons/lib";

type Props = {
  title: string;
  Icon: IconType;
};

export default function SkillCard({ Icon, title }: Props) {
  return (
    <div className="space-y-4">
      <Icon className="mx-auto h-7 w-7" />
      <p className="text-center text-muted-foreground sm:text-lg">{title}</p>
    </div>
  );
}
