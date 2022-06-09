import type { LoaderFunction } from '@remix-run/node';

import { redirect } from '@remix-run/node';
import { APP_URL } from '~/lib/constants';

export const loader: LoaderFunction = () => redirect(APP_URL, 301);
