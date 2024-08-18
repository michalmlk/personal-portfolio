import { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/app/components/ui/input/Input';

export interface InputProps {
    type: 'text' | 'email';
    required?: boolean;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
}

const meta = {
    title: 'Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        disabled: { control: 'boolean' },
        label: { control: 'text' },
        placeholder: { control: 'text' },
        required: { control: 'boolean' },
    },
    args: {
        type: 'text',
        disabled: false,
    },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
    args: {
        type: 'text',
        disabled: false,
        label: 'Text input',
        placeholder: 'Text input',
        required: false,
    },
};
