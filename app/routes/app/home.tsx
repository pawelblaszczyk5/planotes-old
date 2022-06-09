import type { LoaderFunction } from '@remix-run/node';

import { Outlet } from '@remix-run/react';
import { LOGIN_URL, ONBOARDING_URL } from '~/lib/constants';

import { isAuthenticated, getUser, redirectNotOnboardedUser } from '~/lib/utils';

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await isAuthenticated(request, { failureRedirect: LOGIN_URL });
  const user = await getUser(request, userId);

  if (!request.url.includes(ONBOARDING_URL)) redirectNotOnboardedUser(user);

  return null;
};

const Screen = () => (
  <>
    <h2>Dashboard</h2>
    <Outlet />
  </>
);

export default Screen;
