import { authService } from "~/services";

export default async ({ store, $axios }, inject) => {
  var api;
  var token;
  api = $axios.create();
  // Listen to state changes to get the token
  store.subscribe(({}, state) => {
    token = state.auth && state.auth?.token;
    api.setToken(token);
  });

  const allMethods = {
    authService: authService(api)
    // import another service here
  };
  const methods = Object.keys(allMethods);
  methods.forEach(method => {
    inject(method, allMethods[method]);
  });
};
