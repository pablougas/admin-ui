import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import { domain, clientId, authorizationParams } from "../auth_config.json";

import { Auth0Plugin } from "./plugins/auth";
import { RawLocation } from "vue-router";

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  authorizationParams,
  onRedirectCallback: (appState: { targetUrl: RawLocation }) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
