import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./button";

export default {
  title: "components/Button",
  component: Button,
  args: {
    children: "Create account",
  },
  argTypes: {},
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
