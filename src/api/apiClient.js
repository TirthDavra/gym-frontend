import axiosInstance from "./axiosInstance";

export const getRequest = async (
  url,
  config = {}
) => {
  const response =
    await axiosInstance.get(url, config);

  return response.data;
};

export const postRequest = async (
  url,
  data,
  config = {}
) => {
  const response =
    await axiosInstance.post(
      url,
      data,
      config
    );

  return response.data;
};

export const putRequest = async (
  url,
  data,
  config = {}
) => {
  const response =
    await axiosInstance.put(
      url,
      data,
      config
    );

  return response.data;
};

export const deleteRequest = async (
  url,
  config = {}
) => {
  const response =
    await axiosInstance.delete(
      url,
      config
    );

  return response.data;
};