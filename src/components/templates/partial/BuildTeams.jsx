import React, { useEffect } from 'react'
import { usePageBuilder } from '../../../hooks/pages/usePageBuilder';
import Divider from '../../ui/Divider';
import Aos from 'aos';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BuildTeams = ({ isIndexPage, pageType }) => {
    const data = usePageBuilder();
    const nodes = data.allWpPage.nodes
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    const pageConfig = {
        index: { contentIndex: 1, headingIndex: 8, marginIndex: 9 },
        solution: { contentIndex: 4, headingIndex: 2, marginIndex: 3 },
    };
    const { contentIndex, headingIndex, marginIndex } = pageConfig[pageType];
    const contentSection = nodes[contentIndex]?.ACF_builderpage.contentSection;

    return (
        <>
            <section className={`build-team-section ${isIndexPage ? 'build-team mpt-70 tpt-110 dpt-150' : 'solution-team dpb-105 tpt-55'} `} data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                <div className="container">
                    <div className='col-xl-8 mx-auto tmb-25 dmb-55'>
                        <h1 className='col-9 col-md-5 col-xl-12 mx-auto fontSL leadingMX res-fontSX res-leadingXL tk-degular text-center fw-semibold dmb-25'>{contentSection?.[headingIndex]?.heading}</h1>
                        <h5 className='fontXX leadingXS res-fontM res-leadingL tk-degular fw-normal text-center dmb-25'>{contentSection?.[headingIndex]?.description}</h5>
                    </div>
                    <div className="row rowB">
                        {contentSection?.[headingIndex]?.buildInnerBox?.map((item, i) => (
                            <div className='col-lg-6 col-xl-4 team-cards tmb-25 dmb-30' key={i}>
                                <div className={`bg-white h-100 radiusL ${isIndexPage ? 'team-card' : 'product-team-card '}`}>
                                    <div className='team-img d-flex align-items-center dmb-25'>
                                        <GatsbyImage image={getImage(item.image.localFile)} alt="" />
                                    </div>
                                    <h4 className='fontXM leadingXL tk-degular fw-medium dmb-10'>{item.heading}</h4>
                                    <span className='fontM leadingL tk-degular fw-normal'>{item.description}</span>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>
            </section>
            <Divider desktop={contentSection?.[marginIndex]?.desktop?.marginBottom} tablet={contentSection?.[marginIndex]?.tablet?.marginBottom} mobile={contentSection?.[marginIndex]?.mobile?.marginBottom} />
        </>
    )
}

export default BuildTeams
