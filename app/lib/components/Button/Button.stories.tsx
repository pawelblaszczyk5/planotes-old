import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Button } from '~/lib/components/Button';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

type Story = ComponentStoryObj<typeof Button>;

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: {
      control: false,
    },
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: {
      include: ['color', 'size', 'onClick', 'children'],
    },
  },
  args: {
    size: 'normal',
    color: 'primary',
    children: 'Click me',
  },
} as ComponentMeta<typeof Button>;

export const Primary: Story = {
  args: {
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Normal: Story = {
  args: {
    size: 'normal',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Interacitve: Story = {
  args: {
    size: 'small',
    color: 'secondary',
    children: 'Download',
  },
  play: async ({ args: { onClick }, canvasElement }) => {
    const screen = within(canvasElement);
    const button = screen.getByRole('button', { name: 'Download' });

    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await expect(onClick).toHaveBeenCalled();
  },
};
