import React, { useEffect } from 'react'
import Aos from 'aos';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { removeTags } from '../../../utils/helpers';

const SolutionHero = ({ contentSection }) => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <>
            <div className='dpt-165'></div>
            {contentSection && (
                <section className='solution-hero-section' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-11 mx-auto">
                                <h6 className='fontM leadingM res-fontS res-leadingS tk-degular fw-medium text-center tmb-15 dmb-25'>{contentSection?.prefix}</h6>
                                <h1 className='fontLX leadingLM res-fontMX res-leadingSM tk-degular fw-semibold text-center tmb-30 dmb-15'>{contentSection?.heading?.split(' ')?.map((word, index) => (
                                    <span key={index} className={index <= 1 ? 'textblue' : ''}>
                                        {word}{index !== index?.length - 1 ? ' ' : ''}
                                    </span>
                                ))}</h1>
                                <h5 className='fontXS leadingXM tk-degular fw-normal text-center dmb-55 d-none d-xl-block'>
                                    {removeTags(contentSection?.description)}
                                </h5>
                                <div>
                                    <GatsbyImage image={getImage(contentSection?.image?.localFile)} alt="" className='w-100 h-100 object-cover radiusXL drop-shadow' imgStyle={{ quality: 100 }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default SolutionHero
