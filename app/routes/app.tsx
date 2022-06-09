import type { LoaderFunction } from '@remix-run/node';

import { Outlet } from '@remix-run/react';
import { Nav } from '~/features/app/components/Nav';
import { LOGIN_URL } from '~/lib/constants';
import { isAuthenticated } from '~/lib/utils';

export const loader: LoaderFunction = async ({ request }) => {
  await isAuthenticated(request, { failureRedirect: LOGIN_URL });

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
