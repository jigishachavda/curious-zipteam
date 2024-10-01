import React, { useEffect } from 'react'
import BookDemoBtn from '../../common/BookDemoBtn';
import Svg from '../../ui/Svg';
import Aos from 'aos';
import { removeTags } from '../../../utils/helpers';

const PricingTables = ({ contentSection }) => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <>
            <div className='dpb-170'></div>
            {contentSection && (
                <section className='solution-team tpb-45 dpb-80'>
                    <div className='container'>
                        <div className='row rowB'>
                            <div className='col-lg-12 dmb-65' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                                <div className='col-lg-8 mx-auto text-center'>
                                    <h5 className='fontM leadingL tk-degular fw-medium text-center dmb-15'>{contentSection?.prefix}</h5>
                                    <h3 className='tk-degular fw-semibold text-black fontMS leadingSM'>
                                        {contentSection?.heading?.split(' ')?.map((word, index) => (
                                            <span key={index} className={index === 0 ? 'textblue res-w-100 d-inline-block me-1' : ''}>
                                                {word}{index !== index?.length - 1 ? ' ' : ''}
                                            </span>
                                        ))}
                                    </h3>
                                    <h6 className='mt-4 tk-degular fw-medium text-black fontXX leadingXS'>
                                        {removeTags(contentSection?.description)}
                                    </h6>
                                </div>
                            </div>
                            <div className='col-lg-4 tmb-35' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                                <div className='radiusL single-price bg-white'>
                                    <h3 className='tk-degular fw-medium fontSM lh-1 text-capitalize'>{contentSection?.freeTable?.heading}</h3>
                                    <h6 className='tk-degular fw-medium fontLM mt-2 lh-1'>{contentSection?.freeTable?.price}</h6>
                                    <h5 className='tk-degular fw-medium dmt-30 fontS leadingL'>{removeTags(contentSection?.freeTable?.description)}</h5>
                                    <ul className='ps-0 dmb-40 mt-2'>
                                        {contentSection?.freeTable?.offerList?.map((item, index) => (
                                            <li key={index} className='list-none tk-degular fw-normal lh-1 d-flex align-items-center fontM text-capitalize mt-4 '>
                                                <Svg rightArrow />
                                                <span className='ps-3'>{item?.list}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <BookDemoBtn
                                        title={contentSection?.freeTable?.button?.title}
                                        url={contentSection?.freeTable?.button?.url}
                                    />
                                </div>
                            </div>
                            <div className='col-lg-4 tmb-35' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                                <div className='radiusL single-price bg-white'>
                                    <h3 className='tk-degular fw-medium fontSM lh-1 text-capitalize'>{contentSection?.standardTable?.heading}</h3>
                                    <h6 className='tk-degular fw-medium fontLM mt-2 lh-1'>{contentSection?.standardTable?.price}</h6>
                                    <h5 className='tk-degular fw-medium dmt-30 fontS leadingL'>{removeTags(contentSection?.standardTable?.description)}</h5>
                                    <ul className='ps-0 dmb-40 mt-2'>
                                        {contentSection?.standardTable?.offerList?.map((item, index) => (
                                            <li key={index} className='list-none tk-degular fw-normal lh-1 d-flex align-items-center fontM text-capitalize mt-4 '>
                                                <Svg rightArrow />
                                                <span className='ps-3'>{item?.list}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <BookDemoBtn
                                        title={contentSection?.standardTable?.button?.title}
                                        url={contentSection?.standardTable?.button?.url}
                                    />
                                </div>
                            </div>
                            <div className='col-lg-4 tmb-35' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                                <div className='radiusL single-main-price bgprimary'>
                                    <h3 className='tk-degular fw-medium fontSM lh-1 text-capitalize'>{contentSection?.enterpriseTable?.heading}</h3>
                                    <h6 className='tk-degular fw-medium fontLM mt-2 lh-1'>{contentSection?.enterpriseTable?.price}</h6>
                                    <h5 className='tk-degular fw-medium dmt-30 fontS leadingL text-white'>{removeTags(contentSection?.enterpriseTable?.description)}</h5>
                                    <ul className='ps-0 dmb-40 mt-2'>
                                        {contentSection?.enterpriseTable?.offerList?.map((item, index) => (
                                            <li key={index} className='list-none tk-degular fw-normal lh-1 d-flex align-items-center fontM text-capitalize mt-4 '>
                                                <Svg rightWhiteArrow />
                                                <span className='ps-3'>{item?.list}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <BookDemoBtn
                                        extraClass="btn-border-white"
                                        title={contentSection?.enterpriseTable?.button?.title}
                                        url={contentSection?.enterpriseTable?.button?.url}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default PricingTables
