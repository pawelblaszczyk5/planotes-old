import { useEffect } from 'react';
import { THEME_LOCAL_STORAGE_KEY } from '~/lib/constants';
import { Theme } from '~/lib/enums';
import { useMedia } from '~/lib/hooks/';

export const ThemeSetter = () => {
  // Using inline script to set handle themeing to avoid FOUC
  const script = `
    window.handleThemeChange = () => {
      const theme = localStorage.getItem('${THEME_LOCAL_STORAGE_KEY}');
      if (
        localStorage.getItem('${THEME_LOCAL_STORAGE_KEY}') === '${Theme.DARK}' ||
        (!theme && window.matchMedia('(prefers-color-scheme:dark)').matches)
      ) {
        document.documentElement.classList.add('dark');
        return;
      }
      document.documentElement.classList.remove('dark');
    };
    window.setTheme = (newTheme) => {
      newTheme === ${Theme.SYSTEM}
        ? localStorage.removeItem('${THEME_LOCAL_STORAGE_KEY}')
        : localStorage.setItem('${THEME_LOCAL_STORAGE_KEY}', newTheme);
      handleThemeChange();
    };
    handleThemeChange();
  `;
  const prefersDarkScheme = useMedia('(prefers-color-scheme: dark)');

  useEffect(() => {
    window.handleThemeChange();
  }, [prefersDarkScheme]);

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
};
