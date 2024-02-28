import { PropsWithChildren } from "react";

export function Badge({ children }: PropsWithChildren) {
  return <div className="rounded-md bg-secondary px-2.5 py-1.5">{children}</div>;
}
