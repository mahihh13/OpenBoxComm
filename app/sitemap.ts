import type { MetadataRoute } from 'next'
import { servers, events, blogs, docs, teamMembers } from '@/lib/community-data'
import { SITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-10-26')

  // 1. Static pages of the website
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/join`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/servers`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/events`, lastModified, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/blogs`, lastModified, changeFrequency: 'daily', priority: 0.8 },
    { url: `${SITE_URL}/doc`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/team`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/contact-us`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE_URL}/support`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/help`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/help/faq`, lastModified, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${SITE_URL}/legal`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    // Legal policies
    { url: `${SITE_URL}/legal/community-rules`, lastModified, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${SITE_URL}/legal/refund-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/legal/dmca-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/legal/acceptable-use-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/legal/event-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/legal/terms-and-conditions`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/legal/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/legal/cookie-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ]

  // 2. Dynamic servers pages (/servers/[slug])
  const serverRoutes: MetadataRoute.Sitemap = servers
    .filter((s) => s.isLive)
    .map((s) => ({
      url: `${SITE_URL}/servers/${s.slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    }))

  // 3. Dynamic events pages (/events/[id])
  const eventRoutes: MetadataRoute.Sitemap = events.map((e) => ({
    url: `${SITE_URL}/events/${e.id}`,
    lastModified,
    changeFrequency: 'daily',
    priority: 0.9,
  }))

  // 4. Dynamic blogs pages (/blogs/[slug])
  const blogRoutes: MetadataRoute.Sitemap = blogs
    .filter((blog) => blog.category !== 'dbw')
    .map((b) => ({
    url: `${SITE_URL}/blogs/${b.slug}`,
    lastModified,
    changeFrequency: 'daily',
    priority: 0.8,
    }))

  // 5. Dynamic documentation pages (/doc/[slug])
  const docRoutes: MetadataRoute.Sitemap = docs.map((d) => ({
    url: `${SITE_URL}/doc/${d.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  // 6. Dynamic team member pages (/team/[slug])
  const teamRoutes: MetadataRoute.Sitemap = teamMembers.map((t) => ({
    url: `${SITE_URL}/team/${t.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  return [
    ...staticRoutes,
    ...serverRoutes,
    ...eventRoutes,
    ...blogRoutes,
    ...docRoutes,
    ...teamRoutes,
  ]
}
