<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="8">
        <v-autocomplete
          v-if="!company"
          v-model="newUser.company_id"
          :items="companies"
          item-text="legal_name"
          item-value="id"
          outlined
          label="Company"
          name="company"
          clearable
        />
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="newUser.first_name"
          outlined
          label="First name"
          name="first_name"
        />
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="newUser.last_name"
          outlined
          label="Last name"
          name="last_name"
        />
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="newUser.email"
          outlined
          label="Email"
          name="email"
        />
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="newUser.phone"
          outlined
          label="Phone"
          name="phone"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-spacer />
      <v-btn elevation="0" @click="$emit('cancel')" class="mr-3">Cancel</v-btn>
      <v-btn elevation="0" color="primary" @click="save">Save</v-btn>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Company } from "@/store/modules/companies/types";
import { User } from "@/store/modules/users/types";

export default Vue.extend({
  name: "UserForm",
  props: {
    user: {
      type: Object as () => User,
    },
    company: {
      type: Object as () => Company,
    },
  },
  data: () => ({
    newUser: {
      company_id: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
    },
  }),
  computed: {
    companies(): Company[] {
      return this.$store.getters["companies/get"];
    },
  },
  methods: {
    async createUser() {
      return await this.$store.dispatch("users/create", this.newUser);
    },
    async createCompanyUser() {
      return await this.$store.dispatch("users/createCompanyUser", {
        company_id: this.company.id,
        user: this.newUser,
      });
    },
    async updateUser() {
      return await this.$store.dispatch("users/updateUser", this.newUser);
    },
    async save() {
      try {
        if (this.user) {
          await this.updateUser();
        } else if (this.company) {
          await this.createCompanyUser();
        } else {
          await this.createUser();
        }
        this.$store.dispatch("users/getAll");
        this.$emit("cancel");
      } catch (e) {
        console.error(e);
      }
    },
  },
  mounted() {
    this.$store.dispatch("companies/getAll");
  },
});
</script>

<style lang="scss" scoped></style>
