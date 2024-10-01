import { useStaticQuery, graphql } from "gatsby";

export const useFooter = () => {
    const data = useStaticQuery(graphql`
        query Footer {
            allWp {
                nodes {
                    footer {
                        ACF_footer {
                            formHeading
                            logo2 {
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData
                                    }
                                }
                            }
                            column1 {
                                heading
                                links {
                                    link {
                                        title
                                        url
                                    }
                                }
                            }
                            column2 {
                                heading
                                links {
                                    link {
                                        title
                                        url
                                    }
                                }
                            }
                            column3 {
                                heading
                                links {
                                    link {
                                        title
                                        url
                                    }
                                }
                            }
                            column4 {
                                heading
                                links {
                                    link {
                                        title
                                        url
                                    }
                                }
                            }
                            soicalMedia {
                                icon {
                                    localFile {
                                        childImageSharp {
                                            gatsbyImageData
                                        }
                                    }
                                }
                                link {
                                    url
                                }
                            }
                            logo {
                                localFile {
                                    childImageSharp {
                                        gatsbyImageData
                                    }
                                }
                            }
                            copyrightText
                            rightBottomLink {
                                link {
                                    title
                                    url
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