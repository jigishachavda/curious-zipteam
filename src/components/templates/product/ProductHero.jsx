import React, { useEffect } from 'react'
import pattern1 from '../../../assets/svg/product/product1.svg'
import pattern2 from '../../../assets/svg/product/product2.svg'
import Svg from '../../ui/Svg'
import Aos from 'aos'
import { removeTags } from '../../../utils/helpers'

const ProductHero = ({ contentSection }) => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <>
            {contentSection && (
                <section className='product-hero-section position-relative overflow-hidden bgprimary tpt-250 tpb-120 dpt-210 dpb-210'>
                    <div className='position-absolute pattern-1'>
                        <img src={pattern1} alt="" className='w-100' />
                    </div>
                    <div className='position-absolute pattern-2'>
                        <img src={pattern2} alt="" className='w-100' />
                    </div>
                    <div className="container" data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                        <div className="row">
                            <div className='col-lg-12 col-xl-10 mx-auto'>
                                <h6 className='fontM leadingM tk-degular fw-medium text-white text-center dmb-15'>{contentSection?.prefix}</h6>
                                <h1 className='fontLS leadingLL res-fontMS res-leadingSM tk-degular fw-semibold text-white text-center dmb-15'>{removeTags(contentSection?.heading)}</h1>
                                <h5 className='col-md-11 col-xl-9 mx-auto fontLM leadingXS res-fontM res-leadingL tk-degular fw-normal text-white text-center dmb-125'>
                                    {removeTags(contentSection?.description)}
                                </h5>
                                <div className='d-flex flex-column justify-content-center align-items-center explore-btn'>
                                    <button to={contentSection?.button?.url} className='fontXX leadingL tk-degular fw-medium text-white dmb-10 border-0 bg-transparent'>{contentSection?.button?.title}</button>
                                    <Svg downArrow />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default ProductHero
