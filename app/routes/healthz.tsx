import type { LoaderFunction } from 'remix';

import { json } from 'remix';

// TODO: implement your custom health checking logic
export const loader: LoaderFunction = () => json({}, 204);
