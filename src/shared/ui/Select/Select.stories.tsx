import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta = {
  title: 'shared/Select',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Укажите значение',
    options: [
      { value: '1', content: 'Первое значение' },
      { value: '2', content: 'Второе значение' },
      { value: '3', content: 'Третье значение' },
    ],
  },
};
