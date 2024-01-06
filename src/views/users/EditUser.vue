<template>
  <v-container fluid fill-height :class="{ 'align-start': !loading }">
    <v-row v-if="loading || !user" align="center" justify="center">
      <v1-loader></v1-loader>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <h1 class="pl-5 text-capitalize">{{ user.first_name }} {{ user.last_name }}</h1>
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12">
        <v-card outlined>
          <v-card-text>
            <span class="font-italic">User information...</span>
          </v-card-text>
        </v-card>
        <v-divider class="my-8"></v-divider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { User } from "@/store/modules/users/types";
import V1Loader from "@/components/V1Loader.vue";

export default Vue.extend({
  name: "EditUser",
  components: { V1Loader },
  data: () => ({
    loading: false,
    user: null as User | null,
  }),
  methods: {
    async init() {
      try {
        this.loading = true;
        const { id } = this.$route.params;
        const res = await this.$store.dispatch("users/getOne", id);
        this.user = res as User;
        this.loading = false;
      } catch (e) {
        console.warn(e);
      }
    },
  },
  mounted() {
    this.init()
  }
});
</script>
