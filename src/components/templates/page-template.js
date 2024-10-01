import React from "react";
import { Helmet } from 'react-helmet-async';
import { usePageBuilder } from "../../hooks/pages/usePageBuilder";

const PageTemplate = ({ pageSlug }) => {
    const data = usePageBuilder();
    const pages = data?.allWpPage?.edges
    const pageIndex = data?.allWpPage?.nodes?.findIndex(node => node?.slug?.toLowerCase()?.includes(pageSlug))
    const page = pages[pageIndex]?.node;

    return (
        <>
            <Helmet>
                <title>{page?.seo?.title}</title>
                <meta name="description" content={page?.seo?.metaDesc} />
                <meta property="og:title" content={page?.seo?.opengraphTitle} />
                <meta property="og:description" content={page?.seo?.opengraphDescription} />
                <meta property="og:image" content={page?.seo?.opengraphImage?.mediaItemUrl} />
                <meta property="og:url" content={page?.seo?.opengraphUrl} />
                <meta property="og:type" content="article" />
                <script defer data-domain="zipteam.com" src="https://plausible.io/js/script.js"></script>
            </Helmet>
        </>
    );
};

export default PageTemplate;