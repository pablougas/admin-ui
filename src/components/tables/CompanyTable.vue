<template>
  <v-data-table :headers="headers" :items="companies" sort-by="calories">
    <template v-slot:item.legal_name="{ item }">
      <span class="text-capitalize">{{ item.legal_name }}</span>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import Vue from "vue";
import { Company } from "../../store/modules/companies/types";

export default Vue.extend({
  name: "UserTable",
  props: {
    companies: {
      type: Array as () => Company[],
    },
  },
  data: () => ({
    headers: [
      {
        text: "Company (100g serving)",
        align: "start",
        sortable: false,
        value: "legal_name",
      },
      { text: "Phone", value: "phone" },
      { text: "Actions", value: "actions", sortable: false },
    ],
  }),
  methods: {
    editItem(item: Company) {
      console.log(item);
      if (item.id) {
        this.$router.push({
          name: "EditCompany",
          params: { id: item.id.toString() },
        });
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>
