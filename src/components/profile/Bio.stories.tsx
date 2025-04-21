import type { Meta, StoryObj } from "@storybook/react";
import { Bio } from "./Bio";

const meta: Meta<typeof Bio> = {
  title: 'Profile/Bio',
  component: Bio,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default'
    }
  }
}

export default meta;

type Story = StoryObj<typeof Bio>;

export const Default: Story = {
  args: {
    text: "а вот это интересный вариант, надо попробовать"
  }
}
