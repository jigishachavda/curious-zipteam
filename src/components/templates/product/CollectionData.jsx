import React, { useEffect } from 'react'
import { usePageBuilder } from '../../../hooks/pages/usePageBuilder'
import Divider from '../../ui/Divider'
import BookDemoBtn from '../../common/BookDemoBtn'
import Aos from 'aos'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const CollectionData = () => {
    const data = usePageBuilder();
    const nodes = data.allWpPage.nodes
    const contentSection = nodes[3]?.ACF_builderpage.contentSection
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <>
            <section className='collection-section' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                <div className="container res-max-w-100 px-p-0 h-100">
                    <div className="row h-100">
                        <div className='collect-data radiusL bg-purple no-radius h-100 d-lg-flex flex-row align-items-center justify-content-center'>
                            <div className="col-lg-5 col-xl-4 d-flex flex-column align-items-start justify-content-start me-lg-auto text-white tpt-65 tmb-65">
                                <h1 className='fontSM leadingSM tk-degular fw-medium dmb-15'>{contentSection[5].heading}</h1>
                                <h5 className='fontM leadingL tk-degular fw-normal dmb-30'>
                                    {contentSection[5].description}
                                </h5>
                                <BookDemoBtn
                                    data-bs-toggle={'modal'}
                                    data-bs-target={"#contact_modal"}
                                    extraClass="btn-border-white"
                                    title={contentSection[5]?.button?.title}
                                    url={contentSection[5]?.button?.url}
                                />
                            </div>
                            <div className="col-lg-7 h-100 d-flex align-items-lg-end justify-content-start justify-content-lg-end">
                                <GatsbyImage image={getImage(contentSection[5]?.image?.localFile)} alt="" className='collect-img w-100 h-100 object-cover drop-shadow' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Divider desktop={contentSection[6]?.desktop?.marginBottom} tablet={contentSection[6]?.tablet?.marginBottom} mobile={contentSection[6]?.mobile?.marginBottom} />
        </>
    )
}

export default CollectionData
