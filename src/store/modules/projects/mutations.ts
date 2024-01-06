import { ProjectState, Project } from "./types";
import { MutationTree } from "vuex";

export const mutations: MutationTree<ProjectState> = {
  SET_PROJECTS(state, payload: Project[]) {
    state.projects = payload;
    state.error = false;
  },
  SET_ERROR(state) {
    state.error = true;
    state.projects = [];
  },
};
