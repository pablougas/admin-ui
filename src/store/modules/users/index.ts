import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { UserState } from "./types";
import { RootState } from "../../types";

export const state: UserState = {
  users: [],
  error: false,
};

const namespaced = true;

export const users: Module<UserState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
