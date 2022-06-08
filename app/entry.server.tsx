import type { EntryContext } from '@remix-run/node';

import { RemixServer } from '@remix-run/react';
import { renderToString } from 'react-dom/server';
import { createInstance } from 'i18next';
import Backend from 'i18next-fs-backend';
import { resolve } from 'node:path';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { i18nConfig } from '~/lib/constants';
import { i18next } from '~/lib/utils';

const handleRequest = async (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) => {
  const instance = createInstance();

  const lng = await i18next.getLocale(request);
  const ns = i18next.getRouteNamespaces(remixContext);

  await instance
    .use(initReactI18next)
    .use(Backend)
    .init({
      ...i18nConfig,
      lng,
      ns,
      backend: {
        loadPath: resolve('./public/locales/{{lng}}/{{ns}}.json'),
      },
    });

  // eslint-disable-next-line testing-library/render-result-naming-convention -- fake positive with Testing Library
  const markup = renderToString(
    <I18nextProvider i18n={instance}>
      <RemixServer
        context={remixContext}
        url={request.url}
      />
    </I18nextProvider>,
  );

  responseHeaders.set('Content-Type', 'text/html');

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
};

export default handleRequest;
