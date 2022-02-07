import type { LoaderFunction } from 'remix';

import { json } from 'remix';
import { db, transporter } from '~/lib/utils';

export const loader: LoaderFunction = async () => {
  try {
    await db.user.count();
    await transporter.verify();

    return json({}, 204);
  } catch (e) {
    return json({}, 500);
  }
};
