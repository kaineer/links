import type { Meta, StoryObj } from "@storybook/react";
import { IconLink } from "./IconLink";

const meta: Meta<typeof IconLink> = {
  title: 'Social/IconLink',
  component: IconLink,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default'
    }
  }
}

export default meta;

type Story = StoryObj<typeof IconLink>;

export const Default: Story = {
  args: {
    iconClass: "fa-pinterest"
  }
}
