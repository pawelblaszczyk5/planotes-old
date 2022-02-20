import type { LoaderFunction } from 'remix';

import { APP_URL, LOGIN_URL } from '~/lib/constants';
import { auth, EMAIL_LINK_STRATEGY } from '~/lib/utils';

export const loader: LoaderFunction = async ({ request }) => {
  await auth.authenticate(EMAIL_LINK_STRATEGY, request, {
    successRedirect: APP_URL,
    failureRedirect: LOGIN_URL,
  });
};
