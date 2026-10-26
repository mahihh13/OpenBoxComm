import type { Metadata } from 'next'
import SupportClient from './SupportClient'

export const metadata: Metadata = {
  title: 'Support the Community',
  description: 'Support Open Box through Patreon. Your contributions keep the servers running, events happening, and the community growing.',
  alternates: { canonical: '/support' },
}

export default function SupportPage() {
  return <SupportClient />
}