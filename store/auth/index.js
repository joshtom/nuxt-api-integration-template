import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export const state = () => ({
  isLoading: false,
  loggedIn: false,
  user: null,
  token: null,
  isFailure: false,
  prefilledData: {
    username: null,
    password: null
  }
});

export default {
  state,
  actions,
  getters,
  mutations
};
