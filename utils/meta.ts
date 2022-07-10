import { MetaObject } from '#app'

import DEFAULT_META from '~/meta.json'

type Meta = {
  title?: string
  description?: string
  keywords?: string | string[]
  image?: string
  path?: string
  type?: string
}

export const headHelper = ({
  title,
  description,
  keywords,
  image,
  path = '/',
  type = 'website'
}: Meta): Partial<MetaObject> => {
  const url = `${DEFAULT_META.url}${path === '/' ? '' : path}`

  title = title ? `${title} - ${DEFAULT_META.title}` : DEFAULT_META.title

  if (keywords && Array.isArray(keywords)) {
    keywords = `${DEFAULT_META.keywords}, ${keywords.join(', ')}`
  } else if (keywords) {
    keywords = `${DEFAULT_META.keywords}, ${keywords}`
  }

  const metaData: Record<string, any> = {
    title,
    meta: [
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:type', property: 'og:type', content: type },
      { hid: 'og:url', property: 'og:url', content: url },
      { hid: 'twitter:title', name: 'twitter:title', content: title },
      { hid: 'twitter:url', name: 'twitter:url', content: url },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: DEFAULT_META.twitter
      }
    ]
  }

  if (description) {
    metaData.meta.push(
      {
        hid: 'description',
        name: 'description',
        content: description
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description
      }
    )
  }

  if (keywords) {
    metaData.meta.push({ hid: 'keywords', name: 'keywords', content: keywords })
  }

  if (image) {
    metaData.meta.push(
      { hid: 'og:image', property: 'og:image', content: image },
      { hid: 'twitter:image', name: 'twitter:image', content: image },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      }
    )
  }

  return metaData
}
