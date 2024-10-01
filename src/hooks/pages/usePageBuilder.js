import { useStaticQuery, graphql } from "gatsby";

export const usePageBuilder = () => {
  const data = useStaticQuery(graphql`
    query PageBuilder {
      site {
        siteMetadata {
          title
        }
      }
      allWpPage(sort: { title: ASC }) {
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
                fieldGroupName
                heading
                description
                button {
                  title
                  url
                }
                image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(quality: 90, formats: NO_CHANGE, placeholder: BLURRED)
                    }
                  }
                }
              }
              ... on WpPage_AcfBuilderpage_ContentSection_BlogHeroSection {
                fieldGroupName
                heading
                description
                button {
                  title
                  url
                }
                image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(quality: 90, formats: NO_CHANGE, placeholder: BLURRED)
                    }
                  }
                }
              }
              ... on WpPage_AcfBuilderpage_ContentSection_Spacing {
                fieldGroupName
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
                fieldGroupName
                heading
                description
                imageBox {
                  background {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(quality: 90, formats: NO_CHANGE, placeholder: BLURRED)
                      }
                    }
                  }
                  mainImage {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(quality: 90, formats: NO_CHANGE, placeholder: BLURRED)
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
                fieldGroupName
                items {
                  heading
                  imageTitle {
                    title
                    image {
                      localFile {
                        childImageSharp {
                          gatsbyImageData(quality: 90, formats: NO_CHANGE, placeholder: BLURRED)
                        }
                      }
                    }
                  }
                  rightImage {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(quality: 90, formats: NO_CHANGE, placeholder: BLURRED)
                      }
                    }
                  }
                }
              }
              ... on WpPage_AcfBuilderpage_ContentSection_BuildTeams {
                fieldGroupName
                heading
                description
                buildInnerBox {
                  image {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(quality: 90, formats: NO_CHANGE, placeholder: BLURRED)
                      }
                    }
                  }
                  heading
                  description
                }
              }
              ... on WpPage_AcfBuilderpage_ContentSection_LeftRightImageContent {
                fieldGroupName
                heading
                description
                leftRightImage
                button {
                  title
                  url
                }
                image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(quality: 90, formats: NO_CHANGE, placeholder: BLURRED)
                    }
                  }
                }
              }
              ... on WpPage_AcfBuilderpage_ContentSection_LeftRightAccordion {
                fieldGroupName
                heading
                leftRightImage
                faq {
                  heading
                  description
                  id
                  image {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(quality: 90, formats: NO_CHANGE, placeholder: BLURRED)
                      }
                    }
                  }
                }
                button {
                  title
                  url
                }
              }
              ... on WpPage_AcfBuilderpage_ContentSection_SolutionsForStartups {
                fieldGroupName
                prefix
                heading
                description
                image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(quality: 90, formats: NO_CHANGE, placeholder: BLURRED)
                    }
                  }
                }
              }
              ... on WpPage_AcfBuilderpage_ContentSection_Accordion {
                fieldGroupName
                heading
                accordionList {
                  heading
                  description
                  id
                }
              }
              ... on WpPage_AcfBuilderpage_ContentSection_ReadGetStarted {
                fieldGroupName
                heading
                description
                button {
                  title
                  url
                }
                image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(quality: 90, formats: NO_CHANGE, placeholder: BLURRED)
                    }
                  }
                }
              }
              ... on WpPage_AcfBuilderpage_ContentSection_CollectData {
                fieldGroupName
                heading
                description
                button {
                  title
                  url
                }
                image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(quality: 90, formats: NO_CHANGE, placeholder: BLURRED)
                    }
                  }
                }
              }
              ... on WpPage_AcfBuilderpage_ContentSection_WhereToNext {
                fieldGroupName
                heading
                imageBox {
                  backgroundImage {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(quality: 90, formats: NO_CHANGE, placeholder: BLURRED)
                      }
                    }
                  }
                  mainImage {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(quality: 90, formats: NO_CHANGE, placeholder: BLURRED)
                      }
                    }
                  }
                  heading
                  description
                }
              }
              ... on WpPage_AcfBuilderpage_ContentSection_PrimaryHeroSection {
                fieldGroupName
                prefix
                heading
                description
                button {
                  title
                  url
                }
              }
              ... on WpPage_AcfBuilderpage_ContentSection_PricingTable {
                fieldGroupName
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
                fieldGroupName
                tabsMain {
                  title
                  tabsName
                  decription
                }
              }
              ... on WpPage_AcfBuilderpage_ContentSection_AllPost {
                fieldGroupName
              }
              ... on WpPage_AcfBuilderpage_ContentSection_IframeBlock {
                fieldGroupName
                iframeLink
              }
              ... on WpPage_AcfBuilderpage_ContentSection_PrivacyBlock {
                content
                heading
                fieldGroupName
                prefix
              }
              ... on WpPage_AcfBuilderpage_ContentSection_FeaturePost {
                selectFeaturePost {
                  ... on WpPost {
                    title
                    link
                    content
                    featuredImage {
                      node {
                        mediaItemUrl
                        localFile {
                          childImageSharp {
                            gatsbyImageData
                          }
                        }
                      }
                    }
                    ACF_blogpage {
                      time
                      prefix
                      flexibleContent {
                        ... on WpPost_AcfBlogpage_FlexibleContent_Image {
                          fieldGroupName
                          image {
                            localFile {
                              childImageSharp {
                                gatsbyImageData
                              }
                            }
                            mediaItemUrl
                          }
                        }
                        ... on WpPost_AcfBlogpage_FlexibleContent_Heading {
                          fieldGroupName
                          heading
                        }
                        ... on WpPost_AcfBlogpage_FlexibleContent_Content {
                          content
                          fieldGroupName
                        }
                        ... on WpPost_AcfBlogpage_FlexibleContent_ListView {
                          fieldGroupName
                          lists {
                            list
                            fieldGroupName
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
      }
    }
  `);
  return data;
};
