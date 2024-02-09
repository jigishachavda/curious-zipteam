import React, { useEffect } from 'react'
import pattern from '../../../assets/svg/home/home-hero-pattern.svg'
import { usePageBuilder } from '../../../hooks/pages/usePageBuilder'
import Divider from '../../ui/Divider'
import Aos from 'aos';
import BookDemoBtn from '../../common/BookDemoBtn'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const HeroSection = () => {
    const data = usePageBuilder();
    const nodes = data.allWpPage.nodes
    const contentSection = nodes[1].ACF_builderpage.contentSection
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <>
            <div className='spacing tpt-220 dpt-170'></div>
            <section className='home-hero position-relative' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                <div className='container h-100'>
                    <div className='row align-items-center h-100'>
                        <div className="col-lg-7 col-xl-5 mx-auto mx-xl-0">
                            <h1 className='fontMM leadingMX res-fontSM res-leadingSX tk-degular fw-semibold dmb-15'>{contentSection[0]?.heading}</h1>
                            <h5 className='fontXX leadingXX tk-degular fw-normal res-fw-medium dmb-35'>{contentSection[0]?.description}</h5>
                            <div>
                                <BookDemoBtn
                                    data-bs-toggle={'modal'}
                                    data-bs-target={"#contact_modal"}
                                    title={contentSection[0]?.button?.title}
                                    url={contentSection[0]?.button?.url}
                                />
                            </div>
                        </div>
                        <div className='hero-bg-img col-md-9 col-lg-7 col-xl-3 h-100 ms-xl-auto mx-auto'>
                            <div className='bg-primary radiusXX h-100 position-absolute p-xl-initial'>
                                <div className='bg-pattern position-absolute end-0 bottom-0'>
                                    <img src={pattern} alt="" className='w-100 h-100 object-cover' />
                                </div>
                                <div className='h-100 w-100 bg-image d-flex align-items-center'>
                                    <GatsbyImage image={getImage(contentSection[0]?.image?.localFile)} alt="" className='w-100 h-100 radiusXL drop-shadow' />
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

export default HeroSection