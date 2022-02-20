import type { User } from '@prisma/client';
import type { SendEmailFunction } from 'remix-auth-email-link';

import { Authenticator } from 'remix-auth';
import { db, sessionStorage, transporter } from '~/lib/utils';
import { EmailLinkStrategy } from 'remix-auth-email-link';
import { APP_URL, LOGIN_URL } from '~/lib/constants';

const sendEmail: SendEmailFunction<User> = async ({ emailAddress, magicLink }) => {
  if (process.env.NODE_ENV === 'production') {
    // TODO: check if email was passed via transporter
    return await transporter.sendMail({
      from: `"Planotes Magic Link" <${process.env.SMTP_USER}>`,
      to: emailAddress,
      subject: 'Sign in!',
      text: magicLink,
      html: `<a href="${magicLink}" target="_blank">Sign in</a>`,
    });
  }

  console.log(`Sending magic link to ${emailAddress} - ${magicLink}`);
};

export const auth = new Authenticator<User>(sessionStorage);

const emailLinkStrategy = new EmailLinkStrategy(
  { sendEmail, secret: process.env.AUTH_SECRET, callbackURL: '/magic' },

  async ({ email }: { email: string }) => {
    const user = await db.user.upsert({
      where: {
        email,
      },
      update: {},
      create: {
        email,
      },
    });

    return user;
  },
);

auth.use(emailLinkStrategy);

export const EMAIL_LINK_STRATEGY = emailLinkStrategy.name;

export const isAuthenticated = async (request: Request, redirectUrl = LOGIN_URL) =>
  await auth.isAuthenticated(request, { failureRedirect: redirectUrl });

export const isUnAuthenticated = async (request: Request, redirectUrl = APP_URL) =>
  await auth.isAuthenticated(request, { successRedirect: redirectUrl });
