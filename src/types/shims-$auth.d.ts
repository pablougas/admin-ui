import Auth0Plugin from "../plugins/auth";

declare module "vue/types/vue" {
  interface Vue {
    $auth: typeof Auth0Plugin;
  }
}
