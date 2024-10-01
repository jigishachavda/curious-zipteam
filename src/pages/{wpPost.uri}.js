import React, { useEffect, useLayoutEffect, useState } from 'react'
import Layout from '../layout';
import { setInitialState } from '../utils/helpers';
import Svg from '../components/ui/Svg';
import Aos from 'aos';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet-async';
import { HELPER } from '../services';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import BlogCards from '../components/templates/blog/BlogCards';
import { useBlog } from '../hooks/pages/useBlog';
import BlogImage from '../components/templates/blogSections/BlogImage';
import BlogHeading from '../components/templates/blogSections/BlogHeading';
import BlogContent from '../components/templates/blogSections/BlogContent';
import BlogList from '../components/templates/blogSections/BlogList';

const BlogTemplate = ({ location }) => {
    const data = useBlog();
    let state = setInitialState();

    let postdata = null;
    let slug = null;

    console.log('state', state);


    if (state && state?.post?.node?.ACF_blogpage) {
        postdata = state?.post?.node?.ACF_blogpage
        slug = state?.post?.node?.slug
    } else {
        let _postBlogPageNode = data.allWpPost.edges.find(e => e.node.link === location.pathname)
        postdata = _postBlogPageNode?.node?.ACF_blogpage
        slug = _postBlogPageNode?.slug
        state = {
            post: { ..._postBlogPageNode }
        }

    }

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
    }, [slug]);

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
        data?.allWpCategory?.nodes?.length > 0
            ? data?.allWpCategory?.nodes[0]?.name
            : null;
    const [selectedCategory] = useState(allPostsCategory);
    const [visiblePosts] = useState(3);
    const [animationActive] = useState(false);

    const blogSections = (blogData) => {
        const [key, value] = Object.entries(blogData)[0];
        switch (key) {
            case 'image':
                return <BlogImage data={value} />

            case 'heading':
                return <BlogHeading data={value} />

            case 'content':
                return <BlogContent data={value} />

            case 'lists':
                return <BlogList data={value} />

            default:
                break;
        }
    }

    return (
        <>
            <Layout>
                <Helmet>
                    <title>{state?.post?.node?.seo?.title}</title>
                    <meta name="description" content={state?.post?.node?.seo?.metaDesc} />
                    <meta property="og:title" content={state?.post?.node?.seo?.opengraphTitle} />
                    <meta property="og:description" content={state?.post?.node?.seo?.opengraphDescription} />
                    <meta property="og:image" content={state?.post?.node?.seo?.opengraphImage?.mediaItemUrl} />
                    <meta property="og:url" content={state?.post?.node?.seo?.opengraphUrl} />
                    <meta property="og:type" content="article" />
                </Helmet>
                <section className='blog-open-data dmt-170 dmb-220 tmb-120'>
                    <div className='container containerS'>
                        <div className='row flex-lg-row flex-column-reverse'>
                            <div className='col-lg-2 tmt-50'>
                                <div className='position-sticky sticky-links'>
                                    <Link to='/blog/' className='z-1 text-decoration-none d-lg-inline-block d-none fontXX leadingL res-fontM tk-degular fw-medium textgray fixed-title tmb-25 dmb-90'>Go back</Link>
                                    <div className='fixed-share-button d-lg-block share-social'>
                                        <button className='share-button d-flex bg-shareGray border-0 radiusSX position-relative'>
                                            <span className='fontXX leadingL tk-degular fw-medium'>Share this</span>
                                            <span className='share-btn bgprimary radiusSX d-flex justify-content-center align-items-center ms-2'><Svg shareBtn /></span>
                                            <div className='main-share d-flex align-items-center position-absolute start-0 w-100 justify-content-lg-center p-0 m-0'>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-9 col-xl-8 px-1 me-lg-auto ms-lg-0 mx-auto'>
                                <Link to='/blog/' className='z-1 text-decoration-none p-initial top-0 fontXX leadingL res-fontM tk-degular fw-medium textgray fixed-title d-lg-none'>Go back</Link>
                                {postdata?.prefix && (
                                    <h4 className='text-black tk-degular fw-normal fontXX d-none d-lg-block dmb-30' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">{postdata?.prefix}</h4>
                                )}
                                {state?.post?.node?.title && (
                                    <h1 className='text-black tk-degular fw-semibold fontSM res-fontSX tmb-25 dmb-15 tmt-25' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                                        {state?.post?.node?.title}
                                    </h1>
                                )}
                                {postdata?.time && (
                                    <label className='text-black fontX d-flex tk-degular blog-label fw-medium align-items-center p-2 radiusXL border-grayOne border lh-1 tmb-35 dmb-75' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                                        <span className='bgprimary me-2 ms-1 d-block rounded-circle rounded-icon'></span>
                                        <h6 className='me-1'>{postdata?.time}</h6>
                                    </label>
                                )}
                                {state?.post?.node?.featuredImage && (
                                    <div className='blog-open-img overflow-hidden radiusXX dmt-75 dmb-15' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                                        {state?.post?.node?.featuredImage?.node?.localFile?.childImageSharp ? (
                                            <GatsbyImage image={getImage(state?.post?.node?.featuredImage?.node?.localFile)} className='w-100 h-100 object-cover' alt='' imgStyle={{ quality: 100 }} />
                                        ) : (
                                            <img src={state?.post?.node?.featuredImage?.node?.mediaItemUrl} className='w-100 h-100 object-cover' alt='' />
                                        )}
                                    </div>
                                )}
                                <div className='col-lg-10 mx-auto px-lg-4' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                                    {state?.post?.node?.featuredImage?.node?.caption && (
                                        <div className='text-black opacity-50 tk-degular fw-normal fontM leadingM d-none d-lg-block dmb-60 tmb-30 text-center' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500" dangerouslySetInnerHTML={{ __html: state?.post?.node?.featuredImage?.node?.caption }}></div>
                                    )}
                                    {postdata?.flexibleContent && postdata?.flexibleContent.map((element, i) => (
                                        <div key={i}>
                                            {blogSections(element)}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='container'>
                    <div className='row'>
                        <div className='d-flex justify-content-between mmb-40 dmb-60'>
                            <h1 className='fontSL leadingMX res-fontSM res-leadingSS tk-degular fw-semibold'>Keep Reading</h1>
                            <a href='/blog/' onClick={goTopPage} className='text-decoration-none tk-degular fontXX leadingXX text-white d-md-flex align-items-center justify-content-center btnA btnX rounded-5 d-none'>View all posts</a>
                        </div>
                        <BlogCards
                            BlogCards={BlogCardsData}
                            selectedCategory={selectedCategory}
                            visiblePosts={visiblePosts}
                            animationActive={animationActive}
                        />
                        <div className='d-flex align-items-center justify-content-center mmb-60'>
                            <a href='/blog/' className='text-decoration-none tk-degular fontXX leadingXX text-white d-inline-flex align-items-center justify-content-center btnA btnX rounded-5 d-md-none'>View all posts</a>
                        </div>
                    </div>
                </div>
            </Layout >
        </>
    )
}

export default BlogTemplate
