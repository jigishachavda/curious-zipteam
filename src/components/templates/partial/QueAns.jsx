import React, { useEffect } from 'react'
import { usePageBuilder } from '../../../hooks/pages/usePageBuilder';
import Divider from '../../ui/Divider';
import { removeTags } from '../../../utils/helpers';
import Aos from 'aos';

const   QueAns = ({ accordionId, pageType }) => {
    const data = usePageBuilder();
    const nodes = data.allWpPage.nodes
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    const pageConfig = {
        pricing: { contentIndex: 2, headingIndex: 2, marginIndex: 3 },
        product: { contentIndex: 3, headingIndex: 7, marginIndex: 8 },
        solution: { contentIndex: 4, headingIndex: 8, marginIndex: 9 }
    };

    const { contentIndex, headingIndex, marginIndex } = pageConfig[pageType];
    const contentSection = nodes[contentIndex]?.ACF_builderpage?.contentSection;

    return (
        <>
            <section className='que-ans-section' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                <div className="container containerX">
                    <div className="row">
                        <div className="col-xl-10 px-lg-4 mx-auto">
                            <h1 className='col-8 col-md-12 mx-auto fontMX leadingMS res-fontSX res-leadingXL text-center tk-degular fw-semibold tmb-25 dmb-60'>{contentSection?.[headingIndex]?.heading?.split(' ').map((word, index) => (
                                <span key={index} className={index >= 2 ? 'text-blue' : ''}>
                                    {word}{index !== index.length - 1 ? ' ' : ''}
                                </span>
                            ))} </h1>
                            <div className="accordion" id={accordionId}>
                                {contentSection?.[headingIndex]?.accordionList?.map((item, i) => (
                                    <div className={`accordion-item dmb-15 ${i === 0 ? 'show' : ''}`} key={i}>
                                        <h2 className="accordion-header">
                                            <button className="accordion-button fontXM leadingXM res-fontLM res-leadingXX tk-degular fw-medium" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${item.id}`} aria-expanded={i === 0 ? 'true' : 'false'} aria-controls={`panelsStayOpen-collapse${item.id}`}>
                                                {item?.heading}
                                            </button>
                                        </h2>
                                        <div id={`panelsStayOpen-collapse${item.id}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent={`#${accordionId}`}>
                                            <div className="accordion-body fontXX leadingXS res-fontM res-leadingL tk-degular fw-normal">
                                                {removeTags(item?.description)}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Divider desktop={contentSection?.[marginIndex]?.desktop?.marginBottom} tablet={contentSection?.[marginIndex]?.tablet?.marginBottom} mobile={contentSection?.[marginIndex]?.mobile?.marginBottom} />
        </>
    )
}

export default QueAns
