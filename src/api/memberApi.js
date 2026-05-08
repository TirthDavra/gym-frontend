import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
} from "./apiClient";

export const getMembersApi =
  async (page = 1, limit = 10) => {
    return await getRequest(
      `/members?page=${page}&limit=${limit}`
    );
  };

export const createMemberApi =
  async (data) => {
    return await postRequest(
      "/members",
      data
    );
  };

export const updateMemberApi =
  async (id, data) => {
    return await putRequest(
      `/members/${id}`,
      data
    );
  };

export const deleteMemberApi =
  async (id) => {
    return await deleteRequest(
      `/members/${id}`
    );
  };