export const SERVER_URL =
  process.env.NODE_ENV == "development"
    ? "http://localhost:1337"
    : "https://cms.thaliatrandesign.com/";
console.log({ SERVER_URL, NODE_ENV: process.env.NODE_ENV });
export const API_GET_ABOUT_US = `${SERVER_URL}/api/about-us?populate=*`;
