import type { Session } from '@remix-run/node';

import { createFileSessionStorage } from '@remix-run/node';

const SESSION_MAX_AGE_IN_DAYS = 30;
const SECONDS_IN_DAY = 86_400;

export const sessionStorage = createFileSessionStorage({
  cookie: {
    name: 'sesid',
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_MAX_AGE_IN_DAYS * SECONDS_IN_DAY,
    secure: process.env.NODE_ENV === 'production',
    secrets: [process.env.COOKIE_SECRET],
  },
  dir: process.env.SESSIONS_DIR,
});

export const getSession = (request: Request): Promise<Session> =>
  sessionStorage.getSession(request.headers.get('cookie'));

export const { commitSession, destroySession } = sessionStorage;
