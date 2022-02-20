import type { User } from '@prisma/client';

import { redirect } from 'remix';
import { APP_URL, WELCOME_URL } from '~/lib/constants';

export const isUserOnboarded = (user: User, shouldBeOnboarded: boolean) => {
  const isUserOnboarded = Boolean(user.name);

  if (!isUserOnboarded && shouldBeOnboarded) {
    throw redirect(WELCOME_URL);
  }

  if (isUserOnboarded && !shouldBeOnboarded) {
    throw redirect(APP_URL);
  }
};
