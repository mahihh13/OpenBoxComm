import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Help Centre',
  description: 'Find answers about Open Box servers, community standards, events and getting support.',
  alternates: { canonical: '/help' },
}

export default function HelpLayout({ children }: { children: ReactNode }) {
  return children
}
