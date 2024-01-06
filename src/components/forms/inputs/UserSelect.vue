<template>
  <v-select v-bind="$attrs" v-on="$listeners" outlined name="project manager">
    <template v-slot:item="{ item }">
      <v-list-item-avatar size="28">
        <img :src="avatars[0]" />
      </v-list-item-avatar>
      <v-list-item-content class="text-capitalize">{{
        `${item.first_name} ${item.last_name}`
      }}</v-list-item-content>
    </template>
    <template v-slot:selection="{ item, index }">
      <v-list-item-avatar size="30" class="pa-0 mb-0 mt-1">
        <img :src="avatars[index]" />
      </v-list-item-avatar>
      <v-list-item-content class="text-capitalize">{{
        `${item.first_name} ${item.last_name}`
      }}</v-list-item-content>
    </template>
  </v-select>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UserSelect",
  data: () => ({
    avatars: [
      "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    ],
  }),
  watch: {},
  methods: {},
});
</script>

<style lang="scss" scoped></style>
