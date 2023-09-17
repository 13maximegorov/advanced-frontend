import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import ProfilePage from './ProfilePage';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        form: {
          first: 'Maxim',
          lastname: 'Egorov',
          age: 24,
          currency: Currency.RUB,
          country: Country.Russia,
          city: 'Ufa',
          username: 'admin',
        },
      },
    }),
  ],
};

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        form: {
          first: 'Maxim',
          lastname: 'Egorov',
          age: 24,
          currency: Currency.RUB,
          country: Country.Russia,
          city: 'Ufa',
          username: 'admin',
        },
      },
    }),
  ],
};
