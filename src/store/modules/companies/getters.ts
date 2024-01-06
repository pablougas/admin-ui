import { GetterTree } from "vuex";
import { CompanyState, Company } from "./types";
import { RootState } from "../../types";

export const getters: GetterTree<CompanyState, RootState> = {
  get(state): Company[] {
    const { companies } = state;
    return companies;
  },
};
