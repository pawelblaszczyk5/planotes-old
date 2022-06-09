import type { User } from '@prisma/client';

import { redirect } from '@remix-run/node';
import { APP_URL, LOGIN_URL, ONBOARDING_URL } from '~/lib/constants';
import { logout } from '~/lib/utils';
import { db } from '~/lib/utils/db.server';

type OnboardedUser = {
  [T in keyof User]: NonNullable<User[T]>;
};

const isUserOnboarded = (user: User) => Boolean(user.name);

export const getUser = async (request: Request, userId: User['id']) => {
  const user = await db.user.findUnique({ where: { id: userId } });

  if (!user) throw await logout(request, { redirectTo: LOGIN_URL });

  return user;
};

export function redirectNotOnboardedUser(user: User): asserts user is OnboardedUser {
  if (!isUserOnboarded(user)) throw redirect(ONBOARDING_URL);
}

export const redirectOnboardedUser = (user: User): void => {
  if (isUserOnboarded(user)) throw redirect(APP_URL);
};
