import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

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
    content,
  }
}
