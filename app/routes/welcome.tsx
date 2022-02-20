import type { LoaderFunction } from 'remix';

import { isUserOnboarded, getUser } from '~/lib/utils';

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);

  isUserOnboarded(user, false);

  return null;
};

const Screen = () => <h1>Onboard</h1>;

export default Screen;
