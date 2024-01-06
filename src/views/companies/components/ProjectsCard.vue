<template>
  <v-card outlined>
    <v-toolbar flat>
      <v-spacer></v-spacer>
      <v-dialog
        hide-overlay
        persistent
        max-width="90%"
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
            <v-icon>mdi-folder-plus</v-icon>
          </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card :fullscreen="$vuetify.breakpoint.smAndDown">
            <v-toolbar flat color="primary" dark>
              Add Project
              <v-spacer></v-spacer>
              <v-btn icon @click="dialog.value = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text class="pt-4">
              <project-form :company="company" />
            </v-card-text>
          </v-card>
        </template>
      </v-dialog>
    </v-toolbar>
    <v-card-text>
      <projects-table
        v-if="company"
        :company="company"
        :projects="company.projects"
      />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Company } from "@/store/modules/companies/types";
import ProjectsTable from "@/components/tables/ProjectsTable.vue";
import ProjectForm from "@/components/forms/ProjectForm.vue";

export default Vue.extend({
  name: "ProjectsCard",
  components: { ProjectsTable, ProjectForm },
  props: {
    company: {
      type: Object as () => Company,
    },
  },
  data: () => ({}),
  watch: {},
  methods: {},
});
</script>

<style lang="scss" scoped></style>
