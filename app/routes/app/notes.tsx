import type { LoaderFunction } from '@remix-run/node';

import { LOGIN_URL } from '~/lib/constants';
import { getUser, isAuthenticated, redirectNotOnboardedUser } from '~/lib/utils';

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await isAuthenticated(request, { failureRedirect: LOGIN_URL });
  const user = await getUser(request, userId);

  redirectNotOnboardedUser(user);

  return null;
};

const Screen = () => <h2>Notes</h2>;

export default Screen;
