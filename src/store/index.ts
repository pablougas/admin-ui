import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { companies } from "./modules/companies/index";
import { users } from "./modules/users";
import { projects } from "./modules/projects";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0", // a simple property
  },
  modules: {
    companies,
    users,
    projects,
  },
};

export default new Vuex.Store<RootState>(store);
