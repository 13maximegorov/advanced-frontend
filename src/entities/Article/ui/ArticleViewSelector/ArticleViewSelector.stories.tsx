import type { Meta, StoryObj } from '@storybook/react';

import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleViewSelector } from './ArticleViewSelector';

const meta = {
  title: 'entities/Article/ArticleViewSelector',
  component: ArticleViewSelector,
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    view: ArticleView.SMALL,
  },
};
