import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: 'Base/Links/Item',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default'
    }
  }
}

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    iconClass: 'fa-twitter',
    text: 'Link'
  }
}

export const Dark: Story = {
  args: {
    iconClass: 'fa-twitter',
    text: 'Dark link',
    variation: 'dark',
  }
}

export const Twitter: Story = {
  args: {
    iconClass: 'fa-twitter',
    text: 'Twitter link',
    variation: 'twitter',
    url: 'https://x.com/kaineer'
  }
}
