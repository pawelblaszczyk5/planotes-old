import type { Theme } from '~/lib/enums';

declare global {
  interface Window {
    setTheme: (newTheme: Theme) => void;
    handleThemeChange: () => void;
  }
}
