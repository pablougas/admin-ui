<template>
  <v-card flat :loading="loading">
    <v-card-text>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="company.legal_name"
            outlined
            label="Legal name"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="company.phone" outlined label="Phone" />
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        @click="$emit('cancel')"
        class="elevation-0 mr-3"
        :disabled="loading"
        >Cancel</v-btn
      >
      <v-btn
        color="primary"
        class="elevation-0"
        @click="save"
        :loading="loading"
        >Save</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CompanyForm",
  data: () => ({
    loading: false,
    company: {
      legal_name: "",
      dba: "",
      phone: "",
    },
  }),
  watch: {},
  methods: {
    async save() {
      try {
        this.loading = true;
        await this.$store.dispatch("companies/create", this.company);
        this.loading = false;
        this.$emit("cancel");
      } catch (e) {
        console.warn(e);
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>
