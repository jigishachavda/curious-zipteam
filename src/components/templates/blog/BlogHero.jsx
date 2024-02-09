import React, { useEffect } from 'react'
import { usePageBuilder } from '../../../hooks/pages/usePageBuilder';
import hero from '../../../assets/svg/blog/hero-pattern.svg'
import Divider from '../../ui/Divider';
import Aos from 'aos';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BlogHero = () => {
    const data = usePageBuilder();
    const nodes = data.allWpPage.nodes
    const contentSection = nodes[0].ACF_builderpage.contentSection
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <>
            <section className='first-blog-main dpt-135' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                <div className='container res-max-w-100 px-p-0'>
                    <div className='row'>
                        <div className='col-12 bg-primary no-radius mainblog position-relative radiusL text-decoration-none'>
                            <div className='position-absolute top-0 end-0 z-3'>
                                <img src={hero} />
                            </div>
                            <div className='row'>
                                <div className='col-lg-6 inner-main-blog pe-lg-5'>
                                    <div className='pe-lg-5'>
                                        <h2 className='text-white fontSM leadingSX tk-degular fw-medium res-fontLL res-leadingXM'>{contentSection[0].heading}</h2>
                                        <h4 className='mt-lg-4 mt-2 pt-lg-0 pt-1 text-white fontM leadingL tk-degular fw-normal pe-lg-3 pe-5'>{contentSection[0].description}</h4>
                                        <label className='text-white blog-label fontX d-flex align-items-center p-2 radiusXL tk-degular fw-medium border-white border mt-lg-4 mt-3 lh-1'>
                                            <span className='bg-white me-2 ms-1 d-block rounded-circle rounded-icon'></span>
                                            <h6 className='me-1 '>{contentSection[0].button.title}</h6></label>
                                    </div>
                                </div>
                                <div className='col-lg-6 ps-lg-4 tmt-40'>
                                    <div className='first-blog-img overflow-hidden'>
                                        <GatsbyImage image={getImage(contentSection[0]?.image?.localFile)} className='w-100 h-100 object-cover' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Divider desktop={contentSection[1].desktop.marginBottom} tablet={contentSection[1].tablet.marginBottom} mobile={contentSection[1].mobile.marginBottom} />
        </>
    )
}

export default BlogHero
