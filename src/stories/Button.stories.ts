import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '@/app/components/ui/button/Button';

const meta = {
    title: 'Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        primary: { control: 'boolean' },
        disabled: { control: 'boolean' },
        label: { control: 'text' },
        size: {
            control: {
                type: 'select',
                options: ['sm', 'md', 'lg'],
            },
        },
    },
    args: {
        onClick: fn(),
        primary: true,
        disabled: false,
        size: 'md',
        label: 'Button',
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
        outlined: false,
        disabled: false,
        size: 'sm',
        label: 'Button',
    },
};
