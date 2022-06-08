import type { Theme } from '~/lib/types';
import type shared from 'public/locales/en/shared.json';

import 'react-i18next';

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

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'shared';
    resources: {
      shared: typeof shared;
    };
  }
}
