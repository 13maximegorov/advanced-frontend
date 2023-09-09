import type { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';

const meta = {
  title: 'shared/ListBox',
  component: ListBox,
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    label: 'Варианты',
    value: 'first',
    items: [
      {
        value: 'first',
        content: 'first',
      },
      {
        value: 'second',
        content: 'second',
      },
    ],
  },
};
