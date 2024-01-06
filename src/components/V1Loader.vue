<template>
  <v-progress-circular
    :size="120"
    :width="12"
    color="primary"
    indeterminate
  ></v-progress-circular>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "V1Loader",
  data: () => ({}),
  watch: {},
  methods: {},
});
</script>

<style lang="scss" scoped></style>
