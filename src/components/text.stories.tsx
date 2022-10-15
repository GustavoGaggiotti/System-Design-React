import { Meta, StoryObj } from "@storybook/react";
import { text, textProps } from "./text";

export default {
  title: "components/text",
  component: text,
  args: {
    children: "lorem ipsum",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<textProps>;

export const Default: StoryObj<textProps> = {};

export const small: StoryObj<textProps> = {
  args: {
    size: "sm",
  },
};

export const large: StoryObj = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj = {
  args: {
    aschild: true,
    children: <p>Testing with P tag</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    aschild: {
      table: {
        disable: true,
      },
    },
  },
};
