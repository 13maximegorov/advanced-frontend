import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';

const meta = {
  title: 'entities/CommentCard',
  component: CommentCard,
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    comment: {
      id: '1',
      text: 'comment 1',
      user: {
        id: '1',
        username: 'admin',
        avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png',
      },
    },
  },
};
