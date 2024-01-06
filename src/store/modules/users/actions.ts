import { ActionTree } from "vuex";
import { UserState, User } from "./types";
import { RootState } from "../../types";
import { baseAPI } from "../../../services/baseAPI";

export const actions: ActionTree<UserState, RootState> = {
  async getOne(_, id) {
    return baseAPI.get(`users/${id}`);
  },
  async getAll({ commit }): Promise<User[] | Error> {
    try {
      const res = (await baseAPI.get("users")) as User[];
      if (typeof res == "string") {
        throw new Error(res);
      }
      commit("SET_USERS", res);
      return res;
    } catch (e) {
      // dispatch(
      //   "notifications/add",
      //   {
      //     type: "error",
      //     message: e,
      //   },
      //   { root: true }
      // );
      throw new Error(e as string);
    }
  },
  async create(_, payload): Promise<User | Error> {
    return (await baseAPI.post("users", payload)) as User | Error;
  },
  async updateUser(_, payload: User): Promise<User | Error> {
    return (await baseAPI.put(`user/${payload.id}`, payload)) as User | Error;
  },
  async createCompanyUser(
    _,
    payload: { company_id: string | number; user: User }
  ): Promise<User | Error> {
    return (await baseAPI.post(`companies/${payload.company_id}/users`, {})) as
      | User
      | Error;
  },
  // async delete(_, id: number) {
  //   return baseAdminAPI.delete(`organizations/${id}`);
  // },
};
