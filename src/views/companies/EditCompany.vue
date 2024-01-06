<template>
  <v-container fluid fill-height :class="{ 'align-start': !loading }">
    <v-row v-if="loading" align="center" justify="center">
      <v1-loader></v1-loader>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <h1 class="pl-5">{{ company?.legal_name }}</h1>
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12">
        <v-card outlined>
          <v-card-text>
            <span class="font-italic">Company information...</span>
          </v-card-text>
        </v-card>
        <v-divider class="my-8"></v-divider>
        <company-tabs :company="company" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Company } from "@/store/modules/companies/types";
import V1Loader from "@/components/V1Loader.vue";
import CompanyTabs from "@/views/companies/components/CompanyTabs.vue";

export default Vue.extend({
  name: "EditCompany",
  components: { V1Loader, CompanyTabs },
  data: () => ({
    loading: true,
    company: null as null | Company,
  }),
  watch: {},
  methods: {
    async init() {
      try {
        this.loading = true;
        const id = this.$route.params.id;
        await new Promise(function (resolve) {
          // Setting 2000 ms time
          setTimeout(resolve, 500);
        });
        const res = await this.$store.dispatch("companies/getOne", id);

        this.company = res;
        this.loading = false;
      } catch (e) {
        console.log(e);
      }
    },
  },
  beforeMount() {
    this.init();
  },
});
</script>

<style lang="scss" scoped></style>
