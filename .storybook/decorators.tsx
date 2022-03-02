import { DecoratorFn } from '@storybook/react';
import { useEffect } from 'react';

const css = document.createElement('style');

css.appendChild(
  document.createTextNode(
    `* {
       -webkit-transition: none !important;
       -moz-transition: none !important;
       -o-transition: none !important;
       -ms-transition: none !important;
       transition: none !important;
    }`,
  ),
);

const withTheme: DecoratorFn = (Story, { globals: { theme = 'light' } }) => {
  useEffect(() => {
    document.head.appendChild(css);
    document.documentElement.classList[theme === 'dark' ? 'add' : 'remove']('dark');
    window.getComputedStyle(css).opacity;
    document.head.removeChild(css);
  }, [theme]);

  return <Story />;
};

export const globalDecorators = [withTheme];
