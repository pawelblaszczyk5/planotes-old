/// <reference types="vitest" />

import { defineConfig } from 'vite';
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
