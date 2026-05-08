import { postRequest } from "./apiClient";

export const assignSubscriptionApi =
  async (data) => {
    return await postRequest(
      "/subscriptions",
      data
    );
  };