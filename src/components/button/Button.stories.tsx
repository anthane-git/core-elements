import { Story } from "@storybook/react";
import { Button } from "./Button";
import { ButtonProps } from "./Button.interface";

export default {
  title: "Button",
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: "Primary",
  variant: "primary",
};

export const Danger = Template.bind({});

Danger.args = {
  children: "Danger",
  variant: "danger",
  shape: "rounded",
};
