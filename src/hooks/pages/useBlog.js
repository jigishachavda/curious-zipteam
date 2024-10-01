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
                            opengraphTitle
                            opengraphDescription
                            opengraphImage {
                                mediaItemUrl
                            }
                            opengraphUrl
                            schema {
                                raw
                            }
                        }
                        slug
                        link
                        title
                        categories {
                            nodes {
                                name
                            }
                        }
                        content
                        featuredImage {
                            node {
                                caption
                                mediaItemUrl
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData(quality: 90, formats: NO_CHANGE, placeholder: BLURRED)
                                    }
                                }
                            }
                        }
                        ACF_blogpage {
                            fieldGroupName
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
                                        mediaItemUrl
                                        altText
                                        mimeType
                                        localFile {
                                            childImageSharp {
                                               gatsbyImageData(quality: 90, formats: NO_CHANGE, placeholder: BLURRED)
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