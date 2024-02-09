import React, { useEffect } from 'react'
import { usePageBuilder } from '../../../hooks/pages/usePageBuilder';
import Divider from '../../ui/Divider';
import Aos from 'aos';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const SolutionHero = () => {
    const data = usePageBuilder();
    const nodes = data.allWpPage.nodes
    const contentSection = nodes[4].ACF_builderpage.contentSection
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <>
            <div className='dpt-165'></div>
            <section className='solution-hero-section' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-11 mx-auto">
                            <h6 className='fontM leadingM res-fontS res-leadingS tk-degular fw-medium text-center tmb-15 dmb-25'>{contentSection[0]?.prefix}</h6>
                            <h1 className='fontLX leadingML res-fontMX res-leadingSM tk-degular fw-semibold text-center tmb-30 dmb-15'>{contentSection[0]?.heading?.split(' ').map((word, index) => (
                                <span key={index} className={index <= 1 ? 'text-blue' : ''}>
                                    {word}{index !== index.length - 1 ? ' ' : ''}
                                </span>
                            ))}</h1>
                            <h5 className='fontXS leadingXM tk-degular fw-normal text-center dmb-55 d-none d-xl-block'>
                                {contentSection[0]?.description}
                            </h5>
                            <div>
                                <GatsbyImage image={getImage(contentSection[0]?.image?.localFile)} alt="" className='w-100 h-100 object-cover radiusXL drop-shadow' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Divider desktop={contentSection[1].desktop?.marginBottom} tablet={contentSection[1].tablet?.marginBottom} mobile={contentSection[1].mobile?.marginBottom} />
        </>
    )
}

export default SolutionHero
