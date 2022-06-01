import type { User } from '@prisma/client';

import { redirect } from 'remix';
import { APP_URL, WELCOME_URL } from '~/lib/constants';
import { db, isAuthenticated } from '~/lib/utils';
import { logout } from '~/lib/utils/auth.server';

type OnboardedUser = {
  [T in keyof User]: NonNullable<User[T]>;
};

type NotOnboardedUser = {
  [T in keyof User]: null extends User[T] ? null : User[T];
};

const isUserOnboarded = (user: User): user is OnboardedUser => {
  const isUserOnboarded = Boolean(user.name);

  return isUserOnboarded;
};

const isUserNotOnboarded = (user: User): user is NotOnboardedUser => {
  const isUserOnboarded = Boolean(user.name);

  return !isUserOnboarded;
};

export const getUser = async <T extends boolean>(
  request: Request,
  shouldBeOnboarded: T,
  // @ts-expect-error TS has strange problem with async function typing here
): T extends true ? Promise<OnboardedUser> : Promise<NotOnboardedUser> => {
  const id = await isAuthenticated(request);
  const user = await db.user.findFirst({ where: { id } });

  if (!user) {
    throw await logout(request);
  }

  if (shouldBeOnboarded && isUserOnboarded(user)) {
    return user;
  }

  if (!shouldBeOnboarded && isUserNotOnboarded(user)) {
    return user;
  }

  throw redirect(shouldBeOnboarded ? WELCOME_URL : APP_URL);
};
