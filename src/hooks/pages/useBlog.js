import { useStaticQuery, graphql } from "gatsby";

export const useBlog = () => {
    const data = useStaticQuery(graphql`
        query Blog {
            allWpCategory(sort: {name: ASC}, skip: 0, limit: 5) {
                nodes {
                    name
                }
            }
            allWpPost {
                edges {
                    node {
                        seo {
                            title
                            metaDesc
                        }
                        slug
                        link
                        title
                        categories {
                            nodes {
                                name
                            }
                        }
                        ACF_blogpage {
                            prefix
                            time
                            flexibleContent {
                                ... on WpPost_AcfBlogpage_FlexibleContent_Heading {
                                    heading
                                }
                                ... on WpPost_AcfBlogpage_FlexibleContent_Content {
                                    content
                                }
                                ... on WpPost_AcfBlogpage_FlexibleContent_ListView {
                                    lists {
                                        list
                                    }
                                }
                                ... on WpPost_AcfBlogpage_FlexibleContent_Image {
                                    image {
                                        localFile {
                                            childImageSharp {
                                                gatsbyImageData
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
    return data;
}     