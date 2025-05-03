import type { Meta, StoryObj } from "@storybook/react";
import { SearchInput } from "./SearchInput";

const meta: Meta<typeof SearchInput> = {
  title: 'Links/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'default'
    }
  },
}

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    term: 'Visible',
    visible: true,
  }
}

export const Hidden: Story = {
  args: {
    term: 'Hidden',
    visible: false,
  }
}
