const loginAction = async function({ commit }, payload) {
  commit("authLoader", true);
  try {
    const response = await this.$authService.login(payload);
    commit("setUser", response.data);
    commit("setToken", response.data.token);
    commit("setLoggedIn", true);
    commit("authLoader", false);
    // this.$router.push("/home");
    // // return response.data;
  } catch (e) {
    commit("authLoader", false);
    const message =
      e?.response?.data?.message || "Check your network and try again";
    // this.$notify.warning({
    //   message: `${message}`
    // });
  }
};

export default {
  loginAction
};
