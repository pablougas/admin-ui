import { ActionTree } from "vuex";
import { ProjectState, Project } from "./types";
import { RootState } from "../../types";
import { baseAPI } from "../../../services/baseAPI";

export const actions: ActionTree<ProjectState, RootState> = {
  async getOne(_, id) {
    return baseAPI.get(`project/${id}`);
  },
  async create(
    _,
    payload: { company_id: number | string; project: Project }
  ): Promise<Project | Error> {
    return (await baseAPI.post(
      `companies/${payload.company_id}/projects`,
      payload.project
    )) as Project | Error;
  },
};
