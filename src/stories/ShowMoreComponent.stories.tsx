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
        renderItem: { control: 'object' },
    },
    args: {
        items: [
            {
                label: 'Item 1',
                content: 'some content 1',
                isPinned: true,
            },
            {
                label: 'Item 2',
                content: 'some content 2',
                isPinned: true,
            },
            {
                label: 'Item 3',
                content: 'some content 3',
                isPinned: true,
            },
            {
                label: 'Item 4',
                content: 'some content 4',
                isPinned: false,
            },
        ],
        renderItem: (item: any) => {
            return (
                <div>
                    <h1>{item.label}</h1>
                    <p>{item.description}</p>
                </div>
            );
        },
    },
} satisfies Meta<typeof ShowMoreComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        renderItem: (item) => {
            return (
                <div>
                    <h1>{item.label}</h1>
                    <p>{item.description}</p>
                </div>
            );
        },
    },
};
