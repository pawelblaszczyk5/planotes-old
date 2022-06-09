import type { Session } from '@remix-run/node';

import { createFileSessionStorage } from '@remix-run/node';

export const sessionStorage = createFileSessionStorage({
  cookie: {
    name: 'SESSIONID',
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    secrets: [process.env.COOKIE_SECRET],
  },
  dir: process.env.SESSIONS_DIR,
});

export const getSession = (request: Request): Promise<Session> =>
  sessionStorage.getSession(request.headers.get('cookie'));

export const { commitSession, destroySession } = sessionStorage;
