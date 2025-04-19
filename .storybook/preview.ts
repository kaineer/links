import type { Preview } from '@storybook/react'
import '../src/App.css'

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'default', value: 'var(--background-color)' },
      ]
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
