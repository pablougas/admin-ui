import { GetterTree } from "vuex";
import { ProjectState, Project } from "./types";
import { RootState } from "../../types";

export const getters: GetterTree<ProjectState, RootState> = {
  get(state): Project[] {
    const { projects } = state;
    return projects;
  },
};
