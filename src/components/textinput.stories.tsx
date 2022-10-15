import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { Textinput, TextinputrootProps } from "./textinput";

export default {
  title: "components/Textinput",
  component: Textinput.root,
  args: {
    children: [
      <Textinput.icon>
        <Envelope />
      </Textinput.icon>,
      <Textinput.input placeholder="digite seu e-mail" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextinputrootProps>;

export const Default: StoryObj<TextinputrootProps> = {};

export const withouticon: StoryObj<TextinputrootProps> = {
  args: {
    children: <Textinput.input placeholder="digite seu e-mail" />,
  },
};
