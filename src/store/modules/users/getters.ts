import { GetterTree } from "vuex";
import { UserState, User } from "./types";
import { RootState } from "../../types";

export const getters: GetterTree<UserState, RootState> = {
  get(state): User[] {
    const { users } = state;
    return users;
  },
};
