'use client'

import type { Meta, StoryObj } from '@storybook/react'
import { StatusBadge } from '@/components/primitives'
import { PriceDisplay } from '@/components/primitives'
import { ActionStrip } from '../ActionStrip/ActionStrip'
import { MediaCard } from '../MediaCard/MediaCard'
import { CardStrip } from './CardStrip'

const meta = {
  title: 'Components/CardStrip',
  component: CardStrip,
  tags: ['autodocs'],
} satisfies Meta<typeof CardStrip>

export default meta
type Story = StoryObj<typeof meta>

const FlightCard = ({ destination, airline, price, status }: {
  destination: string
  airline: string
  price: number
  status?: 'warning' | 'success'
}) => (
  <MediaCard>
    <MediaCard.Body>
      <div className="flex items-start justify-between gap-2">
        <MediaCard.Title>{destination}</MediaCard.Title>
        {status && <MediaCard.Badge><StatusBadge label={status === 'warning' ? '2 seats left' : 'Available'} variant={status} /></MediaCard.Badge>}
      </div>
      <MediaCard.Subtitle>{airline} · Direct</MediaCard.Subtitle>
      <MediaCard.Meta>
        <PriceDisplay amount={price} currency="AUD" />
      </MediaCard.Meta>
    </MediaCard.Body>
    <ActionStrip>
      <ActionStrip.Primary>Book now</ActionStrip.Primary>
      <ActionStrip.Secondary>Details</ActionStrip.Secondary>
    </ActionStrip>
  </MediaCard>
)

export const ThreeCards: Story = {
  name: '3 cards',
  render: () => (
    <div className="max-w-sm">
      <CardStrip>
        <CardStrip.Item>
          <FlightCard destination="Economy to Tokyo" airline="Qantas · QF 1" price={899} status="warning" />
        </CardStrip.Item>
        <CardStrip.Item>
          <FlightCard destination="Economy to Osaka" airline="Qantas · QF 3" price={749} status="success" />
        </CardStrip.Item>
        <CardStrip.Item>
          <FlightCard destination="Economy to Seoul" airline="Qantas · QF 7" price={820} />
        </CardStrip.Item>
      </CardStrip>
    </div>
  ),
}

export const FiveCards: Story = {
  name: '5 cards (scrollable)',
  render: () => (
    <div className="max-w-sm">
      <CardStrip>
        {[
          { dest: 'Tokyo', price: 899 },
          { dest: 'Osaka', price: 749 },
          { dest: 'Seoul', price: 820 },
          { dest: 'Singapore', price: 650 },
          { dest: 'Bangkok', price: 590 },
        ].map(({ dest, price }) => (
          <CardStrip.Item key={dest}>
            <FlightCard
              destination={`Economy to ${dest}`}
              airline="Qantas"
              price={price}
            />
          </CardStrip.Item>
        ))}
      </CardStrip>
    </div>
  ),
}

export const SingleCard: Story = {
  name: 'Single card (no scroll)',
  render: () => (
    <div className="max-w-sm">
      <CardStrip>
        <CardStrip.Item>
          <FlightCard destination="Economy to Tokyo" airline="Qantas · QF 1" price={899} status="warning" />
        </CardStrip.Item>
      </CardStrip>
    </div>
  ),
}

export const WithImages: Story = {
  name: 'With images (MediaCard.Media)',
  render: () => (
    <div className="max-w-sm">
      <p className="text-xs text-muted-foreground mb-3">
        Put any content inside <code>CardStrip.Item</code> — including <code>MediaCard</code> with a photo.
      </p>
      <CardStrip>
        {[
          {
            dest: 'Tokyo',
            price: 899,
            img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=200&fit=crop',
            status: 'warning' as const,
          },
          {
            dest: 'Osaka',
            price: 749,
            img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=200&fit=crop',
            status: 'success' as const,
          },
          {
            dest: 'Seoul',
            price: 820,
            img: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&h=200&fit=crop',
            status: undefined,
          },
          {
            dest: 'Singapore',
            price: 650,
            img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=200&fit=crop',
            status: undefined,
          },
        ].map(({ dest, price, img, status }) => (
          <CardStrip.Item key={dest}>
            <MediaCard>
              <MediaCard.Media
                src={img}
                alt={`${dest} skyline`}
              />
              <MediaCard.Body>
                <div className="flex items-start justify-between gap-2">
                  <MediaCard.Title>Economy to {dest}</MediaCard.Title>
                  {status && (
                    <MediaCard.Badge>
                      <StatusBadge
                        label={status === 'warning' ? '2 seats left' : 'Available'}
                        variant={status}
                      />
                    </MediaCard.Badge>
                  )}
                </div>
                <MediaCard.Subtitle>Qantas · Direct</MediaCard.Subtitle>
                <MediaCard.Meta>
                  <PriceDisplay amount={price} currency="AUD" />
                </MediaCard.Meta>
              </MediaCard.Body>
              <ActionStrip>
                <ActionStrip.Primary>Book now</ActionStrip.Primary>
                <ActionStrip.Secondary>Details</ActionStrip.Secondary>
              </ActionStrip>
            </MediaCard>
          </CardStrip.Item>
        ))}
      </CardStrip>
    </div>
  ),
}
