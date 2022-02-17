/// <reference types="vitest" />

import { defineConfig } from 'vitest/node';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    setupFiles: '/app/setup-test-env.ts',
    globals: true,
    environment: 'jsdom',
  },
});
