<template>
  <v-data-table
    outline
    v-if="users"
    :headers="headers"
    :items="users"
    sort-by="name"
  >
    <template v-slot:item.name="{ item }">
      <span class="text-capitalize">
        {{ `${item.first_name} ${item.last_name}` }}</span
      >
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import Vue from "vue";
import { User } from "@/store/modules/users/types";
import { Company } from "@/store/modules/companies/types";

export default Vue.extend({
  name: "UserTable",
  props: {
    company: {
      type: Object as () => Company,
    },
    users: {
      type: Array as () => User[],
      required: true,
    },
  },
  data: () => ({
    headers: [
      {
        text: "Name",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Phone", value: "phone" },
      { text: "Email", value: "email" },
      { text: "Actions", value: "actions", sortable: false },
    ],
  }),
  methods: {
    editItem(item: User) {
      if (item.id) {
        this.$router.push({
          name: "EditUser",
          params: { id: item.id.toString() },
        });
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>
