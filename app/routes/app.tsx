import type { LoaderFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import { getUser } from '~/lib/utils';
import { Nav } from '~/features/app/components/Nav';

export const loader: LoaderFunction = async ({ request }) => {
  await getUser(request, true);

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
