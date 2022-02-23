import { describe, test, it, vi, expect, afterEach } from 'vitest';
// @ts-expect-error - no typings
import matchers from '@testing-library/jest-dom/matchers';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

expect.extend(matchers);
afterEach(cleanup);

export { describe, test, it, vi, expect, render, screen, userEvent };
