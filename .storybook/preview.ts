import '~/index.css';
import '@fontsource/manrope/300.css';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/manrope/800.css';
import './preview.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: { disable: true },
  themes: {
    clearable: false,
    list: [
      {
        name: 'Light',
        class: [],
        color: 'rgb(250 250 250)',
        default: true,
      },
      {
        name: 'Dark',
        class: ['dark'],
        color: 'rgb(39 39 42)',
      },
    ],
  },
};
