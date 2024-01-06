<template>
  <v-container fluid>
    <v-row :no-gutters="$vuetify.breakpoint.mdAndUp">
      <v-col cols="12" md="8">
        <v-row>
          <v-col cols="12" md="9">
            <v-text-field
              large
              v-model="newProject.name"
              outlined
              label="Project name"
              name="project name"
              hide-details
            />
          </v-col>
          <v-col cols="12">
            <user-select
              v-model="newProject.project_manager_id"
              :items="company.users"
              item-value="id"
              label="Project Manager"
              hide-details
            />
          </v-col>
          <v-col cols="12">
            <user-select
              v-model="newProject.owner_id"
              :items="company.users"
              item-value="id"
              label="Owner"
              hide-details
            />
          </v-col>
          <v-col cols="12">
            <user-select
              v-model="newProject.designer_id"
              :items="company.users"
              item-value="id"
              label="Designer"
              name="designer"
              hide-details
            />
          </v-col>
          <v-col>
            <vue-google-autocomplete
              class="address-input"
              id="map"
              classname="form-control"
              placeholder="Start typing"
              v-on:placechanged="getAddressData"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4" class="pt-md-0 pt-xs-15 pt-sm-15">
        <v-row>
          <v-col cols="12" class="pl-2 py-0">
            <p class="title mb-0 text-center">
              <label for="project date range">Project Date Range</label>
            </p>
          </v-col>
          <v-col class="d-flex justify-center align-start pt-0">
            <date-range-picker v-model="dates" name="project date range" />
          </v-col>
        </v-row>
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
import { Project } from "@/store/modules/projects/types";
import UserSelect from "@/components/forms/inputs/UserSelect.vue";
import DateRangePicker from "@/components/forms/inputs/DateRangePicker.vue";
import VueGoogleAutocomplete from "vue-google-autocomplete";

export default Vue.extend({
  name: "UserForm",
  components: { UserSelect, DateRangePicker, VueGoogleAutocomplete },
  props: {
    project: {
      type: Object as () => Project,
    },
    company: {
      type: Object as () => Company,
    },
  },
  data: () => ({
    newProject: {
      user_id: 3,
      company_id: "1",
      name: "",
      project_manager_id: "",
      owner_id: "",
      designer_id: "",
      projected_start_date: "",
      projected_end_date: "",
    },
    dates: [],
  }),
  watch: {
    dates: {
      handler(newVal, oldVal) {
        if (newVal != oldVal) {
          newVal.sort(function (a: string, b: string) {
            let dateA = new Date(a).toString(); // typescript likes this conversion to string
            let dateB = new Date(b).toString();

            return (Date.parse(dateA) as number) - Date.parse(dateB);
          });
          this.newProject.projected_start_date = newVal[0];
          this.newProject.projected_end_date = newVal[1];
        }
      },
      deep: true,
    },
  },
  methods: {
    getAddressData(val: string | JSON) {
      console.log("ADDRESS: ", val);
    },
    async save() {
      // this.newProject.company_id = this.company.id as string;
      try {
        await this.$store.dispatch("projects/create", {
          company_id: this.company.id,
          project: this.newProject,
        });
      } catch (e) {
        console.error(e);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.address-input {
  display: flex;
  height: 56px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.32);
  border-radius: 4px;
  padding: 0 12px;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.42);
  }
}
</style>
