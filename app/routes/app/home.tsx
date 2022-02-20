import type { LoaderFunction } from 'remix';

import { isAuthenticated, isUserOnboarded } from '~/lib/utils';

export const loader: LoaderFunction = async ({ request }) => {
  isUserOnboarded(await isAuthenticated(request));
};

const Screen = () => <h1>Home</h1>;

export default Screen;
