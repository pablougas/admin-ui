import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { CompanyState } from "./types";
import { RootState } from "../../types";

export const state: CompanyState = {
  companies: [],
  error: false,
};

const namespaced = true;

export const companies: Module<CompanyState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
