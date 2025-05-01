import type { Meta, StoryObj } from "@storybook/react";
import { LinkPage } from "./LinkPage";
import avatar from '../assets/avatar.jpg'
import { Avatar } from "../components/profile/Avatar";

const meta: Meta<typeof LinkPage> = {
  title: 'Pages/LinkPage',
  component: LinkPage,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default'
    }
  }
}

export default meta;

type Story = StoryObj<typeof LinkPage>;

const styleInCenter = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

export const Default: Story = {
  args: {
    profile: {
      title: "Tangerine Cat",
      bio: "Примерно так, примерно здесь",
      url: avatar,
    },
    links: [
      { text: 'Twitter', url: 'https://twitter.com/kaineer',
        iconClass: 'fa-twitter', variation: 'twitter',
      },
      { text: 'Telegram', url: 'https://t.me/kaineer',
        iconClass: 'fa-telegram', variation: 'dark',
      },
      { text: 'Беру и делаю', url: 'https://nhee.ru/blog',
        iconClass: 'fa-regular fa-circle-user',
      },
    ],
    icons: [
      { url: 'https://twitter.com/kaineer', iconClass: 'fa-twitter' },
      { url: 'mailto:kaineer@gmail.com', iconClass: 'fa-regular fa-envelope' },
    ],
  },
  decorators: [
    (Story) => (
      <div style={styleInCenter}>
        <Story />
      </div>
    ),
  ],
}
