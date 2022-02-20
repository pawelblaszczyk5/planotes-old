import type { LoaderFunction } from 'remix';

import { Outlet } from 'remix';
import { getUser, isUserOnboarded } from '~/lib/utils';

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);

  isUserOnboarded(user, true);

  return null;
};

const Screen = () => (
  <h1>
    Hello App <Outlet />
  </h1>
);

export default Screen;
