import type { ReactNode } from 'react';
import type { HTMLMotionProps } from 'framer-motion';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import { setupPreviews } from '@previewjs/plugin-react/setup';

type ButtonColor = 'primary' | 'secondary';
type ButtonSize = 'small' | 'normal' | 'large';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'className' | 'whileTap'> {
  color?: ButtonColor;
  size?: ButtonSize;
  children: ReactNode;
}

export const Button = ({ color = 'primary', size = 'normal', children, ...restProps }: ButtonProps) => (
  <motion.button
    whileTap={{ scale: 0.95 }}
    className={clsx(
      'group inline-grid place-items-center overflow-hidden rounded-lg bg-gradient-to-br text-zinc-800 ring-violet-600/50 ring-offset-zinc-50 hover:text-zinc-50 focus:outline-none dark:text-zinc-50	dark:ring-violet-400/75 dark:ring-offset-zinc-800',
      {
        'from-emerald-400 to-cyan-600': color === 'primary',
        'from-rose-400 to-pink-600': color === 'secondary',
        'p-0.5 text-sm font-medium ring-offset-1 focus-visible:ring-2': size === 'small',
        'p-0.5 text-base font-semibold ring-offset-2 focus-visible:ring-2': size === 'normal',
        'p-1 text-2xl font-bold ring-offset-2 focus-visible:ring': size === 'large',
      },
    )}
    {...restProps}
  >
    <span
      className={clsx(
        'rounded-md bg-zinc-50 transition duration-75 ease-in group-hover:bg-opacity-0 dark:bg-zinc-800',
        {
          'rounded-md px-3 py-1.5': size === 'small',
          'rounded-md px-5 py-2.5': size === 'normal',
          'rounded px-6 py-3': size === 'large',
        },
      )}
    >
      {children}
    </span>
  </motion.button>
);

setupPreviews(Button, {
  Primary: {
    color: 'primary',
    children: 'Click me',
  },
  Secondary: {
    color: 'secondary',
    children: 'Click me',
  },
  Small: {
    color: 'primary',
    children: 'Click me',
    size: 'small',
  },
  Normal: {
    color: 'primary',
    children: 'Click me',
    size: 'normal',
  },
  Large: {
    color: 'primary',
    children: 'Click me',
    size: 'large',
  },
});
