import React, { useEffect } from 'react'
import Aos from 'aos';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { removeTags } from '../../../utils/helpers';

const DreamCards = ({ contentSection }) => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <>
            {contentSection && (
                <section className='dream-card-section overflow-hidden' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                    <div className='container'>
                        <div className='row '>
                            <div className='col tmb-null dmb-45 col-lg-8 mx-auto'>
                                <div className="">
                                    <h1 className='tk-degular fw-semibold col-10 col-lg-12 mx-auto text-center fontSL leadingMX res-fontSX res-leadingXL dmb-25'>{removeTags(contentSection?.heading)}</h1>
                                    <h5 className='fontXX leadingXS res-fontM res-leadingL tk-degular fw-normal text-center tmb-65 dmb-25'>{removeTags(contentSection?.description)}</h5>
                                </div>
                            </div>
                        </div>
                        <div className='row rowX'>
                            {contentSection?.imageBox?.map((item, i) => (
                                <div className='card-bg-images col-lg-6 col-xl-4 tmb-60 dmb-30' key={i}>
                                    <a href={item?.link?.url} className='text-decoration-none text-black'>
                                        <div className='card-bg-image position-relative dmb-25'>
                                            <GatsbyImage image={getImage(item?.background?.localFile)} alt="" className='w-100 h-100 object-cover radiusXX' />
                                            <div className='w-100 d-flex justify-content-center'>
                                                <div className='card-img w-100 position-absolute bottom-0 drop-shadow'>
                                                    <GatsbyImage image={getImage(item?.mainImage?.localFile)} alt="" className='h-100 d-flex justify-content-center'
                                                        imgStyle={{ quality: 100 }} />
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className='fontXM leadingXL res-fontXS res-leadingXM tk-degular fw-medium dmb-10'>{removeTags(item?.heading)}</h4>
                                        <div className='leadingM tk-degular fw-normal fontM text-truncate text-truncate2'>{removeTags(item?.description)}</div>
                                    </a>
                                </div>
                            )
                            )}
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default DreamCards
