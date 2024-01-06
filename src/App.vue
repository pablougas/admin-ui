<template>
  <v-app>
    <nav-drawer></nav-drawer>
    <app-bar></app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import AppBar from "@/components/layout/AppBar.vue";
import NavDrawer from "./components/layout/NavDrawer.vue";
import { setAuthHeader } from "./services/baseAPI";

export default Vue.extend({
  name: "App",
  components: { AppBar, NavDrawer },
  data: () => ({
    initializing: false,
    initialized: false,
    drawer: false,
  }),
  watch: {
    "$auth.loading": {
      async handler(bool: boolean) {
        if (!bool) {
          if (!this.initialized && !this.initializing) {
            this.initializing = true;
            this.initialize();
          }
        }
      },
      deep: true,
    },
  },
  methods: {
    async initialize() {
      try {
        if (this.$auth.loading == false) {
          await setAuthHeader();
          // await this.handleUserRegistration();
          this.initialized = true;
        } else {
          setTimeout(this.initialize, 300);
        }
      } catch (e) {
        console.error(e);
      } finally {
        this.initialized = true;
      }
    },
  }
});
</script>
