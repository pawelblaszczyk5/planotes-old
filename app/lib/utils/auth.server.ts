import type { User } from '@prisma/client';
import type { EmailLinkStrategyVerifyParams, SendEmailFunction } from 'remix-auth-email-link';

import { Authenticator } from 'remix-auth';
import { db, sendEmail, sessionStorage } from '~/lib/utils';
import { EmailLinkStrategy } from 'remix-auth-email-link';

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

const verifyUser = async ({ email }: EmailLinkStrategyVerifyParams) =>
  (
    await db.user.upsert({
      where: {
        email,
      },
      update: {},
      create: {
        email,
      },
    })
  ).id;

const auth = new Authenticator<User['id']>(sessionStorage);

const emailLinkStrategy = new EmailLinkStrategy(
  { sendEmail: sendMagicLink, secret: process.env.AUTH_SECRET, callbackURL: '/magic' },
  verifyUser,
);

auth.use(emailLinkStrategy);

export const EMAIL_LINK_STRATEGY = emailLinkStrategy.name;

export const logout = auth.logout.bind(auth);
export const isAuthenticated = auth.isAuthenticated.bind(auth);
export const authenticate = auth.authenticate.bind(auth);
