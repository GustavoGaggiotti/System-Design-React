import { Meta, StoryObj } from "@storybook/react";
import { heading, headingProps } from "./heading";

export default {
  title: "components/heading",
  component: heading,
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
} as Meta<headingProps>;

export const Default: StoryObj<headingProps> = {};

export const small: StoryObj<headingProps> = {
  args: {
    size: "sm",
  },
};

export const large: StoryObj<headingProps> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<headingProps> = {
  args: {
    aschild: true,
    children: <h1>Heading with H1</h1>,
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
