import { postRequest } from "./apiClient";

export const loginApi = async (
  data
) => {
  return await postRequest(
    "/auth/login",
    data
  );
};