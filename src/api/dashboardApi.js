import { getRequest } from "./apiClient";

export const getDashboardStatsApi =
  async () => {
    return await getRequest(
      "/dashboard/stats"
    );
  };