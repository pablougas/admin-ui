<template>
  <v-data-table
    v-if="projects"
    :headers="headers"
    :items="projects"
    sort-by="name"
  >
    <template v-slot:item.name="{ item }">
      <span class="text-capitalize">{{ item.name }}</span>
    </template>
    <template v-slot:item.address="{ item }">
      <span class="text-capitalize">{{ item.address }}</span>
    </template>
    <template v-slot:item.owner="{ item }">
      <span class="text-capitalize">{{ item.owner.full_name }}</span>
    </template>
    <template v-slot:item.projectManager="{ item }">
      <span class="text-capitalize">{{ item.project_manager.full_name }}</span>
    </template>
    <template v-slot:item.designer="{ item }">
      <span class="text-capitalize">{{ item.designer.full_name }}</span>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import Vue from "vue";
import { User } from "@/store/modules/users/types";
import { Project } from "@/store/modules/projects/types";

export default Vue.extend({
  name: "ProjectsTable",
  props: {
    projects: {
      type: Array as () => Project[],
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
      { text: "Address", value: "address" },
      { text: "Owner", value: "owner" },
      { text: "Project Manager", value: "projectManager" },
      { text: "Designer", value: "designer" },
      { text: "Actions", value: "actions", sortable: false },
    ],
  }),
  methods: {
    editItem(item: User) {
      console.log(item);
    },
  },
});
</script>

<style lang="scss" scoped></style>
