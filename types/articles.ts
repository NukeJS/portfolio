import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface Article extends ParsedContent {
  title: string
  description: string
  thumbnail?: string
}
