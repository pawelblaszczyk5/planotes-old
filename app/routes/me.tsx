import type { User } from '@prisma/client';
import type { LoaderFunction } from 'remix';

import { json, useLoaderData } from 'remix';
import { auth } from '~/lib/utils';

export const loader: LoaderFunction = async ({ request }) => {
  const user = await auth.isAuthenticated(request, { failureRedirect: '/login' });

  return json(user);
};

const Screen = () => {
  const user = useLoaderData<User>();

  return (
    <h1>
      {user.email}
      {user.id}
    </h1>
  );
};

export default Screen;
