import type { LoaderFunction } from '@remix-run/node';

import { Outlet } from '@remix-run/react';
import { LOGIN_URL, WELCOME_URL } from '~/lib/constants';

import { isAuthenticated } from '~/lib/utils';
import { redirectIfNotOnboarded } from '~/lib/utils/user.server';

export const loader: LoaderFunction = async ({ request }) => {
  const user = await isAuthenticated(request, { failureRedirect: LOGIN_URL });

  if (!request.url.includes(WELCOME_URL)) redirectIfNotOnboarded(user);

  return null;
};

const Screen = () => (
  <>
    <h2>Dashboard</h2>
    <Outlet />
  </>
);

export default Screen;
