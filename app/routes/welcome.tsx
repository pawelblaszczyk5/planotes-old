import type { LoaderFunction } from 'remix';

import { getUser } from '~/lib/utils';

export const loader: LoaderFunction = async ({ request }) => {
  await getUser(request, false);

  return null;
};

const Screen = () => <h1>Onboard</h1>;

export default Screen;
