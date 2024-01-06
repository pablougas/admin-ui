<template>
  <v-row>
    <v-col cols="12" class="f-flex align-start">
      <v-text-field
        label="Add email to invite"
        placeholder="invite@email.com"
        hide-details
        outlined
        rounded
        v-model="email"
        @keyup.enter="submit"
      >
        <template v-slot:append>
          <v-fade-transition leave-absolute>
            <v-progress-circular
              v-if="loading"
              size="24"
              color="info"
              indeterminate
            ></v-progress-circular>
            <v-icon v-else size="24" :color="validEmail ? 'success' : 'error'">
              mdi-check
            </v-icon>
            />
          </v-fade-transition>
        </template>
        <template v-slot:append-outer>
          <v-btn
            style="top: -8px"
            @click="submit"
            icon
            :disabled="loading || !validEmail"
            :color="validEmail ? 'success' : ''"
            ><v-icon size="32">mdi-send</v-icon></v-btn
          >
        </template>
      </v-text-field>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "InvitationForm",
  data: () => ({
    loading: false,
    email: "",
  }),
  computed: {
    validEmail(): boolean {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    },
  },
  methods: {
    async submit() {
      if (this.validEmail) {
        try {
          this.loading = true;
          await new Promise(function (resolve) {
            setTimeout(resolve, 500);
          });
          this.$emit("save", this.email);
          this.email = "";
          this.loading = false;
        } catch (e) {
          console.error(e);
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>
