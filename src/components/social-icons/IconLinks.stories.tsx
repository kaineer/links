import type { Meta, StoryObj } from "@storybook/react";
import { IconLinks } from "./IconLinks";
import { IconLink } from "./IconLink";

const meta: Meta<typeof IconLinks> = {
  title: 'Social/Container',
  component: IconLinks,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default'
    }
  }
}

export default meta;

type Story = StoryObj<typeof IconLinks>;

export const Default: Story = {
  render: () => (<IconLinks>
    <IconLink iconClass="fa-pinterest" />
    <IconLink iconClass="fa-twitter" />
  </IconLinks>),
}
