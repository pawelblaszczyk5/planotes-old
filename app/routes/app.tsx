import type { LoaderFunction } from 'remix';

import { Outlet } from 'remix';

import { isAuthenticated, isUserOnboarded } from '~/lib/utils';

export const loader: LoaderFunction = async ({ request }) => {
  const user = await isAuthenticated(request);

  isUserOnboarded(user, true);

  return null;
};

const Screen = () => (
  <h1>
    Hello App <Outlet />
  </h1>
);

export default Screen;
