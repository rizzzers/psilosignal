import { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/blog'
import { getAllIssues } from '@/lib/issues'

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs()

  const blogPosts = slugs.map((slug) => ({
    url: `https://www.rosehillreview.com/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const issues = getAllIssues().map((issue) => ({
    url: `https://www.rosehillreview.com/issues/${issue.slug}`,
    lastModified: new Date(issue.publishedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://www.rosehillreview.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://www.rosehillreview.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.rosehillreview.com/archive',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.rosehillreview.com/survey',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...issues,
    ...blogPosts,
  ]
}
