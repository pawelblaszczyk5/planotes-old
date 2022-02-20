import type { LoaderFunction } from 'remix';

import { redirect } from 'remix';
import { isAuthenticated } from '~/lib/utils';

export const loader: LoaderFunction = async ({ request }) => {
  await isAuthenticated(request);

  return redirect('/app/home');
};
