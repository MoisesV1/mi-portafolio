import { BlogPost } from './posts'

interface PostsResponse {
  posts: BlogPost[]
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export async function fetchPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${API_URL}/posts`)
    if (!response.ok) {
      throw new Error(`Error fetching posts: ${response.statusText}`)
    }
    const data: PostsResponse = await response.json()
    return data.posts
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const posts = await fetchPosts()
    return posts.find(post => post.slug === slug) || null
  } catch (error) {
    console.error('Error fetching post by slug:', error)
    return null
  }
}
