import React, { useEffect } from 'react'
import hero from '../../../assets/svg/blog/hero-pattern.svg'
import Aos from 'aos';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { removeTags } from '../../../utils/helpers';

const BlogHero = ({ contentSection }) => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <>
            <div>{contentSection}</div>
            {contentSection && (
                <>
                    <section className='first-blog-main' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                        <div className='container res-max-w-100 px-p-0'>
                            <div className='col-12 bgprimary no-radius mainblog position-relative radiusL text-decoration-none cursor-pointer'>
                                <div className='position-absolute top-0 end-0 z-3'>
                                    <img src={hero} alt="" />
                                </div>
                                <div className='row'>
                                    <div className='col-lg-6 inner-main-blog pe-lg-5 tmb-50'>
                                        <div className='pe-lg-5'>
                                            <h2 className='text-white fontSM leadingSX tk-degular fw-medium res-fontLL res-leadingXM'>{removeTags(contentSection?.heading)}</h2>
                                            <h4 className='mt-lg-4 mt-2 pt-lg-0 pt-1 text-white fontM leadingL tk-degular fw-normal pe-lg-3 pe-5'>{removeTags(contentSection?.description)}</h4>
                                            <label className='text-white blog-label fontX d-flex align-items-center p-2 radiusXL tk-degular fw-medium border-white border mt-lg-4 mt-3 lh-1'>
                                                <span className='bg-white me-2 ms-1 d-block rounded-circle rounded-icon'></span>
                                                <h6 className='me-1'>{contentSection?.button?.title}</h6></label>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 ps-lg-4'>
                                        <div className='first-blog-img overflow-hidden'>
                                            <GatsbyImage image={getImage(contentSection?.image?.localFile)} className='w-100 h-100 object-cover' alt="" imgStyle={{ quality: 100 }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    )
}

export default BlogHero
