import React, { useEffect } from 'react'
import { usePageBuilder } from '../../../hooks/pages/usePageBuilder'
import Divider from '../../ui/Divider';
import { removeTags } from '../../../utils/helpers';
import BookDemoBtn from '../../common/BookDemoBtn';
import Aos from 'aos';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const SkillManagement = ({ isIndexPage, pageType, accordionId }) => {
    const data = usePageBuilder();
    const nodes = data.allWpPage.nodes
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    const pageConfig = {
        product: { contentIndex: 3, headingIndex: 3, marginIndex: 4 },
        solution: { contentIndex: 4, headingIndex: 6, marginIndex: 7 },
    };
    const { contentIndex, headingIndex, marginIndex } = pageConfig[pageType];
    const contentSection = nodes[contentIndex]?.ACF_builderpage.contentSection;

    return (
        <>
            <section className='skill-section' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                <div className="container res-max-w-100 px-p-0 h-100">
                    <div className="row h-100 align-items-center">
                        <div className={`col-lg-6 px-p-p ${isIndexPage ? 'order-1 order-lg-0' : 'order-0'}`}>
                            <div className='col-lg-11 pe-lg-4'>
                                <h1 className='fontSM leadingSS res-fontSX res-leadingXL tk-degular fw-semibold dmb-25'>{contentSection?.[headingIndex]?.heading}</h1>
                                <div className="accordion dmb-35" id={accordionId}>
                                    {contentSection?.[headingIndex]?.faq?.map((item, i) => (
                                        <div className={`accordion-item dmb-10 ${i === 0 ? 'show' : ''}`} key={i}>
                                            <h2 className="accordion-header">
                                                <button className="accordion-button fontXS leadingXM res-leadingXX res-fontLM tk-degular fw-medium" type="button" data-bs-toggle="collapse" data-bs-target={`#skill-collapse${item.id}`} aria-expanded={i === 0 ? 'true' : 'false'} aria-controls={`skill-collapse${item.id}`}>
                                                    {item?.heading}
                                                </button>
                                            </h2>
                                            <div id={`skill-collapse${item.id}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent={`#${accordionId}`}>
                                                <div className="accordion-body fontXX leadingXS res-fontM res-leadingL tk-degular fw-normal">
                                                    {removeTags(item?.description)}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <BookDemoBtn
                                    data-bs-toggle={'modal'}
                                    data-bs-target={"#contact_modal"}
                                    title={contentSection?.[headingIndex]?.button?.title}
                                    url={contentSection?.[headingIndex]?.button?.url}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={`skill-img h-100 ms-auto res-w-100 radiusL no-radius overflow-hidden ${isIndexPage ? 'tmb-30' : 'tmt-45'} `}>
                                <GatsbyImage image={getImage(contentSection?.[headingIndex]?.image?.localFile)} alt="" className='w-100 h-100 object-cover' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Divider desktop={contentSection?.[marginIndex]?.desktop?.marginBottom} tablet={contentSection?.[marginIndex]?.tablet?.marginBottom} mobile={contentSection?.[marginIndex]?.mobile?.marginBottom} />
        </>
    )
}

export default SkillManagement
