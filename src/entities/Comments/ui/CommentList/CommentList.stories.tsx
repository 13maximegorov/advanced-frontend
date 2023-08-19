import type { Meta, StoryObj } from '@storybook/react';

import { CommentList } from './CommentList';

const meta = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'comment 1',
        user: {
          id: '1',
          username: 'admin',
          avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png',
        },
      },
      {
        id: '2',
        text: 'comment 2',
        user: {
          id: '1',
          username: 'admin',
          avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png',
        },
      },
    ],
  },
};

export const Loading: Story = {
  args: {
    comments: [],
    isLoading: true,
  },
};
