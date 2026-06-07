import type { Preview } from '@storybook/nextjs-vite';
import { withThemeByClassName } from '@storybook/addon-themes';
import '../app/globals.css';
import './themes.css';

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        'Default (light)': '',
        'Dark': 'dark',
        'Travel': 'theme-travel',
        'Retail': 'theme-retail',
        'Healthcare': 'theme-healthcare',
        'Chemist Warehouse': 'theme-chemist',
        'Coles': 'theme-coles',
      },
      defaultTheme: 'Default (light)',
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
