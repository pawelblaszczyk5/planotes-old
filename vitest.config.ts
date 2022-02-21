/// <reference types="vitest" />

import { defineConfig } from 'vite';
// TODO: change to vitest/config after https://github.com/vitest-dev/vitest/issues/828
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    setupFiles: '/app/setup-test-env.ts',
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['lcov', 'text'],
      include: ['app/lib/**/*.{ts,tsx}'],
      exclude: ['app/lib/types/**'],
      all: true,
    },
  },
});
