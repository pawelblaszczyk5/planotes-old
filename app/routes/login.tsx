import type { ActionFunction, LoaderFunction } from '@remix-run/node';

import { Form } from '@remix-run/react';
import { APP_URL, LOGIN_URL } from '~/lib/constants';
import { authenticate, EMAIL_LINK_STRATEGY, isAuthenticated } from '~/lib/utils';

export const loader: LoaderFunction = async ({ request }) => {
  await isAuthenticated(request, { successRedirect: APP_URL });

  return null;
};

export const action: ActionFunction = async ({ request }) => {
  await authenticate(EMAIL_LINK_STRATEGY, request, {
    successRedirect: LOGIN_URL,
    failureRedirect: LOGIN_URL,
  });
};

const Screen = () => {
  return (
    <Form method="post">
      <label>
        E-mail{' '}
        <input
          type="email"
          name="email"
          required
        />
      </label>
      <button>Send magic link to my email</button>
    </Form>
  );
};

export default Screen;
