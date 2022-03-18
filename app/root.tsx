import type { LinksFunction, MetaFunction } from 'remix';

import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import styles from '~/index.css';
import fontsStyles from '~/fonts.css';
import { ThemeSetter } from '~/lib/components/ThemeSetter';

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: fontsStyles },
    {
      rel: 'preload',
      as: 'font',
      href: '/fonts/manrope-latin-400-normal.woff2',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
  ];
};

export const meta: MetaFunction = () => {
  return { title: 'Planotes' };
};

const Screen = () => {
  return (
    // Supressing warning because of adding class in ThemeSetter
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <Meta />
        <Links />
        <ThemeSetter />
      </head>
      <body className="bg-zinc-50 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-50">
        <ThemeSetter />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default Screen;
