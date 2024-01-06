import { getInstance } from "@/plugins/auth";
import { Company } from "@/store/modules/companies/types";
import { Project } from "@/store/modules/projects/types";
import { User } from "@/store/modules/users/types";

const baseUrl = process.env.VUE_APP_BASE_API;

export const setAuthHeader = async (): Promise<void> => {
  try {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const authService = getInstance() as Record<string, any>;
    const token = await authService.getTokenSilently();
    headers["Authorization"] = `Bearer ${token}`;
  } catch (e) {
    console.error(e);
  }
};

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Credentials": "true",
  Authorization: "null",
};

const get = async (
  url: string
): Promise<
  | Record<string, unknown>
  | Error
  | Company
  | Company[]
  | User
  | User[]
  | Project
  | Project[]
> => {
  const requestOptions = {
    method: "GET",
    headers,
  };
  return fetch(baseUrl + url, requestOptions).then(handleResponse);
};

const post = async (
  url: string,
  body: User | Record<string, unknown> | Company | Project
): Promise<Record<string, unknown> | Error> => {
  const requestOptions = {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  };
  return fetch(baseUrl + url, requestOptions).then(handleResponse);
};

const put = async (
  url: string,
  body: Company | User | Record<string, unknown>
): Promise<Record<string, unknown> | Error> => {
  const requestOptions = {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
  };
  return fetch(baseUrl + url, requestOptions).then(handleResponse);
};

// prefixed with underscored because delete is a reserved word in javascript
const _delete = async (
  url: string
): Promise<Record<string, unknown> | Error> => {
  const requestOptions = {
    method: "DELETE",
    headers,
  };
  return fetch(baseUrl + url, requestOptions).then(handleResponse);
};

// helper functions
const handleResponse = async (
  response: Response
): Promise<Record<string, unknown> | Error> => {
  try {
    const res = await response.json();
    const { body } = res;
    if (!response.ok) {
      const error = (body && body.message) || response.statusText;
      throw new Error(error);
    }
    if (!body) {
      return res;
    }
    return body;
  } catch (e) {
    return Promise.reject(e);
  }
};

export const baseAPI = {
  get,
  post,
  put,
  delete: _delete,
};
