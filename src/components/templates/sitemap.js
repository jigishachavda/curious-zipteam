import React from 'react';
import { usePageBuilder } from '../../hooks/pages/usePageBuilder';
import { useBlog } from '../../hooks/pages/useBlog';

const Sitemap = () => {
  const data = usePageBuilder();
  const data2 = useBlog();
  const edges = data?.allWpPage?.edges;
  const edges2 = data2?.allWpPost?.edges;

  // Getting the current date in ISO format for lastmod
  const currentDate = new Date().toISOString();

  // Start constructing the XML
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetStart = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetEnd = '</urlset>';

  const urlEntries = edges?.map((item) => {
    const schema = item?.node?.seo?.schema?.raw ? JSON.parse(item.node.seo.schema.raw) : null;
    const pageInfo = schema?.['@graph']?.find(graphItem => graphItem['@type'] === 'WebPage');

    if (pageInfo) {
      const lastModified = pageInfo.dateModified || currentDate;

      return `
        <url>
          <loc>${pageInfo.url}</loc>
          <lastmod>${lastModified}</lastmod>
        </url>
      `;
    }
    return '';
  }).join('');
  const urlEntries2 = edges2?.map((item) => {
    const schema = item?.node?.seo?.schema?.raw ? JSON.parse(item.node.seo.schema.raw) : null;
    const pageInfo = schema?.['@graph']?.find(graphItem => graphItem['@type'] === 'WebPage');

    if (pageInfo) {
      const lastModified = pageInfo.dateModified || currentDate;

      return `
        <url>
          <loc>${pageInfo.url}</loc>
          <lastmod>${lastModified}</lastmod>
        </url>
      `;
    }
    return '';
  }).join('');

  const fullXml = `${xmlHeader}\n${urlsetStart}\n${urlEntries}\n${urlEntries2}\n${urlsetEnd}`;

  return (
    <div>
      <pre>{fullXml}</pre>
    </div>
  );
};

export default Sitemap;
