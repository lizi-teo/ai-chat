import type { Meta, StoryObj } from '@storybook/react'
import { ChatWidget } from './ChatWidget'

const meta = {
  title: 'Layouts/ChatWidget',
  component: ChatWidget,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-[380px] md:w-[420px] h-[600px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ChatWidget>

export default meta
type Story = StoryObj<typeof meta>

export const Grocery: Story = {
  name: 'Grocery (Coles)',
  args: { vertical: 'grocery' },
}

export const Pharmacy: Story = {
  name: 'Pharmacy (Chemist)',
  args: { vertical: 'pharmacy' },
}

export const CustomMockData: Story = {
  name: 'Custom mock data',
  args: {
    mockData: {
      botName: 'Brand Assistant',
      messages: [
        {
          role: 'bot',
          text: 'Hi! Swap out this mockData with your own content.',
          quickReplies: ['Option A', 'Option B', 'Option C'],
        },
        { role: 'user', text: 'Option A' },
        {
          role: 'bot',
          text: 'Great choice. Here are some products:',
          products: [
            {
              name: 'Your Product Name',
              subtitle: 'Category · Details',
              price: 29.99,
              image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=200&fit=crop',
              badge: 'In stock',
              badgeVariant: 'success',
              primaryAction: 'Add to cart',
              secondaryAction: 'View',
            },
          ],
        },
      ],
    },
  },
}
