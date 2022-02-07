import type { Transporter } from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

import { createTransport } from 'nodemailer';

let transporter: Transporter;

declare global {
  // eslint-disable-next-line no-var -- there needs to be var to work with globalThis
  var __transporter: Transporter | undefined;
}

const transporterConfig: SMTPTransport.Options = {
  host: process.env.SMTP_HOST,
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  dkim: {
    privateKey: process.env.DKIM_PRIVATE_KEY,
    keySelector: process.env.DKIM_SELECTOR,
    domainName: 'planotes.xyz',
  },
};

// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new transporter with every change either.
if (process.env.NODE_ENV === 'production') {
  transporter = createTransport(transporterConfig);
} else {
  if (!global.__transporter) {
    global.__transporter = createTransport(transporterConfig);
  }
  transporter = global.__transporter;
}

export { transporter };
