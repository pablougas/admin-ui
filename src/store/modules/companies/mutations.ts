import { CompanyState, Company } from "./types";
import { MutationTree } from "vuex";

export const mutations: MutationTree<CompanyState> = {
  SET_COMPANIES(state, payload: Company[]) {
    state.companies = payload;
    state.error = false;
  },
  SET_ERROR(state) {
    state.error = true;
    state.companies = [];
  },
};
