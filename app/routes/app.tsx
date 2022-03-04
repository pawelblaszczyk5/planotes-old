import type { LoaderFunction } from 'remix';

import { Outlet } from 'remix';

import { getUser, isUserOnboarded } from '~/lib/utils';
import { Nav } from '~/features/app/components/Nav';

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);

  isUserOnboarded(user, true);

  return null;
};

const Screen = () => (
  <div className="p-4">
    <Nav />
    <main>
      <Outlet />
    </main>
  </div>
);

export default Screen;
