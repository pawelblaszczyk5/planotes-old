import type { LoaderFunction } from '@remix-run/node';

import { APP_URL, LOGIN_URL } from '~/lib/constants';
import { authenticate, EMAIL_LINK_STRATEGY } from '~/lib/utils';

export const loader: LoaderFunction = async ({ request }) => {
  await authenticate(EMAIL_LINK_STRATEGY, request, {
    successRedirect: APP_URL,
    failureRedirect: LOGIN_URL,
  });
};
