import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface Article extends ParsedContent {
  title: string
  keywords?: string[]
  thumbnail?: string
  published_at: string
}
