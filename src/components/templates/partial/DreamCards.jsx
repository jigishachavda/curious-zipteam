import React, { useEffect } from 'react'
import { usePageBuilder } from '../../../hooks/pages/usePageBuilder';
import Divider from '../../ui/Divider';
import Aos from 'aos';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const DreamCards = ({ pageType, isIndexPage, extraClass }) => {
    const data = usePageBuilder();
    const nodes = data.allWpPage.nodes;
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    const pageConfig = {
        index: { contentIndex: 1, headingIndex: 2, paddingClass: 'dpb-165 tpb-95 mpb-80' },
        pricing: { contentIndex: 2, headingIndex: 4, paddingClass: 'dpb-180 tpb-130 mpb-80' },
    };
    const { contentIndex, headingIndex, paddingClass: pageExtraClass } = pageConfig[pageType];
    const contentSection = nodes[contentIndex]?.ACF_builderpage.contentSection;

    return (
        <>
            <section className={`dream-card-section ${pageExtraClass} ${extraClass}`} data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                <div className='container'>
                    <div className='row '>
                        <div className='col tmb-null dmb-45 col-lg-8 mx-auto'>
                            <div className="">
                                <h1 className='tk-degular fw-semibold col-10 col-lg-12 mx-auto text-center fontSL leadingMX res-fontSX res-leadingXL dmb-25'>{contentSection?.[headingIndex]?.heading}</h1>
                                <h5 className='fontXX leadingXS res-fontM res-leadingL tk-degular fw-normal text-center tmb-65 dmb-25'>{contentSection?.[headingIndex]?.description}</h5>
                            </div>
                        </div>
                    </div>
                    <div className='row rowX'>
                        {contentSection?.[headingIndex]?.imageBox?.map((item, i) => (
                            <div className='card-bg-images col-lg-6 col-xl-4 tmb-60 dmb-30' key={i}>
                                <a href={item?.link?.url} className='text-decoration-none text-black'>
                                    <div className='card-bg-image position-relative dmb-25'>
                                        <GatsbyImage image={getImage(item?.background?.localFile)} alt="" className='w-100 h-100 object-cover radiusXX' />
                                        <div className='w-100 d-flex justify-content-center'>
                                            <div className='card-img w-100 position-absolute bottom-0 drop-shadow'>
                                                <GatsbyImage image={getImage(item?.mainImage?.localFile)} alt="" className='h-100 d-flex justify-content-center' />
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className='fontXM leadingXL res-fontXS res-leadingXM tk-degular fw-medium dmb-10'>{item.heading}</h4>
                                    <span className='leadingM tk-degular fw-normal fontM'>{item.description}</span>
                                </a>
                            </div>
                        )
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default DreamCards
