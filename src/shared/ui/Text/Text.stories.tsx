import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Title',
    text: 'Description',
  },
};

export const Error: Story = {
  args: {
    title: 'Title',
    text: 'Description',
    theme: TextTheme.ERROR,
  },
};

export const onlyTitle: Story = {
  args: {
    title: 'Title',
  },
};

export const onlyText: Story = {
  args: {
    text: 'Description',
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'Title',
    text: 'Description',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTitleDark: Story = {
  args: {
    title: 'Title',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTextDark: Story = {
  args: {
    text: 'Description',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeL: Story = {
  args: {
    title: 'Title',
    text: 'Description',
    size: TextSize.L,
  },
};

export const SizeM: Story = {
  args: {
    title: 'Title',
    text: 'Description',
    size: TextSize.M,
  },
};

export const SizeS: Story = {
  args: {
    title: 'Title',
    text: 'Description',
    size: TextSize.S,
  },
};
