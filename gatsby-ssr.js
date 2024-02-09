/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
import React from 'react';

// Wrap the page element with your layout
export const wrapPageElement = ({ element, props }) => {
  return <div {...props}>{element}</div>;
};
