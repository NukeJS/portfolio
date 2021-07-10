export function mapMetaInfo({ title, description, image, path }) {
  const url = `https:/ronniecodes.com/${path}`;

  const metaData = {
    title,
    meta: [
      {
        property: 'og:type',
        hid: 'og:type',
        content: 'website'
      },
      {
        property: 'og:title',
        hid: 'og:title',
        content: title,
      },
      {
        property: 'twitter:title',
        hid: 'twitter:title',
        content: title,
      },
      {
        name: 'description',
        hid: 'description',
        content: description,
      },
      {
        property: 'og:description',
        hid: 'og:description',
        content: description,
      },
      {
        property: 'twitter:description',
        hid: 'twitter:description',
        content: image,
      },
      {
        property: 'og:image',
        hid: 'og:image',
        content: image,
      },
      {
        property: 'twitter:image',
        hid: 'twitter:image',
        content: image,
      },
      {
        property: 'og:url',
        hid: 'og:url',
        content: url,
      },
      {
        property: 'twitter:url',
        hid: 'twitter:url',
        content: url,
      },
    ]
  }

  return metaData;
}