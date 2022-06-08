import '~/styles/index.css';
import './styles.css';

import { globalDecorators } from './decorators';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: { disable: true },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Theme for the components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
      ],
    },
  },
};

export const decorators = globalDecorators;
