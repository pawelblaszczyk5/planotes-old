import type { LoaderFunction } from 'remix';

import { getUser } from '~/lib/utils';

export const loader: LoaderFunction = async ({ request }) => {
  await getUser(request, true);

  return null;
};

const Screen = () => <h2>Goals</h2>;

export default Screen;
