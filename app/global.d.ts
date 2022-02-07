import type { Theme } from '~/lib/enums';

declare global {
  interface Window {
    setTheme: (newTheme: Theme) => void;
    handleThemeChange: () => void;
  }
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AUTH_SECRET: string;
      COOKIE_SECRET: string;
      SMTP_HOST: string;
      SMTP_USER: string;
      SMTP_PASSWORD: string;
      SESSIONS_DIR: string;
      DKIM_PRIVATE_KEY: string;
      DKIM_SELECTOR: string;
    }
  }
}
