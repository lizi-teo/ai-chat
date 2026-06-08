import type { Preview } from '@storybook/nextjs-vite';
import { withThemeByClassName } from '@storybook/addon-themes';
import '../app/globals.css';
import './themes.css';

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        'Light': '',
        'Dark': 'dark',
      },
      defaultTheme: 'Light',
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
