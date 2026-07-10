import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const DEFAULT_AUTHOR_ROLE = 'Co-founder, Rose Hill Life Sciences'
const DEFAULT_AUTHOR_IMAGE = 'https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80,width=1920,height=3840/uploads/asset/file/dcf21ac8-39c5-4bde-a9d2-6dd111d3e9ae/domenic.webp'
const DEFAULT_AUTHOR_HEADSHOT = 'https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/user/profile_picture/74e0cf8f-bc36-4e15-a523-03d659cdaa7a/thumb_domenic.jpg'
const DEFAULT_AUTHOR_BIO = 'Advancing the development of novel psychedelic-based therapeutics.'

export type Issue = {
  slug: string
  title: string
  subtitle: string
  excerpt: string
  category: string
  readTime: string
  publishedDate: string
  issueNumber: string
  author: string
  authorRole: string
  authorHeadshot: string
  authorImage: string
  authorBio: string
  content: string
}

const issuesDirectory = path.join(process.cwd(), 'content/issues')

export function getAllIssues(): Issue[] {
  if (!fs.existsSync(issuesDirectory)) return []
  const files = fs.readdirSync(issuesDirectory).filter(f => f.endsWith('.mdx'))

  return files
    .map(filename => {
      const slug = filename.replace(/\.mdx$/, '')
      const fullPath = path.join(issuesDirectory, filename)
      const raw = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(raw)
      return {
        slug,
        title: data.title ?? '',
        subtitle: data.subtitle ?? data.excerpt ?? '',
        excerpt: data.excerpt ?? data.subtitle ?? '',
        category: data.category ?? '',
        readTime: data.readTime ?? '',
        publishedDate: data.publishedDate ?? '',
        issueNumber: data.issueNumber ?? '',
        author: data.author ?? 'Domenic Suppa',
        authorRole: data.authorRole ?? DEFAULT_AUTHOR_ROLE,
        authorHeadshot: data.authorHeadshot ?? DEFAULT_AUTHOR_HEADSHOT,
        authorImage: data.authorImage ?? DEFAULT_AUTHOR_IMAGE,
        authorBio: data.authorBio ?? DEFAULT_AUTHOR_BIO,
        content: '',
      } as Issue
    })
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
}

export function getIssueBySlug(slug: string): Issue | null {
  const fullPath = path.join(issuesDirectory, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) return null
  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title ?? '',
    subtitle: data.subtitle ?? data.excerpt ?? '',
    excerpt: data.excerpt ?? data.subtitle ?? '',
    category: data.category ?? '',
    readTime: data.readTime ?? '',
    publishedDate: data.publishedDate ?? '',
    issueNumber: data.issueNumber ?? '',
    author: data.author ?? 'Domenic Suppa',
    authorRole: data.authorRole ?? DEFAULT_AUTHOR_ROLE,
    authorHeadshot: data.authorHeadshot ?? DEFAULT_AUTHOR_HEADSHOT,
    authorImage: data.authorImage ?? DEFAULT_AUTHOR_IMAGE,
    authorBio: data.authorBio ?? DEFAULT_AUTHOR_BIO,
    content,
  }
}
