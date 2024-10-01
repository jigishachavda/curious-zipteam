import { isArray } from "lodash";

export const isEmpty = (value) => {
  if (value == null || value === "null") {
    return true;
  }
  if (typeof value == "object") {
    return Object.keys(value).length === 0;
  }
  return (
    (isArray(value) && value.length === 0) ||
    value === undefined ||
    value === "undefined" ||
    value === null ||
    value === ""
  );
};

export const addSlugToBody = (slug) => {
  if (typeof window !== 'undefined') { 
    document.getElementsByTagName('body')[0].classList = [slug]
  }
}
