import React, { useEffect } from 'react'
import { usePageBuilder } from '../../../hooks/pages/usePageBuilder'
import Divider from '../../ui/Divider';
import { removeTags } from '../../../utils/helpers';
import BookDemoBtn from '../../common/BookDemoBtn';
import Aos from 'aos';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const SkillSection = () => {
    const data = usePageBuilder();
    const nodes = data.allWpPage.nodes
    const contentSection = nodes[3]?.ACF_builderpage.contentSection
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <>
            <section className='skill-survey-section' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                <div className="container res-max-w-100 px-p-0 h-100 ">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6 pe-lg-3 h-100 radiusL order-1 order-lg-0">
                            <GatsbyImage image={getImage(contentSection[1]?.image?.localFile)} alt="" className='w-100 h-100 object-cover radiusL no-radius' />
                        </div>
                        <div className="col-lg-6 col-xl-5 ps-lg-4 ms-xl-auto px-p-p tmb-50">
                            <h1 className='fontSM leadingSM res-fontSX res-leadingSX  tk-degular fw-semibold dmb-25'>{contentSection[1].heading}</h1>
                            <h5 className='fontXX leadingXS res-fontM res-leadingL tk-degular fw-normal tmb-25 dmb-40'>
                                {removeTags(contentSection[1].description)}
                            </h5>
                            <BookDemoBtn title={contentSection[1].button.title} url={contentSection[1]?.button.url} data-bs-toggle={'modal'}
                                data-bs-target={"#contact_modal"} />
                        </div>
                    </div>
                </div>
            </section>
            <Divider desktop={contentSection[2]?.desktop?.marginBottom} tablet={contentSection[2]?.tablet?.marginBottom} mobile={contentSection[2]?.mobile?.marginBottom} />
        </>
    )
}

export default SkillSection
