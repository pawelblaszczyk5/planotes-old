import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { db } from '~/lib/utils';

export const loader: LoaderFunction = async () => {
  try {
    await db.user.findFirst();

    return json({}, 204);
  } catch (e) {
    return json({}, 500);
  }
};
