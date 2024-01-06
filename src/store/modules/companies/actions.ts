import { ActionTree } from "vuex";
import { CompanyState, Company } from "./types";
import { RootState } from "../../types";
import { baseAPI } from "../../../services/baseAPI";

export const actions: ActionTree<CompanyState, RootState> = {
  async getOne(_, id) {
    return baseAPI.get(`companies/${id}`);
  },
  async getAll({ commit }): Promise<Company[] | Error> {
    try {
      const res = (await baseAPI.get("companies")) as Company[];
      if (typeof res == "string") {
        throw new Error(res);
      }
      commit("SET_COMPANIES", res);
      return res;
    } catch (e) {
      throw new Error(e as string);
    }
  },
  async create({ dispatch }, payload) {
    return baseAPI
      .post("companies", payload)
      .then((_) => dispatch("companies/getAll"));
  },
  // async delete(_, id: number) {
  //   return baseAdminAPI.delete(`organizations/${id}`);
  // },
  // async create(_, payload: Company): Promise<Company | Error> {
  //   return (await baseAdminAPI.post("organizations", payload)) as
  //     | Company
  //     | Error;
  // },

  // ORG Members
  // async getOrganizationMembers(
  //   _,
  //   payload: string | number
  // ): Promise<MemberResponse[] | Error> {
  //   return (await baseAdminAPI.get(
  //     `organizations/${payload}/users`
  //   )) as MemberResponse[];
  // },
  // async addOrganizationMembers(
  //   _,
  //   payload: { organization_id: number; user_id: number }
  // ): Promise<Member | Error> {
  //   return (await baseAdminAPI.post(`organizations/users`, payload)) as Member;
  // },
};
