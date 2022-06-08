import type { LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/node';

import { json } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from '@remix-run/react';
import { ThemeSetter } from '~/lib/components/ThemeSetter';
import styles from '~/index.css';
import { i18next } from '~/lib/utils';
import { useTranslation } from 'react-i18next';

interface LoaderData {
  locale: string;
}

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export const meta: MetaFunction = () => {
  return { title: 'Planotes' };
};

export const handle = {
  i18n: 'shared',
};

export const loader: LoaderFunction = async ({ request }) => {
  const locale = await i18next.getLocale(request);

  return json<LoaderData>({ locale });
};

const Screen = () => {
  const { locale } = useLoaderData<LoaderData>();

  const { i18n } = useTranslation();

  return (
    // Supressing warning because of adding class in ThemeSetter
    <html
      lang={locale}
      dir={i18n.dir()}
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
