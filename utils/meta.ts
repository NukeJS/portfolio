import type { MetaObject } from '#app';
import * as DEFAULT_META from '~/data/meta';

interface Meta {
  title?: string;
  description?: string;
  keywords?: string | string[];
  image?: string;
  type?: string;
}

export const useHeadHelper = ({
  title,
  description = DEFAULT_META.description,
  keywords,
  image,
  type = 'website',
  /* @ts-ignore */
  bodyAttrs,
  /* @ts-ignore */
  charset,
  /* @ts-ignore */
  htmlAttrs,
  /* @ts-ignore */
  link,
  /* @ts-ignore */
  script,
  /* @ts-ignore */
  style,
  /* @ts-ignore */
  viewport,
}: Meta & Omit<MetaObject, 'titleTemplate'> = {}) => {
  title = title ? `${title} - ${DEFAULT_META.title}` : DEFAULT_META.title;
  const url = `${DEFAULT_META.url}${useRoute().path}`;

  useHead({
    title,
    meta: [
      /* ------------------------------- Open Graph ------------------------------- */
      { hid: 'og:title', property: 'og:title', content: title },
      { hid: 'og:type', property: 'og:type', content: type },
      { hid: 'og:url', property: 'og:url', content: url },
      /* -------------------------------------------------------------------------- */

      /* --------------------------------- Twitter -------------------------------- */
      { hid: 'twitter:title', name: 'twitter:title', content: title },
      { hid: 'twitter:url', name: 'twitter:url', content: url },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: DEFAULT_META.twitter,
      },
      /* -------------------------------------------------------------------------- */

      /* ------------------------------- Description ------------------------------ */
      ...(description
        ? [
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
            },
          ]
        : []),
      /* -------------------------------------------------------------------------- */

      /* ---------------------------------- Image --------------------------------- */
      ...(image
        ? [
            { hid: 'og:image', property: 'og:image', content: image },
            { hid: 'twitter:image', name: 'twitter:image', content: image },
            {
              hid: 'twitter:card',
              name: 'twitter:card',
              content: 'summary_large_image',
            },
          ]
        : []),
      /* -------------------------------------------------------------------------- */

      /* -------------------------------- Keywords -------------------------------- */
      {
        hid: 'keywords',
        name: 'keywords',
        content: keywords
          ? `${DEFAULT_META.keywords}, ${
              Array.isArray(keywords) ? keywords.join(', ') : keywords
            }`
          : DEFAULT_META.keywords,
      },
      /* -------------------------------------------------------------------------- */
    ],

    bodyAttrs,
    /* @ts-ignore */
    charset,
    htmlAttrs,
    link,
    script,
    style,
    viewport,
  });
};
