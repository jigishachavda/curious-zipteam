import React, { useEffect } from 'react'
import { usePageBuilder } from '../../../hooks/pages/usePageBuilder';
import Divider from '../../ui/Divider';
import BookDemoBtn from '../../common/BookDemoBtn';
import Svg from '../../ui/Svg';
import Aos from 'aos';

const PricingTables = () => {
    const data = usePageBuilder();
    const nodes = data.allWpPage.nodes
    const contentSection = nodes[2].ACF_builderpage.contentSection
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <>
            <div className='dpb-170'></div>
            <section className='solution-team tpb-45 dpb-80'>
                <div className='container'>
                    <div className='row rowB'>
                        <div className='col-lg-12 dmb-65' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                            <div className='col-lg-8 mx-auto text-center'>
                                <h5 className='fontM leadingL tk-degular fw-medium text-center dmb-15'>{contentSection[0].prefix}</h5>
                                <h3 className='tk-degular fw-semibold text-black fontMS'>
                                    {contentSection[0].heading.split(' ').map((word, index) => (
                                        <span key={index} className={index === 0 ? 'text-blue res-w-100 d-inline-block' : ''}>
                                            {word}{index !== index.length - 1 ? ' ' : ''}
                                        </span>
                                    ))}
                                </h3>
                                <h6 className='mt-4 tk-degular fw-medium text-black fontXX leadingXS'>
                                    {contentSection[0].description}
                                </h6>
                            </div>
                        </div>
                        <div className='col-lg-4 tmb-35' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                            <div className='radiusL single-price bg-white'>
                                <h3 className='tk-degular fw-medium fontSM lh-1 text-capitalize'>{contentSection[0]?.freeTable?.heading}</h3>
                                <h6 className='tk-degular fw-medium fontLM mt-2 lh-1'>{contentSection[0]?.freeTable?.price}</h6>
                                <h5 className='tk-degular fw-medium dmt-30 fontS leadingL'>{contentSection[0]?.freeTable?.description}</h5>
                                <ul className='ps-0 dmb-40 mt-2'>
                                    {contentSection[0]?.freeTable?.offerList?.map((item, index) => (
                                        <li key={index} className='list-none tk-degular fw-normal lh-1 d-flex align-items-center fontM text-capitalize mt-4 '>
                                            <Svg rightArrow />
                                            <span className='ps-3'>{item?.list}</span>
                                        </li>
                                    ))}
                                </ul>
                                <BookDemoBtn
                                    title={contentSection[0]?.freeTable?.button.title}
                                    url={contentSection[0]?.freeTable?.button.url}
                                />
                            </div>
                        </div>
                        <div className='col-lg-4 tmb-35' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                            <div className='radiusL single-price bg-white'>
                                <h3 className='tk-degular fw-medium fontSM lh-1 text-capitalize'>{contentSection[0]?.standardTable?.heading}</h3>
                                <h6 className='tk-degular fw-medium fontLM mt-2 lh-1'>{contentSection[0]?.standardTable?.price}</h6>
                                <h5 className='tk-degular fw-medium dmt-30 fontS leadingL'>{contentSection[0]?.standardTable?.description}</h5>
                                <ul className='ps-0 dmb-40 mt-2'>
                                    {contentSection[0]?.standardTable?.offerList?.map((item, index) => (
                                        <li key={index} className='list-none tk-degular fw-normal lh-1 d-flex align-items-center fontM text-capitalize mt-4 '>
                                            <Svg rightArrow />
                                            <span className='ps-3'>{item?.list}</span>
                                        </li>
                                    ))}
                                </ul>
                                <BookDemoBtn
                                    title={contentSection[0]?.standardTable?.button.title}
                                    url={contentSection[0]?.standardTable?.button.url}
                                />
                            </div>
                        </div>
                        <div className='col-lg-4 tmb-35' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                            <div className='radiusL single-main-price bg-primary'>
                                <h3 className='tk-degular fw-medium fontSM lh-1 text-capitalize'>{contentSection[0]?.enterpriseTable?.heading}</h3>
                                <h6 className='tk-degular fw-medium fontLM mt-2 lh-1'>{contentSection[0]?.enterpriseTable?.price}</h6>
                                <h5 className='tk-degular fw-medium dmt-30 fontS leadingL text-white'>{contentSection[0]?.enterpriseTable?.description}</h5>
                                <ul className='ps-0 dmb-40 mt-2'>
                                    {contentSection[0]?.enterpriseTable?.offerList?.map((item, index) => (
                                        <li key={index} className='list-none tk-degular fw-normal lh-1 d-flex align-items-center fontM text-capitalize mt-4 '>
                                            <Svg rightWhiteArrow />
                                            <span className='ps-3'>{item?.list}</span>
                                        </li>
                                    ))}
                                </ul>
                                <BookDemoBtn
                                    extraClass="btn-border-white"
                                    title={contentSection[0]?.enterpriseTable?.button.title}
                                    url={contentSection[0]?.enterpriseTable?.button.url}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Divider desktop={contentSection[1].desktop.marginBottom} tablet={contentSection[1].tablet.marginBottom} mobile={contentSection[1].mobile.marginBottom} />
        </>
    )
}

export default PricingTables
