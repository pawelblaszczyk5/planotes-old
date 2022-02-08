import type { LoaderFunction } from 'remix';

import { json } from 'remix';
import { db } from '~/lib/utils';

export const loader: LoaderFunction = async () => {
  try {
    await db.user.findFirst();

    return json({}, 204);
  } catch (e) {
    return json({}, 500);
  }
};
