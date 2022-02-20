import type { LoaderFunction } from 'remix';

import { isUserOnboarded, isAuthenticated } from '~/lib/utils';

export const loader: LoaderFunction = async ({ request }) => {
  isUserOnboarded(await isAuthenticated(request), false);

  return null;
};

const Screen = () => <h1>Onboard</h1>;

export default Screen;
