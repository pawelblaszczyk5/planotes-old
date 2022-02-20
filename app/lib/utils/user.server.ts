import type { User } from '@prisma/client';

import { redirect } from 'remix';
import { WELCOME_URL } from '~/lib/constants';

export const isUserOnboarded = (user: User) => {
  if (!user.name) {
    throw redirect(WELCOME_URL);
  }
};
