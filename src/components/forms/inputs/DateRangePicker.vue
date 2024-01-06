<template>
  <v-row>
    <v-col cols="12" class="d-flex justify-center">
      <v-date-picker
        v-on="$listeners"
        v-bind="$attrs"
        range
        scrollable
        no-title
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DateRangePicker",
  data: () => ({}),
});
</script>
