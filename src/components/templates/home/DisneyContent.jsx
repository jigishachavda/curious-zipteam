import React, { useEffect } from 'react'
import { usePageBuilder } from '../../../hooks/pages/usePageBuilder';
import Divider from '../../ui/Divider';
import Aos from 'aos';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const DisneyContent = () => {
    const data = usePageBuilder();
    const nodes = data.allWpPage.nodes
    const contentSection = nodes[1].ACF_builderpage.contentSection
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <>
            <section className='disney-content' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-8 pe-lg-4">
                            <h1 className='fontSM leadingSS res-fontXL res-leadingXL tk-degular fw-medium text-center text-lg-start tmb-55 dmb-50'>
                                {contentSection[6]?.heading?.split(' ').map((word, index) => (
                                    <span key={index} className={index === 0 ? 'text-blue' : ''}>
                                        {word}{index !== index.length - 1 ? ' ' : ''}
                                    </span>
                                ))}
                            </h1>
                            <div className='col-10 mx-auto mx-md-0 d-flex align-items-center'>
                                <div className='occasion w-100 h-100 bg-lightgray radiusS d-flex justify-content-center align-items-center'>
                                    <div className='p-2'>
                                        <GatsbyImage image={getImage(contentSection[6]?.imageTitle?.image.localFile)} alt="" />
                                    </div>
                                </div>
                                <h4 className='fontLM leadingXX tk-degular fw-medium ms-2 ms-md-3 pe-7 pe-md-0 '>
                                    {contentSection[6]?.imageTitle?.title?.split(' ').map((word, index) => (
                                        <span key={index} className={index <= 2 ? 'text-blue' : ''}>
                                            {word}{index !== index.length - 1 ? ' ' : ''}
                                        </span>
                                    ))}
                                </h4>
                            </div>
                        </div>
                        <div className="col-4 ps-7 d-none d-lg-block h-100">
                            <div className='disney-img ms-auto'>
                                <GatsbyImage image={getImage(contentSection[6]?.rightImage?.localFile)} alt="" className='w-100 h-100 object-cover' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Divider desktop={contentSection[7].desktop.marginBottom} tablet={contentSection[7].tablet.marginBottom} mobile={contentSection[7].mobile.marginBottom} />
        </>
    )
}

export default DisneyContent
