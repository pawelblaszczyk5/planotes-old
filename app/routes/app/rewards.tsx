import type { LoaderFunction } from 'remix';

import { isAuthenticated } from '~/lib/utils';

export const loader: LoaderFunction = async ({ request }) => {
  await isAuthenticated(request);

  return null;
};

const Screen = () => <h2>Rewards</h2>;

export default Screen;
