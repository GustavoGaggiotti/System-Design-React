import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
export interface TextinputrootProps {
  children: ReactNode;
}

function Textinputroot(props: TextinputrootProps) {
  return (
    <div className="flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within::ring-2 ring-cyan-300">
      {props.children}
    </div>
  );
}

export interface TextinputiconProps {
  children: ReactNode;
}

function Textinputicon(props: TextinputiconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

export interface TextinputinputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function Textinputinput(props: TextinputinputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
}
export const Textinput = {
  root: Textinputroot,
  input: Textinputinput,
  icon: Textinputicon,
};
