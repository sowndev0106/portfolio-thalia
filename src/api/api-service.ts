import { API_GET_ABOUT_US, API_GET_NEWS_BY_SLUG } from "./constance";

class ApiService {
  constructor() {}

  async getAboutUs() {
    return this.fetchApi(API_GET_ABOUT_US);
  }

  async getNewsBySlug(slug: string) {
    return this.fetchApi(API_GET_NEWS_BY_SLUG(slug));
  }

  private async fetchApi(url: string, props?: RequestInit) {
    const response = await fetch(url, props);
    return response.json();
  }
}
export const apiService = new ApiService();
