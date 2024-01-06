<template>
  <v-row>
    <v-col cols="12">
      <invitation-form @save="add($event)" />
    </v-col>
    <v-col cols="12">
      <v-card outlined>
        <v-card-text>
          <p class="text-caption pl-2">{{ listTitle }}</p>
          <v-divider v-if="invitations.length > 0" class="mb-5"></v-divider>
          <v-fade-transition>
            <div class="pl-5">
              <template v-for="invite in invitations">
                <p :key="invite">• {{ invite }}</p>
              </template>
            </div>
          </v-fade-transition>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import InvitationForm from "@/components/forms/InvitationForm.vue";

export default Vue.extend({
  name: "Invitations",
  components: { InvitationForm },
  data: () => ({
    invitations: [] as string[],
  }),
  computed: {
    listTitle(): string {
      return this.invitations.length > 0
        ? "Active Invitations"
        : "No Active Invitations";
    },
  },
  methods: {
    add(val: string) {
      this.invitations.push(val);
    },
  },
});
</script>

<style lang="scss" scoped></style>
