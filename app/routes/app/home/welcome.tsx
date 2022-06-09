import type { LoaderFunction } from '@remix-run/node';

import { LOGIN_URL } from '~/lib/constants';
import { isAuthenticated, getUser, redirectOnboardedUser } from '~/lib/utils';

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await isAuthenticated(request, { failureRedirect: LOGIN_URL });
  const user = await getUser(request, userId);

  redirectOnboardedUser(user);

  return null;
};

const Screen = () => <h3>Welcome</h3>;

export default Screen;
