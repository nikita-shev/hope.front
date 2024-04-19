import { Meta, StoryObj } from '@storybook/react';
import { SocialNetworks } from '@components/SocialNetworks';

type Story = StoryObj<typeof SocialNetworks>;

const meta: Meta<typeof SocialNetworks> = {
    title: 'Components/SocialNetworks',
    component: SocialNetworks,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    args: {
        title: 'Добавляйся к нам',
        size: 'medium'
    }
};

export const Default: Story = {};

export default meta;
