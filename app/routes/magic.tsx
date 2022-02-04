import type { LoaderFunction } from 'remix';

import { auth, EMAIL_LINK_STRATEGY } from '~/lib/utils';

export const loader: LoaderFunction = async ({ request }) => {
  await auth.authenticate(EMAIL_LINK_STRATEGY, request, {
    successRedirect: '/me',
    failureRedirect: '/login',
  });
};
