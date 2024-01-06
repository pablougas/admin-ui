<template>
  <v-navigation-drawer
    permanent
    app
    :mini-variant.sync="mini"
    open-on-hover
    clipped
    class="pt-2"
  >
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>John Leider</v-list-item-title>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item
        v-for="item in links"
        :key="item.title"
        link
        exact
        :to="{ name: item.pathName }"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="text-capitalize">{{
            item.title
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "v-navigation-drawer",
  data: () => ({
    mini: false,
    links: [
      {
        title: "home",
        icon: "mdi-home",
        pathName: "Home",
      },
      {
        title: "companies",
        icon: "mdi-domain",
        pathName: "Companies",
      },
      {
        title: "users",
        icon: "mdi-account-multiple",
        pathName: "Users",
      },
    ],
  }),
  watch: {},
  methods: {},
});
</script>

<style lang="scss" scoped></style>
