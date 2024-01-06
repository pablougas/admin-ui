<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card flat outlined>
          <v-toolbar flat>
            <v-toolbar-title>Users</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog
              max-width="900"
              :fullscreen="$vuetify.breakpoint.smAndDown"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2 elevation-0"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-account-plus</v-icon>
                </v-btn>
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-toolbar flat color="primary" dark>
                    Add User
                    <v-spacer></v-spacer>
                    <v-btn icon color="primary" @click="dialog.value = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-toolbar>
                  <v-card-text class="pt-5">
                    <user-form @cancel="dialog.value = false" />
                  </v-card-text>
                </v-card>
              </template>
            </v-dialog>
          </v-toolbar>
          <user-table :users="users"></user-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import UserTable from "@/components/tables/UserTable.vue";
import UserForm from "@/components/forms/UserForm.vue";
import { User } from "@/store/modules/users/types";

export default Vue.extend({
  name: "Users",
  components: { UserTable, UserForm },
  data: () => ({}),
  computed: {
    users(): User[] {
      return this.$store.getters["users/get"];
    },
  },
  methods: {
    async init() {
      this.$store.dispatch("users/getAll");
    },
  },
  beforeMount() {
    this.init();
  },
});
</script>

<style lang="scss" scoped></style>
