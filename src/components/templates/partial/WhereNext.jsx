import React, { useEffect } from 'react';
import { usePageBuilder } from '../../../hooks/pages/usePageBuilder';
import Aos from 'aos';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const WhereNext = ({ pageType }) => {
    const data = usePageBuilder();
    const nodes = data.allWpPage.nodes
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);
    const pageConfig = {
        product: { contentIndex: 3, headingIndex: 11 },
        solution: { contentIndex: 4, headingIndex: 12 },
    };
    const { contentIndex, headingIndex } = pageConfig[pageType];
    const contentSection = nodes[contentIndex]?.ACF_builderpage?.contentSection;

    return (
        <section className='where-next-section solution-team h-100 d-lg-flex justify-content-lg-center align-items-lg-center position-relative z-1 dpt-200 dpb-165 tpt-55' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
            <div className="container containerX">
                <h1 className='fontSS leadingSS tk-degular fw-semibold text-center tmb-45 dmb-70'>{contentSection?.[headingIndex]?.heading}</h1>
                <div className="row rowS">
                    {contentSection?.[headingIndex]?.imageBox?.map((item, i) => (
                        <div className='col-lg-6 where-cards tmb-60' key={i}>
                            <div className='where-card position-relative dmb-25'>
                                <GatsbyImage image={getImage(item?.backgroundImage?.localFile)} alt="" className='w-100 h-100 object-cover radiusXX' />
                                <div className='where-img w-100 position-absolute bottom-0 drop-shadow d-flex justify-content-center'>
                                    <GatsbyImage image={getImage(item?.mainImage?.localFile)} alt="" className='W-100 h-100 d-flex justify-content-center' />
                                </div>
                            </div>
                            <h4 className='fontXL leadingSX res-fontXS res-leadingXM tk-degular fw-medium tmb-10 dmb-15'>{item?.heading}</h4>
                            <span className='fontM leadingM tk-degular fw-normal'>{item?.description}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhereNext
