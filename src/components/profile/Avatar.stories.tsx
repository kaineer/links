import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: 'Base/Profile/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default'
    }
  }
}

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    url: "https://avatar.iran.liara.run/public/job/doctor/male"
  }
}
