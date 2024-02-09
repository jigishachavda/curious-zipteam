import { useStaticQuery, graphql } from "gatsby";

export const usePageBuilder = () => {
    const data = useStaticQuery(graphql`
        query PageBuilder {
            site {
                siteMetadata {
                  title
                }
            }
            allWpPage(sort: {title: ASC})  {
                edges {
                    node {
                        seo {
                            title
                            metaDesc
                        }
                    }
                }
                nodes {
                    slug
                    ACF_headerColor {
                        headerColor
                    }
                    title
                    ACF_builderpage {
                        contentSection {
                            ... on WpPage_AcfBuilderpage_ContentSection_HeroSection {
                                heading
                                description
                                button {
                                    title
                                    url
                                }
                                image {
                                    localFile {
                                        childImageSharp {
                                           gatsbyImageData  
                                        }
                                    }
                                }
                            }
                            ... on WpPage_AcfBuilderpage_ContentSection_Spacing {
                                desktop {
                                    marginBottom
                                }
                                tablet {
                                    marginBottom
                                }
                                mobile {
                                    marginBottom
                                }
                            }
                            ... on WpPage_AcfBuilderpage_ContentSection_MakeDream {
                                heading
                                description
                                imageBox {
                                    background {
                                        localFile {
                                            childImageSharp {
                                                gatsbyImageData
                                            }
                                        }
                                    }
                                    mainImage {
                                        localFile {
                                            childImageSharp {
                                                gatsbyImageData
                                            }
                                        }
                                    }
                                    heading
                                    description
                                    link {
                                        title
                                        url
                                    }
                                }
                            }
                            ... on WpPage_AcfBuilderpage_ContentSection_ZipteamSection {
                                heading
                                imageTitle {
                                    title
                                    image {
                                        localFile {
                                            childImageSharp {
                                                gatsbyImageData
                                            }
                                        }
                                    }
                                }
                                rightImage {
                                    localFile {
                                        childImageSharp {
                                            gatsbyImageData
                                        }
                                    }
                                }
                            }
                            ... on WpPage_AcfBuilderpage_ContentSection_BuildTeams {
                                heading
                                description
                                buildInnerBox {
                                    image {
                                        localFile {
                                            childImageSharp {
                                                gatsbyImageData
                                            }
                                        }
                                    }
                                    heading
                                    description
                                }
                            }
                            ... on WpPage_AcfBuilderpage_ContentSection_LeftRightImageContent {
                                heading
                                description
                                descriptionFaq
                                faq {
                                    heading
                                    description
                                    id
                                }
                                button {
                                    title
                                    url
                                }
                                image {
                                    localFile {
                                        childImageSharp {
                                            gatsbyImageData
                                        }
                                    }
                                }
                            }
                            ... on WpPage_AcfBuilderpage_ContentSection_SolutionsForStartups {
                                prefix
                                heading
                                description
                                image {
                                    localFile {
                                        childImageSharp {
                                            gatsbyImageData
                                        }
                                    }
                                }
                            }
                            ... on WpPage_AcfBuilderpage_ContentSection_Accordion {
                                heading
                                accordionList {
                                    heading
                                    description
                                    id
                                }
                            }
                            ... on WpPage_AcfBuilderpage_ContentSection_ReadGetStarted {
                                heading
                                description
                                button {
                                    title
                                    url
                                }
                                image {
                                    localFile {
                                        childImageSharp {
                                            gatsbyImageData
                                        }
                                    }
                                }
                            }
                            ... on WpPage_AcfBuilderpage_ContentSection_WhereToNext {
                                heading
                                imageBox {
                                    backgroundImage {
                                        localFile {
                                            childImageSharp {
                                                gatsbyImageData
                                            }
                                        }
                                    }
                                    mainImage {
                                        localFile {
                                            childImageSharp {
                                                gatsbyImageData
                                            }
                                        }
                                    }
                                    heading
                                    description
                                }
                            }
                            ... on WpPage_AcfBuilderpage_ContentSection_PrimaryHeroSection {
                                prefix
                                heading
                                description
                                button {
                                    title
                                    url
                                }
                            }
                            ... on WpPage_AcfBuilderpage_ContentSection_PricingTable {
                                prefix
                                heading
                                description
                                freeTable {
                                    heading
                                    price
                                    description
                                    offerList {
                                        list
                                    }
                                    button {
                                        title
                                        url
                                    }
                                }
                                standardTable {
                                    heading
                                    price
                                    description
                                    offerList {
                                        list
                                    }
                                    button {
                                        title
                                        url
                                    }
                                }
                                enterpriseTable {
                                    heading
                                    price
                                    description
                                    offerList {
                                        list
                                    }
                                    button {
                                        title
                                        url
                                    }
                                }
                            }
                            ... on WpPage_AcfBuilderpage_ContentSection_TabSection {
                                tabsMain {
                                    title
                                    tabsName
                                    decription
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