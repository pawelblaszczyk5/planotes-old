import type { User } from '@prisma/client';
import type { SendEmailFunction } from 'remix-auth-email-link';

import { Authenticator } from 'remix-auth';
import { db, sendEmail, sessionStorage } from '~/lib/utils';
import { EmailLinkStrategy } from 'remix-auth-email-link';
import { APP_URL, LOGIN_URL } from '~/lib/constants';

const sendMagicLink: SendEmailFunction<User['id']> = async ({ emailAddress, magicLink }) => {
  if (process.env.NODE_ENV === 'production') {
    return sendEmail({
      senderName: 'Planotes Magic Link',
      receiver: emailAddress,
      subject: 'Sign in!',
      plainTextVersion: magicLink,
      html: '<a href="${magicLink}" target="_blank">Sign in</a>',
    });
  }

  console.log(`Sending magic link to ${emailAddress} - ${magicLink}`);
};

export const auth = new Authenticator<User['id']>(sessionStorage);

const emailLinkStrategy = new EmailLinkStrategy(
  { sendEmail: sendMagicLink, secret: process.env.AUTH_SECRET, callbackURL: '/magic' },

  async ({ email }: { email: string }) => {
    const { id } = await db.user.upsert({
      where: {
        email,
      },
      update: {},
      create: {
        email,
      },
    });

    return id;
  },
);

auth.use(emailLinkStrategy);

export const EMAIL_LINK_STRATEGY = emailLinkStrategy.name;

export const isAuthenticated = async (request: Request, redirectUrl = LOGIN_URL) =>
  await auth.isAuthenticated(request, { failureRedirect: redirectUrl });

export const isNotAuthenticated = async (request: Request, redirectUrl = APP_URL) =>
  await auth.isAuthenticated(request, { successRedirect: redirectUrl });

export const logout = async (request: Request, redirectUrl = LOGIN_URL) =>
  await auth.logout(request, { redirectTo: redirectUrl });
