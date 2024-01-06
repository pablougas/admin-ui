<template>
  <v-tabs
    background-color="primary"
    dark
    v-model="tabs"
    next-icon="mdi-arrow-right-bold-box-outline"
    prev-icon="mdi-arrow-left-bold-box-outline"
  >
    <v-tabs-slider color="warning"></v-tabs-slider>
    <v-tab href="#users" @click="updateRoute('#users')"> Users </v-tab>
    <v-tab href="#projects" @click="updateRoute('#projects')"> Projects </v-tab>
    <v-tabs-items v-model="tabs">
      <v-tab-item value="users">
        <UsersCard :company="company" />
      </v-tab-item>
      <v-tab-item value="projects">
        <ProjectsCard :company="company" />
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>

<script lang="ts">
import Vue from "vue";
import { Company } from "@/store/modules/companies/types";
import UsersCard from "./UsersCard.vue";
import ProjectsCard from "./ProjectsCard.vue";

export default Vue.extend({
  name: "CompanyTabs",
  components: { UsersCard, ProjectsCard },
  props: {
    company: {
      type: Object as () => Company,
    },
  },
  data: () => ({
    tabs: "users",
  }),
  methods: {
    updateRoute(str: string) {
      this.$router.push({ name: "EditCompany", hash: str });
    },
  },
  mounted() {
    const hash = this.$route.hash.slice(1);
    if (hash) {
      this.tabs = hash;
    }
  },
});
</script>

<style lang="scss" scoped></style>
