import { useStaticQuery, graphql } from "gatsby";

export const useConfig = () => {
  const data = useStaticQuery(graphql`
    query Config {
      wp {
        generalSettings {
          url
        }
        contactForms {
          shortcode
          title
          id
        }
      }
    }
  `);
  return data;
};
