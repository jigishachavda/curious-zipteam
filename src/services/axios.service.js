import axios from "axios";
import { apiConfig } from "../configs";

const instance = axios.create({
  baseURL: apiConfig.baseURL,
});

const requestMiddleware = (config) => {
  return config;
}

// Prepare request
instance.interceptors.request.use(
  requestMiddleware,
  (error) => Promise.reject(error)
);

// Prepare Response
instance.interceptors.response.use(
  (response) => {
    if (
      response.config.url.includes(apiConfig.downloadInvoice)
  ) {
      return response.data;
  }

    return response.data.success ? response.data.data : response.error;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const post = (url, data, headers = {}) => instance.post(url, data, headers);

const destroy = (url) => instance.delete(url);

const get = (url, params) =>
  instance.get(url, {
    params,
  });

const put = (url, data, headers = {}) => instance.put(url, data, headers);

export default {
  post,
  destroy,
  get,
  put,
};
