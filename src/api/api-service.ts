import { API_GET_ABOUT_US } from "./constance";

class ApiService {
  constructor() {}

  async getAboutUs() {
    return this.fetchApi(API_GET_ABOUT_US);
  }

  private async fetchApi(url: string, props?: RequestInit) {
    const response = await fetch(url, props);
    return response.json();
  }
}
export const apiService = new ApiService();
