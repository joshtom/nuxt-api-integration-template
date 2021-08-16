const authLoader = (state, isLoading) => {
  state.isLoading = isLoading;
};

const setUser = (state, user) => {
  state.user = user;
};

const setToken = (state, token) => {
  state.token = token;
};

const setLoggedIn = (state, loggedIn) => {
  state.loggedIn = loggedIn;
};

export default {
  authLoader,
  setUser,
  setToken,
  setLoggedIn
};
