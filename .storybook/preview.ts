import '~/index.css';
import '/.storybook/preview.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: { disable: true },
  themes: {
    clearable: false,
    list: [
      {
        name: 'Light',
        class: [],
        color: 'rgb(214 211 209)',
        default: true,
      },
      {
        name: 'Dark',
        class: ['dark'],
        color: 'rgb(28 25 23)',
      },
    ],
  },
};
