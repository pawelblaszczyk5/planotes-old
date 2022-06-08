import type { LinksFunction, MetaFunction } from 'remix';

import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import { ThemeSetter } from '~/lib/components/ThemeSetter';
import styles from '~/index.css';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
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
