import type { User } from '@prisma/client';

import { redirect } from '@remix-run/node';
import { WELCOME_URL } from '~/lib/constants';

type OnboardedUser = {
  [T in keyof User]: NonNullable<User[T]>;
};

const isOnboarded = (user: User) => Boolean(user.name);

export const isUserOnboarded = (user: User): user is OnboardedUser => isOnboarded(user);

export function redirectIfNotOnboarded(user: User): asserts user is OnboardedUser {
  if (!isUserOnboarded(user)) throw redirect(WELCOME_URL);
}
