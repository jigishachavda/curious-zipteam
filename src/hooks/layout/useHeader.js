import { useStaticQuery, graphql } from "gatsby";

export const useHeader = () => {
    const data = useStaticQuery(graphql`
        query Header {
            allWp {
                nodes {
                    header {
                        ACF_header {
                            fieldGroupName
                            logo {
                                localFile {
                                            childImageSharp {
                                                gatsbyImageData
                                            }
                                        }
                            }
                            menuLinks {
                                link {
                                    title
                                    url
                                }
                                megaMenu {
                                    background {
                                        localFile {
                                            childImageSharp {
                                                gatsbyImageData
                                            }
                                        }
                                    }
                                    image {
                                        localFile {
                                            childImageSharp {
                                                gatsbyImageData
                                            }
                                        }
                                    }
                                    heading
                                    description
                                    link {
                                        url
                                    }
                                }
                            }
                            rightSideButton {
                                link1 {
                                    title
                                    url
                                }
                                link2 {
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