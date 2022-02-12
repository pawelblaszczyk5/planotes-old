import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '~/lib/components/Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => <Button />;

export const Test = Template.bind({});
