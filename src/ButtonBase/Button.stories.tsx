import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button } from "./Button";
import { ButtonBaseProps } from "./types";

export default {
  title: "Example/ButtonBase",
  component: Button,
  args: {
    variant: "primary",
    isRightIcon: false,
    isDisabled: true,
    label: "Button",
  },
} as Meta;

const Template: Story<ButtonBaseProps> = (args) =><><h3>Play around with primary/secondary button styles using controls provided</h3> <Button {...args} /></>;

export const ButtonBase = Template.bind({});

export const Primary: React.FC = () => (
  <>
  <h3>Disabled</h3>
  <Button variant="primary" isDisabled={true} label="Button" />
  <h3> Disabled with right icon</h3>
  <Button
    variant="primary"
    isDisabled={true}
    label="Button"
    isRightIcon={true}
  />
  <h3>Disabled with left icon</h3>
  <Button
    variant="primary"
    isDisabled={true}
    label="Button"
    isLeftIcon={true}
  />
  <h3>Idle/hover</h3>
  <Button variant="primary" label="Button" />
  <h3>Idle/hover with right icon</h3>
  <Button variant="primary" label="Button" isRightIcon={true}/>
  <h3>Idle/hover with right icon</h3>
  <Button variant="primary" label="Button" isLeftIcon={true}/>
</>
);

export const Secondary: React.FC = () => (
  <>
    <h3>Disabled</h3>
    <Button variant="secondary" isDisabled={true} label="Button" />
    <h3> Disabled with right icon</h3>
    <Button
      variant="secondary"
      isDisabled={true}
      label="Button"
      isRightIcon={true}
    />
    <h3>Disabled with left icon</h3>
    <Button
      variant="secondary"
      isDisabled={true}
      label="Button"
      isLeftIcon={true}
    />
    <h3>Idle/hover</h3>
    <Button variant="secondary" label="Button" />
    <h3>Idle/hover with right icon</h3>
    <Button variant="secondary" label="Button" isRightIcon={true}/>
    <h3>Idle/hover with right icon</h3>
    <Button variant="secondary" label="Button" isLeftIcon={true}/>
  </>
);
