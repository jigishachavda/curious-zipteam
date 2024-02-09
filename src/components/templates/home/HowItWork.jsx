import React, { useEffect } from 'react'
import { usePageBuilder } from '../../../hooks/pages/usePageBuilder'
import Divider from '../../ui/Divider';
import Svg from '../../ui/Svg';
import Aos from 'aos';
import { Link } from 'gatsby-link';

const HowItWork = () => {
    const data = usePageBuilder();
    const nodes = data.allWpPage.nodes
    const contentSection = nodes[1].ACF_builderpage.contentSection

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);
    return (
        <>
            <section className='how-work-section' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                <div className="container px-p-0 res-max-w-100">
                    <div className="row mx-m-0">
                        <div className='radiusL no-radius px-4 bg-primary dpt-100 tpb-130 dpb-140'>
                            <div className='col-12 col-md-6 col-lg-5 col-xl-5 mx-auto px-xl-4 dmb-35'>
                                <ul className="nav nav-tabs radiusS d-flex align-items-center justify-content-between px-2" role="tablist">
                                    {contentSection[4].tabsMain.map((items, i) => (
                                        <li className="nav-item" role="presentation" key={i}>
                                            <a
                                                className={`nav-link d-flex justify-content-center align-items-center fontS leadingS  tk-degular fw-medium ${i === 0 ? 'active' : ''}`}
                                                id={`simple-tab-${i}`}
                                                data-bs-toggle="tab"
                                                href={`#simple-tabpanel-${i}`}
                                                role="tab"
                                                aria-controls={`simple-tabpanel-${i}`}
                                                aria-selected={`#simple-tab-${i}`}
                                            >
                                                {items.tabsName}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="tab-content" id="tab-content">
                                {contentSection[4].tabsMain.map((item, i) => (
                                    <div key={i} className={`tab-pane ${i === 0 ? 'active' : ''}`} id={`simple-tabpanel-${i}`} role="tabpanel" aria-labelledby={`simple-tab-${i}`}>
                                        <div className='d-flex flex-column align-items-center justify-content-center'>
                                            <h1 className='fontML leadingLM res-fontSL res-leadingMX tk-degular fw-semibold text-center text-white dmb-10'>{item.title}</h1>
                                            <h5 className='fontL leadingL tk-degular fw-normal text-white text-center tmb-30 dmb-50'>{item.decription}</h5>
                                            <div className='col-12 col-md-11 col-lg-9 col-xl-6 px-md-5 px-xl-4'>
                                                <div className='w-100 position-relative input-box-btn'>
                                                    <input type="text" placeholder='Add your team name here…' className='h-100 border-0 w-100 drop-shadow fontXX leadingL text-black tk-degular fw-normal radiusSX' />
                                                    <Link to="#" data-bs-toggle="modal" data-bs-target="#contact_modal" className='position-absolute top-0 end-0 h-100 d-flex align-items-center pe-2'>
                                                        <div className='input-button h-100 w-100 radiusSX d-flex justify-content-center align-items-center bg-primary'>
                                                            <Svg ButtonWhiteArrow />
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Divider desktop={contentSection[5].desktop.marginBottom} tablet={contentSection[5].tablet.marginBottom} mobile={contentSection[5].mobile.marginBottom} />
        </>
    )
}

export default HowItWork
