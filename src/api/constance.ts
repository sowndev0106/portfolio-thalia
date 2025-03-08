// export const SERVER_URL = "https://cms.thaliatrandesign.com";
export const SERVER_URL = "http://localhost:1337";
export const API_GET_ABOUT_US = `${SERVER_URL}/api/about-us?populate=*`;
export const API_GET_LIST_NEWS = `${SERVER_URL}/post-news?populate=*`;
export const API_GET_NEWS_BY_SLUG = (slug: string) =>
  `${SERVER_URL}/api/post-news?populate=*&filters[slug][$eq]=${slug}`;

export const API_GET_LIST_GAMING_WEBSITES = `${SERVER_URL}/api/gaming-websites?populate=*`;
export const API_GET_GAMING_WEBSITES_BY_SLUG = (slug: string) =>
  `${SERVER_URL}/api/gaming-websites?populate=*&filters[slug][$eq]=${slug}`;
