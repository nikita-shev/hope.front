import { ReactElement } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Paper } from '@components/Paper/Paper.tsx';

type Story = StoryObj<typeof Paper>;

const meta: Meta<typeof Paper> = {
    title: 'SURFACES/Paper',
    component: Paper,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    args: {
        content: <TestComponent title={'Content'} />
    }
};

function TestComponent({ title }: { title: string }): ReactElement {
    return <div style={{ width: '500px', height: '150px', fontFamily: 'sans-serif' }}>{title}</div>;
}

export const Default: Story = {};

export const HoverEffect: Story = {
    args: {
        settings: {
            isHover: true
        }
    }
};

export default meta;
