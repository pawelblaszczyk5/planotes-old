import type { LoaderFunction } from '@remix-run/node';

import { LOGIN_URL } from '~/lib/constants';
import { isAuthenticated } from '~/lib/utils';
import { redirectIfNotOnboarded } from '~/lib/utils/user.server';

export const loader: LoaderFunction = async ({ request }) => {
  const user = await isAuthenticated(request, { failureRedirect: LOGIN_URL });

  redirectIfNotOnboarded(user);

  return null;
};

const Screen = () => <h2>Planner</h2>;

export default Screen;
