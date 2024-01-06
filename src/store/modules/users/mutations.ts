import { UserState, User } from "./types";
import { MutationTree } from "vuex";

export const mutations: MutationTree<UserState> = {
  SET_USERS(state, payload: User[]) {
    state.users = payload;
    state.error = false;
  },
  SET_ERROR(state) {
    state.error = true;
    state.users = [];
  },
};
