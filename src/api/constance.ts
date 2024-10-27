export const SERVER_URL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:1337"
    : "https://cms.thaliatrandesign.com";
export const API_GET_ABOUT_US = `${SERVER_URL}/api/about-us?populate=*`;
export const API_GET_LIST_NEWS = `${SERVER_URL}/post-news?populate=*`;
export const API_GET_NEWS_BY_SLUG = (slug: string) =>
  `${SERVER_URL}/api/post-news?populate=*&filters[slug][$eq]=${slug}`;
