import type { ActionFunction, LoaderFunction } from '@remix-run/node';
import { Form } from '@remix-run/react';
import { LOGIN_URL } from '~/lib/constants';
import { auth, EMAIL_LINK_STRATEGY, isNotAuthenticated } from '~/lib/utils';

export const loader: LoaderFunction = async ({ request }) => {
  await isNotAuthenticated(request);

  return null;
};

export const action: ActionFunction = async ({ request }) => {
  await auth.authenticate(EMAIL_LINK_STRATEGY, request, {
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
