import type { Meta, StoryObj } from '@storybook/react';

import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ProfileCard } from './ProfileCard';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      first: 'Maxim',
      lastname: 'Egorov',
      age: 24,
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Ufa',
      username: 'admin',
      avatar:
        'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png',
    },
  },
};

export const withError: Story = {
  args: {
    error: 'true',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
