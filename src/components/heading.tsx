import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ReactNode } from "react";

export interface headingProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  aschild?: boolean;
}

export function heading({ size = "md", children, aschild }: headingProps) {
  const Comp = aschild ? Slot : "h2";
  return (
    <Comp
      className={clsx("text-gray-100 font-bold font-sans", {
        "text-lg": size === "sm",
        "text-xl": size === "md",
        "text-xxl": size === "lg",
      })}
    >
      {children}
    </Comp>
  );
}
