export function mapMetaInfo(meta: {
  title: string;
  description: string;
  keywords?: string | string[];
  image?: string;
  path: string;
}) {
  let { title, description, keywords, image, path } = meta;

  const url = `https:/ronniecodes.com${
    path.startsWith("/") ? path : `/${path}`
  }`;

  if (keywords) {
    if (Array.isArray(keywords)) {
      keywords = keywords.join(", ");
    }
  }

  const metaData = {
    title,

    meta: [
      // Global
      { hid: "description", name: "description", content: description },
      { hid: "keywords", name: "keywords", content: keywords },

      // Facebook
      { hid: "og:title", property: "og:title", content: title },
      {
        hid: "og:description",
        property: "og:description",
        content: description
      },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:url", property: "og:url", content: url },
      { hid: "og:image", property: "og:image", content: image },

      // Twitter
      { hid: "twitter:title", name: "twitter:title", content: title },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: description
      },
      { hid: "twitter:url", name: "twitter:url", content: url },
      { hid: "twitter:image", name: "twitter:image", content: image }
    ]
  };

  return metaData;
}
