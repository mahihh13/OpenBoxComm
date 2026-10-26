/**
 * SEO Utilities for consistent metadata across pages
 * Helps maintain SEO best practices and consistency
 */

import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

/**
 * Standard metadata defaults
 */
export const defaultMetadata = {
  title: 'Open Box Community | Free Discord for Developers, Gamers & Students in India',
  description: 'Join Open Box, a free multi-server Discord community for developers, gamers and students in India. Explore Junction, OB Dev and OB GG, and join events.',
  keywords: ['Open Box', 'Discord community', 'gaming', 'development', 'learning', 'networking'],
  baseUrl: SITE_URL,
}

/**
 * Generate SEO metadata for a page
 * @param config - Page-specific metadata configuration
 * @returns Metadata object ready for Next.js
 */
export function generatePageMetadata(config: {
  title: string
  description: string
  keywords?: string[]
  path: string
  imageUrl?: string
  imageAlt?: string
  type?: 'website' | 'article' | 'profile'
  imageWidth?: number
  imageHeight?: number
}): Metadata {
  const {
    title,
    description,
    keywords = defaultMetadata.keywords,
    path,
    imageUrl = '/images/og-default.png',
    imageAlt = 'Open Box Community',
    type = 'website',
    imageWidth = 1200,
    imageHeight = 630,
  } = config

  const canonicalUrl = `${SITE_URL}${path}`

  return {
    title,
    description,
    keywords: [...keywords, ...defaultMetadata.keywords],
    alternates: { canonical: canonicalUrl },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type,
      siteName: 'Open Box',
      images: [
        {
          url: imageUrl,
          width: imageWidth,
          height: imageHeight,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
      creator: '@Openboxcomm',
      site: '@Openboxcomm',
    },
  }
}

/**
 * Breadcrumb list helper for structured data
 */
export interface BreadcrumbItem {
  name: string
  path: string
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

/**
 * Article schema helper for blog posts
 */
export interface ArticleConfig {
  title: string
  description: string
  author: string
  publishDate: string
  modifiedDate?: string
  image?: string
  slug: string
}

export function generateArticleSchema(config: ArticleConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: config.title,
    description: config.description,
    image: config.image || '/images/og-default.png',
    author: {
      '@type': 'Person',
      name: config.author,
    },
    datePublished: config.publishDate,
    dateModified: config.modifiedDate || config.publishDate,
    publisher: {
      '@type': 'Organization',
      name: 'Open Box',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/OB.png`,
      },
    },
    url: `${SITE_URL}/blogs/${config.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blogs/${config.slug}`,
    },
  }
}

/**
 * Event schema helper for event pages
 */
export interface EventConfig {
  name: string
  description: string
  startDate: string
  endDate?: string
  location?: string
  image?: string
  url: string
  organizer?: string
}

export function generateEventSchema(config: EventConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: config.name,
    description: config.description,
    image: config.image || '/images/og-default.png',
    startDate: config.startDate,
    endDate: config.endDate || config.startDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    location: config.location || 'Online',
    url: `${SITE_URL}${config.url}`,
    organizer: {
      '@type': 'Organization',
      name: config.organizer || 'Open Box',
      url: SITE_URL,
    },
  }
}

/**
 * FAQ schema helper for FAQ pages
 */
export interface FAQItem {
  question: string
  answer: string
}

export function generateFAQSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

/**
 * Social media profile links for Organization schema
 */
export const socialProfiles = {
  discord: 'https://discord.gg/7ZWckKU89J',
  youtube: 'https://www.youtube.com/@obcommunities-yt',
  instagram: 'https://www.instagram.com/openboxcomm/',
  x: 'https://x.com/Openboxcomm',
  github: 'https://github.com/Mahi130306/OpenBoxComm',
  linkedin: 'https://www.linkedin.com/in/mahi-hh-59001831b/',
  patreon: 'https://patreon.com/OpenBoxComm',
}

/**
 * Common keywords by category for easy reference
 */
export const keywordGroups = {
  general: ['Open Box', 'Discord community', 'community server'],
  gaming: ['gaming', 'gamers', 'gaming community', 'multiplayer'],
  development: ['development', 'developers', 'coding', 'programming', 'tech'],
  learning: ['learning', 'education', 'study', 'tutorials'],
  networking: ['networking', 'careers', 'jobs', 'connections', 'professionals'],
}

/**
 * Image size recommendations
 */
export const imageSizeRecommendations = {
  ogImage: { width: 1200, height: 630, alt: 'Open Graph preview' },
  twitterCard: { width: 1200, height: 675, alt: 'Twitter card image' },
  favicon: { width: 32, height: 32, alt: 'Favicon' },
  heroImage: { width: 1920, height: 1080, alt: 'Hero image' },
  cardImage: { width: 400, height: 300, alt: 'Card image' },
  thumbnail: { width: 200, height: 200, alt: 'Thumbnail' },
}
