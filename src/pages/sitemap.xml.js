import React from 'react'
import Sitemap from '../components/templates/sitemap';

const SiteMapXml = ({ res }) => {
  res?.setHeader('Content-Type', 'application/xml');

  return (
      <Sitemap />
  );
};

export default SiteMapXml;