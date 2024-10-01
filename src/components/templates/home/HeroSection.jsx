import React, { useEffect } from 'react'
import pattern from '../../../assets/svg/home/home-hero-pattern.svg'
import Aos from 'aos';
import BookDemoBtn from '../../common/BookDemoBtn'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { removeTags } from '../../../utils/helpers';

const HeroSection = ({ contentSection }) => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <>
            <div className='spacing tpt-220 dpt-170'></div>
            {contentSection &&
                <section className='position-relative home-hero' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                    <div className='container h-100'>
                        <div className='row h-100 align-items-center'>
                            <div className='col-lg-8 col-xl-5 mx-auto mx-xl-0'>
                                <h1 className='fontMM leadingMX res-fontSM res-leadingSX tk-degular fw-semibold dmb-15'>{removeTags(contentSection?.heading)}</h1>
                                <h5 className='fontXX leadingXX tk-degular fw-normal res-fw-medium dmb-35'>{removeTags(contentSection?.description)}</h5>
                                <div>
                                    <BookDemoBtn
                                        data-bs-toggle={'modal'}
                                        data-bs-target={"#contact_modal"}
                                        title={contentSection?.button?.title}
                                        url={contentSection?.button?.url}
                                    />
                                </div>
                            </div>
                            <div className='hero-bg-img col-md-9 col-lg-7 col-xl-3 h-100 ms-xl-auto mx-auto'>
                                <div className='bgprimary radiusXX h-100 position-absolute p-initial'>
                                    <div className='bg-pattern position-absolute end-0 bottom-0'>
                                        <img src={pattern} alt="" className='w-100 h-100 object-cover' />
                                    </div>
                                    <div className='h-100 w-100 bg-image d-flex align-items-center'>
                                        <GatsbyImage image={getImage(contentSection?.image?.localFile)} alt="" className='w-100 h-100 radiusXL drop-shadow'
                                            imgStyle={{ quality: 100 }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default HeroSection