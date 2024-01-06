import store from '@/store'; import store from '@/store';
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card flat outlined>
          <v-toolbar flat>
            <v-toolbar-title>Companies</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog max-width="900">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2 elevation-0"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-domain-plus</v-icon>
                </v-btn>
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-toolbar color="primary" flat dark>
                    Add Company
                    <v-spacer />
                    <v-btn icon>
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-toolbar>
                  <v-card-text class="pt-5">
                    <company-form @cancel="[(dialog.value = false), init]" />
                  </v-card-text>
                </v-card>
              </template>
            </v-dialog>
          </v-toolbar>
          <v-card-text>
            <company-table :companies="companies"></company-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Company } from "@/store/modules/companies/types";
import CompanyTable from "@/components/tables/CompanyTable.vue";
import CompanyForm from "@/components/forms/CompanyForm.vue";

export default Vue.extend({
  name: "Companies",
  components: { CompanyTable, CompanyForm },
  data: () => ({}),
  watch: {},
  computed: {
    companies(): Company[] {
      return this.$store.getters["companies/get"];
    },
  },
  methods: {
    init() {
      this.$store.dispatch("companies/getAll");
    },
  },
  beforeMount() {
    this.init();
  },
});
</script>

<style lang="scss" scoped></style>
