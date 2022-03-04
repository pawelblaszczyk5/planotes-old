import type { LoaderFunction } from 'remix';

import { NavLink, Outlet } from 'remix';
import clsx from 'clsx';

import { getUser, isUserOnboarded } from '~/lib/utils';

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);

  isUserOnboarded(user, true);

  return null;
};

const Screen = () => (
  <div className="p-4">
    <nav>
      <NavLink className={({ isActive }) => clsx(isActive && 'text-blue-200')} to="">
        Test
      </NavLink>
    </nav>
    <main>
      <Outlet />
    </main>
  </div>
);

export default Screen;
