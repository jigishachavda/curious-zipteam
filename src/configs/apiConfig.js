import appConfig from "./appConfig";

const apiConfig = {
  baseURL: (
    appConfig.host +
    "/" +
    appConfig.prefix +
    "/"
  ).replace(/([^:]\/)\/+/g, "$1"),

  publicURL: (appConfig.host + "/").replace(/([^:]\/)\/+/g, "$1"),

  // contact form
  submitContact: "contact-form-7/v1/contact-forms/580/feedback",

};

export default apiConfig;
