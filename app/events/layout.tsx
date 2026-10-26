import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Community Events',
  description: 'Discover online and in-person events hosted by Open Box for developers, gamers and students in India.',
  alternates: { canonical: '/events' },
}

export default function EventsLayout({ children }: { children: ReactNode }) {
  return children
}
