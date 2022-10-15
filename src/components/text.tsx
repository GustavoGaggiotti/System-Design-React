import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ReactNode } from "react";

export interface textProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  aschild?: boolean;
}

export function text({ size = "md", children, aschild }: textProps) {
  const Comp = aschild ? Slot : "span";
  return (
    <Comp
      className={clsx("text-gray-100 font-sans", {
        "text-xs": size === "sm",
        "text-sm": size === "md",
        "text-md": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
}
