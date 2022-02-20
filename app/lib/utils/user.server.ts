import type { User } from '@prisma/client';

import { redirect } from 'remix';
import { APP_URL, WELCOME_URL } from '~/lib/constants';
import { db, isAuthenticated } from '~/lib/utils';
import { logout } from '~/lib/utils/auth.server';

export const isUserOnboarded = (user: User, shouldBeOnboarded: boolean) => {
  const isUserOnboarded = Boolean(user.name);

  if (!isUserOnboarded && shouldBeOnboarded) {
    throw redirect(WELCOME_URL);
  }

  if (isUserOnboarded && !shouldBeOnboarded) {
    throw redirect(APP_URL);
  }
};

export const getUser = async (request: Request): Promise<User> => {
  const id = await isAuthenticated(request);
  const user = await db.user.findFirst({ where: { id } });

  if (!user) {
    throw await logout(request);
  }

  return user;
};
