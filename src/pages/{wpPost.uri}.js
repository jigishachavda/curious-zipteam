import React, { useEffect, useLayoutEffect, useState } from 'react'
import Layout from '../layout';
import { removeTags, setInitialState } from '../utils/helpers';
import Svg from '../components/ui/Svg';
import Aos from 'aos';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { HELPER } from '../services';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import BlogCards from '../components/templates/blog/BlogCards';
import { useBlog } from '../hooks/pages/useBlog';
import Divider from '../components/ui/Divider';
import { usePageBuilder } from '../hooks/pages/usePageBuilder';

const BlogTemplate = () => {
    const data = useBlog();
    const data2 = usePageBuilder();
    const nodes = data2.allWpPage.nodes
    const contentSection = nodes[0].ACF_builderpage.contentSection
    let state = setInitialState();
    const postdata = state?.post?.node.ACF_blogpage
    const slug = state?.post?.slug

    const goTopPage = () => {
        if (typeof window !== 'undefined') {
            const intervalId = setInterval(function () {
                window.scrollTo(0, 0);
            }, 100);
            setTimeout(() => {
                clearInterval(intervalId);
            }, 100);
        }
    };

    useEffect(() => {
        Aos.init();
        Aos.refresh();

        HELPER.addSlugToBody(slug);
    }, []);

    useLayoutEffect(() => {
        // main-share
        setTimeout(() => {
            if (typeof window !== 'undefined') {
                let mainShereElement = document.querySelector('.main-share');
                let socialLinksElement = document.querySelector('ul.ass_floating.ass_flat');

                if (mainShereElement && socialLinksElement) {
                    mainShereElement.appendChild(socialLinksElement);
                }
            }
        }, 1000);

        return () => {
            if (typeof window !== 'undefined') {
                let socialLinksElement = document.querySelector('ul.ass_floating.ass_flat');
                if (socialLinksElement) {
                    document.querySelector('body').appendChild(socialLinksElement);
                }
            }
        }
    }, []);

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    const BlogCardsData = data.allWpPost.edges?.map((_blogPost, i) => ({
        ..._blogPost,
        _tag_id: i + 1,
    }));


    const allPostsCategory =
        data.allWpCategory.nodes.length > 0
            ? data.allWpCategory.nodes[0].name
            : null;
    const [selectedCategory, setSelectedCategory] = useState(allPostsCategory);
    const [visiblePosts, setVisiblePosts] = useState(3);
    const [animationActive, setAnimationActive] = useState(false);

    return (
        <>
            <Layout>
                <Helmet>
                    <title>{state?.post?.node.seo.title}</title>
                    <meta name="description" content={state?.post?.node.seo.metaDesc} />
                </Helmet>
                <section className='blog-open-data dmt-170'>
                    <div className='container containerS'>
                        <div className='row flex-lg-row  flex-column-reverse'>
                            <div className='col-lg-2 tmt-50'>
                                <Link to='/blog-post/' className='z-1 text-decoration-none d-lg-inline-block d-none position-sticky p-initial top-0 fontXX leadingL res-fontM tk-degular fw-medium text-gray fixed-title tmb-25 dmb-90'>Go back</Link>
                                <div className='position-sticky top-0 fixed-share-button d-lg-block share-social'>
                                    <button className='share-button d-flex bg-shareGray border-0 radiusSX position-relative'>
                                        <span className='fontXX leadingL tk-degular fw-medium'>Share this</span>
                                        <span className='share-btn bg-primary radiusSX d-flex justify-content-center align-items-center ms-2'><Svg shareBtn /></span>
                                        <div className='main-share d-flex align-items-center position-absolute start-0 w-100 justify-content-lg-center p-0 m-0'>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className='col-lg-9 col-xl-8 px-1 me-lg-auto ms-lg-0 mx-auto'>
                                <Link to='/blog-post/' className='z-1 text-decoration-none position-sticky p-initial top-0 fontXX leadingL res-fontM tk-degular fw-medium text-gray fixed-title d-lg-none'>Go back</Link>
                                <h4 className='text-black tk-degular fw-normal fontXX d-none d-lg-block dmb-30' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">{postdata?.prefix}</h4>
                                <h1 className='text-black tk-degular fw-semibold fontSM res-fontSX tmb-25 dmb-15 tmt-25' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                                    {postdata?.flexibleContent[0]?.heading}
                                </h1>
                                <label className='text-black fontX d-flex tk-degular blog-label fw-medium align-items-center p-2 radiusXL border-grayOne border lh-1 tmb-35 dmb-75' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                                    <span className='bg-primary me-2 ms-1 d-block rounded-circle rounded-icon'></span>
                                    <h6 className='me-1'>{postdata?.time}</h6>
                                </label>
                                <div className='blog-open-img overflow-hidden radiusXX dmt-75 dmb-60' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                                    <GatsbyImage image={getImage(postdata?.flexibleContent[1]?.image?.localFile)} className='w-100 h-100 object-cover' alt='' />
                                </div>

                                <div className='col-lg-10 mx-auto px-lg-4' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                                    <div className='tpb-30 dpb-25'>
                                        <h4 className='tk-degular fw-medium text-black fontXS res-fontLM res-leadingXS leadingXM tmb-35 dmb-25'>
                                            {removeTags(postdata?.flexibleContent[2]?.content)}
                                        </h4>
                                        <h6 className='tk-degular text-black fw-normal fontXX leadingXS tpb-35 dpb-25'
                                            dangerouslySetInnerHTML={{ __html: postdata?.flexibleContent[3]?.lists[0]?.list?.replace(/<div/g, "<div className='dmb-25'").replace(/&nbsp;/g, '') }}
                                        >
                                        </h6>
                                        <div className='tk-degular text-black fw-normal fontXX leadingXS dmb-25' dangerouslySetInnerHTML={{
                                            __html: postdata?.flexibleContent[3]?.lists[1]?.list?.replace(
                                                /<div(?!.*?class=['"])/,
                                                "<div class='tmb-30 dmb-25 fontXS fw-medium'"
                                            ).replace(
                                                /(<\/?div(?! class)(.*?)>)/g,
                                                (match, p1) => {
                                                    return p1.startsWith('<div') ? `<div class='tmb-30 dmb-25'>` : `</div>`;
                                                }
                                            ).replace(
                                                /&nbsp;/g,
                                                ''
                                            )
                                        }}></div>
                                    </div>
                                    <div className='tpb-60 dpb-45'>
                                        <div className='open-blog-images radiusXL overflow-hidden'>
                                            <img src={postdata?.flexibleContent[4]?.image?.mediaItemUrl} className='w-100 h-100 object-cover' alt='' />
                                        </div>
                                    </div>
                                    <div className='tpb-15 dpb-25'>
                                        <h6 className='tk-degular text-black fw-normal fontXX leadingXS'
                                            dangerouslySetInnerHTML={{
                                                __html: postdata?.flexibleContent[5]?.lists[0]?.list?.replace(
                                                    /<div(?!.*?class=['"])/,
                                                    "<div class='tmb-30 dmb-25 fontXS fw-medium'"
                                                ).replace(
                                                    /(<\/?div(?! class)(.*?)>)/g,
                                                    (match, p1) => {
                                                        return p1.startsWith('<div') ? `<div class='tmb-30 dmb-25'>` : `</div>`;
                                                    }
                                                ).replace(
                                                    /<ul/g,
                                                    "<ul class='ps-4'"
                                                ).replace(
                                                    /<li(?!.*?class=['"])/g,
                                                    "<li class='ps-2 dmb-20'"
                                                ).replace(
                                                    /&nbsp;/g,
                                                    ''
                                                )
                                            }}
                                        >
                                        </h6>
                                    </div>
                                    <div className=''>
                                        <div className='tk-degular text-black fw-normal fontXX leadingXS' dangerouslySetInnerHTML={{
                                            __html: postdata?.flexibleContent[5]?.lists[1]?.list?.replace(
                                                /<div(?!.*?class=['"])/,
                                                "<h5 class='tmb-30 dmb-25 fontXS fw-medium'"
                                            ).replace(
                                                /(<\/?div(?! class)(.*?)>)/g,
                                                (match, p1) => {
                                                    return p1.startsWith('<div') ? `<div class='tmb-30 fontXX fw-medium dmt-25'>` : `</div>`;
                                                }
                                            ).replace(
                                                /&nbsp;/g,
                                                ''
                                            )
                                        }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Divider desktop={contentSection[3].desktop.marginBottom} tablet={contentSection[3].tablet.marginBottom} mobile={contentSection[3].mobile.marginBottom} />
                <div className='container'>
                    <div className='row'>
                        <div className='d-flex justify-content-between mmb-40 dmb-60'>
                            <h1 className='fontSL leadingMX res-fontSM res-leadingSS tk-degular fw-semibold'>{contentSection[4].heading}</h1>
                            <a href='/blog-post/' onClick={goTopPage} className='tk-degular fontXX leadingXX text-white d-md-flex align-items-center justify-content-center btn btnX rounded-5 d-none'>View all posts</a>
                            </div>
                        <BlogCards
                            BlogCards={BlogCardsData}
                            selectedCategory={selectedCategory}
                            visiblePosts={visiblePosts}
                            animationActive={animationActive}
                        />
                        <div className='d-flex align-items-center justify-content-center mmb-60'>
                            <a href='/blog-post/' className='tk-degular fontXX leadingXX text-white d-flex align-items-center justify-content-center btn btnX rounded-5 d-md-none'>View all posts</a>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default BlogTemplate
