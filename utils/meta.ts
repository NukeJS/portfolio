import { MetaInfo } from 'vue-meta'

import { url as metaURL } from '~/meta.json'

export function meta(meta: {
  title: string
  description?: string
  keywords?: string | string[]
  image?: string
  path?: string
  type?: string
  locale?: string
  defaultLocale?: string
}): Partial<MetaInfo> {
  let {
    title,
    description,
    keywords,
    image,
    path = '/',
    type = 'website',
    locale,
    defaultLocale,
  } = meta

  const url = `${metaURL}${locale === defaultLocale ? '' : `/${locale}`}${
    path === '/' ? '' : path
  }`

  if (keywords && Array.isArray(keywords)) {
    keywords = keywords.join(', ')
  }

  const metaData: Record<string, any> = {
    title,
    meta: [
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:type', property: 'og:type', content: type },
      { hid: 'og:url', property: 'og:url', content: url },
      { hid: 'twitter:title', name: 'twitter:title', content: title },
      { hid: 'twitter:url', name: 'twitter:url', content: url },
    ],
  }

  if (description) {
    metaData.meta.push(
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description,
      }
    )
  }

  if (keywords) {
    metaData.meta.push({ hid: 'keywords', name: 'keywords', content: keywords })
  }

  if (image) {
    metaData.meta.push(
      { hid: 'og:image', property: 'og:image', content: image },
      { hid: 'twitter:image', name: 'twitter:image', content: image! }
    )
  }

  return metaData
}
