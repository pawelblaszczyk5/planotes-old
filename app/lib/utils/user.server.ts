import type { User } from '@prisma/client';

import { redirect } from '@remix-run/node';
import { ONBOARDING_URL } from '~/lib/constants';

type OnboardedUser = {
  [T in keyof User]: NonNullable<User[T]>;
};

const isOnboarded = (user: User) => Boolean(user.name);

export function redirectIfNotOnboarded(user: User): asserts user is OnboardedUser {
  if (!isOnboarded(user)) throw redirect(ONBOARDING_URL);
}
