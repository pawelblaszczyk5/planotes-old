import type { LoaderFunction } from 'remix';

import { redirect } from 'remix';
import { isAuthenticated, isUserOnboarded } from '~/lib/utils';

export const loader: LoaderFunction = async ({ request }) => {
  const user = await isAuthenticated(request);

  isUserOnboarded(user);

  return redirect('/app/home');
};

const Screen = () => <h1>Hello App</h1>;

export default Screen;
