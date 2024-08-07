import { ShowMoreComponent } from '@/app/components/ui/show-more-component/ShowMoreComponent';
import type { StoryObj, Meta } from '@storybook/react';

const meta = {
    title: 'ShowMoreComponent',
    component: ShowMoreComponent,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        items: { control: 'object' },
        renderItem: { control: 'function' },
    },
} satisfies Meta<typeof ShowMoreComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        items: [
            {
                label: 'Item 1',
                content: 'some content 1',
            },
            {
                label: 'Item 2',
                content: 'some content 2',
            },
            {
                label: 'Item 3',
                content: 'some content 3',
            },
        ],
        renderItem: (item) => <h1>{item.label}</h1>,
    },
};
