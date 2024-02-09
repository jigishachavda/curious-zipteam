import React, { useEffect } from 'react'
import { usePageBuilder } from '../../../hooks/pages/usePageBuilder'
import BookDemoBtn from '../../common/BookDemoBtn';
import Aos from 'aos';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const GetStarted = ({ pageType }) => {
    const data = usePageBuilder();
    const nodes = data.allWpPage.nodes
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    const pageConfig = {
        product: { contentIndex: 3, headingIndex: 9 },
        solution: { contentIndex: 4, headingIndex: 10 },
    };
    const { contentIndex, headingIndex } = pageConfig[pageType];
    const contentSection = nodes[contentIndex]?.ACF_builderpage?.contentSection;

    return (
        <>
            <section className='get-start-section' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                <div className="container containerX res-max-w-100 px-p-0 h-100 ">
                    <div className="row h-100">
                        <div className='get-content bg-primary radiusL no-radius h-100 d-lg-flex flex-row align-items-center justify-content-center '>
                            <div className='col-lg-6 d-flex flex-column  align-items-start justify-content-start tpt-65 tmb-35'>
                                <h1 className='fontSS leadingSS res-fontSX res-leadingSX tk-degular fw-medium text-white dmb-10'>{contentSection?.[headingIndex]?.heading}</h1>
                                <h5 className='fontM leadingL tk-degular fw-normal text-white dmb-25'>{contentSection?.[headingIndex]?.description}</h5>
                                <BookDemoBtn
                                    data-bs-toggle={'modal'}
                                    data-bs-target={"#contact_modal"}
                                    extraClass="btn-border-white"
                                    title={contentSection?.[headingIndex]?.button?.title}
                                    url={contentSection?.[headingIndex]?.button?.url}
                                />
                            </div>
                            <div className='col-lg-6 h-100 d-flex align-items-lg-end justify-content-start justify-content-lg-end'>
                                <GatsbyImage image={getImage(contentSection?.[headingIndex]?.image?.localFile)} alt="" className='get-img drop-shadow w-100 h-100 object-cover bg-lightgray' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GetStarted
