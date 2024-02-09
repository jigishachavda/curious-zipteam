import React from "react";
import { Helmet } from 'react-helmet';
import { usePageBuilder } from "../../hooks/pages/usePageBuilder";

const PageTemplate = ({ pageSlug }) => {
    const data = usePageBuilder();
    const pages = data.allWpPage.edges
    const pageIndex = data.allWpPage.nodes.findIndex(node => node.slug.toLowerCase().includes(pageSlug))

    return (
        <>
            <Helmet>
                <title>{pages[pageIndex]?.node?.seo?.title}</title>
                <meta name="description" content={pages[pageIndex]?.node.seo?.metaDesc} />
            </Helmet>
        </>
    );
};

export default PageTemplate;