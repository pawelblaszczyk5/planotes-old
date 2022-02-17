import type { ComponentStory, ComponentMeta } from '@storybook/react';
import type { ComponentProps } from 'react';

import { Button } from '~/lib/components/Button';

export default {
  title: 'Interactive/Button',
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
  args: {
    children: 'Click me',
    size: 'normal',
    color: 'primary',
  },
  parameters: {
    controls: {
      include: ['color', 'size', 'onClick', 'children'],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...restProps }: ComponentProps<typeof Button>) => (
  <Button {...restProps}>{children}</Button>
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
  color: 'secondary',
};

export const Small = Template.bind({});

Small.args = {
  size: 'small',
};

export const Normal = Template.bind({});

export const Large = Template.bind({});

Large.args = {
  size: 'large',
};
