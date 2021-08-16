import { LOGIN } from "./api";

// Provide nuxt-axios instance to use same configuration across the whole project
const authService = $axios => ({
  login(payload) {
    return $axios.$post(`${LOGIN}`, payload);
  },
  logout() {
    window.localStorage.clear();
    window.location.reload();
  },
  fetchUser() {
    // return $axios.$get(`${SELF}`);
  }
  // Other methods here
});

export { authService };
