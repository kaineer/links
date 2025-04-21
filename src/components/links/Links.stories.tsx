import type { Meta, StoryObj } from "@storybook/react";
import { Links } from "./Links";
import { Link } from "./Link";

const meta: Meta<typeof Links> = {
  title: 'Links/Container',
  component: Links,
  subcomponents: { Link },
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default'
    }
  },
}

export default meta;

type Story = StoryObj<typeof Links>;

export const Default: Story = {
  render: () => (
    <Links>
      <Link iconClass="fa-telegram" text="Telegram link" variation="dark" />
      <Link iconClass="fa-twitter" text="Twitter link" variation="twitter" />
      <Link iconClass="fa-github" text="Github link" />
    </Links>
  ),
}
