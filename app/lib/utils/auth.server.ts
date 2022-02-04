import type { User } from '@prisma/client';
import type { SendEmailFunction } from 'remix-auth-email-link';

import { Authenticator } from 'remix-auth';
import { db, sessionStorage, transporter } from '~/lib/utils';
import { EmailLinkStrategy } from 'remix-auth-email-link';

const sendEmail: SendEmailFunction<User> = async ({ emailAddress, magicLink }) => {
  const x = await transporter.sendMail({
    from: '"Loginer Magic Link" <magic@loginer.ct8.pl>',
    to: emailAddress,
    subject: 'Sign in!',
    text: magicLink,
    html: `<a href="${magicLink}" target="_blank">Sign in</a>`,
  });

  console.log(x);
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
