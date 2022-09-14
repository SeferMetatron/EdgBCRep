export const ENDPOINTS = {
  BASE_URL: `https://www.themealdb.com/api/json/v1/1`,
  get SEARCH() {
    return `${this.BASE_URL}/search.php`;
  },
  get FILTER() {
    return `${this.BASE_URL}/filter.php`;
  },
  get CATEGORIES() {
    return `${this.BASE_URL}/categories.php`;
  },
  get DETAIL() {
    return `${this.BASE_URL}/lookup.php`;
  },
};
