import type { Meta, StoryObj } from "@storybook/react";
import { Profile } from "./Profile";
import { Title } from "./Title";
import { Avatar } from "./Avatar";
import { Bio } from "./Bio";

const meta: Meta<typeof Profile> = {
  title: 'Profile/Container',
  component: Profile,
  subcomponents: {
    Avatar, Bio, Title,
  },
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default'
    }
  }
}

export default meta;

type Story = StoryObj<typeof Profile>;

export const Default: Story = {
  args: {
    url: "https://avatar.iran.liara.run/public/job/doctor/male",
    title: "Tangerine Cat",
    bio: "вот такого варианта я не ожидал",
  }
}
