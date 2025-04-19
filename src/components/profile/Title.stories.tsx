import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./Title";

const meta: Meta<typeof Title> = {
  title: 'Base/Profile/Title',
  component: Title,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default'
    }
  }
}

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    text: "Tangerine Cat"
  }
}
