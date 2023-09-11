import type { Meta, StoryObj } from '@storybook/react';

import { ArticleSortField } from '../../model/consts/articleConsts';
import { ArticleSortSelector } from './ArticleSortSelector';

const meta = {
  title: 'entities/Article/ArticleSortSelector',
  component: ArticleSortSelector,
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    order: 'asc',
    sort: ArticleSortField.TITLE,
  },
};
