import React, { useEffect } from 'react'
import { useFooter } from '../../hooks/layout/useFooter'
import footerBgImg from '../../assets/images/footer/footer-bg-img.png'
import BookDemoBtn from '../common/BookDemoBtn'
import Svg from '../ui/Svg'
import Aos from 'aos'
import { redirectToTop } from '../../utils/helpers'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Footer = () => {
    const data = useFooter();
    const nodes = data.allWp.nodes
    const contentFooter = nodes[0]?.footer?.ACF_footer
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    const goTopPage = () => {
        if (typeof window !== 'undefined') {
            const intervalId = setInterval(function () {
                window.scrollTo(0, 0);
            }, 100);
            setTimeout(() => {
                clearInterval(intervalId);
            }, 100);
        }
    };

    return (
        <>
            <section className='bg-primary tpt-105 dpt-150 position-relative overflow-hidden'>
                <div className='container position-relative z-3' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                    <div className='row dpb-115 tpb-65'>
                        <div className='col-lg-3 dmb-40 d-lg-block d-none'>
                            <a href='#' className='text-decoration-none h-100 d-flex dpt-20'>
                                <Svg whiteLogo />
                            </a>
                        </div>
                        <div className='col-xl-9 ps-xl-5 dmb-100 tmb-60 mx-auto'>
                            <div className='d-lg-flex align-items-center justify-content-center'>
                                <h4 className='tk-degular fw-medium text-white lh-1 fontXS text-center text-lg-start text-nowrap tmb-20'>{contentFooter?.formHeading}</h4>
                                <div className='position-relative footer-login w-100 text-center text-lg-end'>
                                    <input type="text" placeholder='Enter email…' className='bg-white text-black tk-degular fw-normal border-0 w-100 lh-1' />
                                    <div className='d-lg-inline-flex d-none h-100 justify-content-center align-items-center position-absolute end-0 footer-icon'>
                                        <BookDemoBtn
                                            data-bs-toggle={'modal'}
                                            data-bs-target={"#contact_modal"}
                                            title="Book a Demo"
                                        />
                                    </div>
                                    <Link to="#" data-bs-toggle="modal" data-bs-target="#contact_modal" className='bg-primary my-1 radiusSX d-lg-none d-inline-flex h-100 justify-content-center align-items-center position-absolute top-0 end-0 footer-btn'>
                                        <Svg ButtonWhiteArrow />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 dmb-40 d-lg-none d-md-block'>
                            <a href='' className='text-decoration-none h-100 d-flex align-items-center'>
                                <Svg whiteLogo />
                            </a>
                        </div>
                        <div className='col-lg-9 ps-xl-5 ms-xl-auto'>
                            <div className='row footer-menus'>
                                <div className='col-md-6 col-lg-4 col-xl-3 tmb-40 footer-menus-link'>
                                    <h5 className='text-lightgray tk-degular fw-semibold text-capitalize fontS'>{contentFooter?.column1.heading}</h5>
                                    <ul className='ps-0 mb-0 dmt-20'>
                                        {contentFooter?.column1?.links?.map((item, i) => (
                                            <li key={i} className='dmb-15 lh-1 list-none'>
                                                <a href={item?.link?.url} onClick={goTopPage} className='text-decoration-none text-lightgray tk-degular fw-normal text-capitalize fontXX'>{item?.link?.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='col-md-6 col-lg-4 col-xl-3 tmb-40 footer-menus-link'>
                                    <h5 className='text-lightgray tk-degular fw-semibold text-capitalize fontS'>{contentFooter?.column2.heading}</h5>
                                    <ul className='ps-0 mb-0 dmt-20'>
                                        {contentFooter?.column2?.links?.map((item, i) => (
                                            <li key={i} className='dmb-15 lh-1 list-none'>
                                                <a href={item?.link?.url} onClick={goTopPage} className='text-decoration-none text-lightgray tk-degular fw-normal text-capitalize fontXX'>{item?.link?.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='col-md-6 col-lg-4 col-xl-3 tmb-40 footer-menus-link'>
                                    <h5 className='text-lightgray tk-degular fw-semibold text-capitalize fontS'>{contentFooter?.column3.heading}</h5>
                                    <ul className='ps-0 mb-0 dmt-20'>
                                        {contentFooter?.column3?.links?.map((item, i) => (
                                            <li key={i} className='dmb-15 lh-1 list-none' onClick={redirectToTop}>
                                                <a href={item?.link?.url} onClick={goTopPage} className='text-decoration-none text-lightgray tk-degular fw-normal text-capitalize fontXX'>{item?.link?.title}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='col-md-6 col-lg-4 col-xl-3 tmb-40 footer-menus-link'>
                                    <h5 className='text-lightgray tk-degular fw-semibold text-capitalize fontS'>{contentFooter?.column4.heading}</h5>
                                    <ul className='ps-0 mb-0 dmt-20'>
                                        {contentFooter?.column4?.links?.map((item, i) => (
                                            <li key={i} className='dmb-15 lh-1 list-none'>
                                                {item?.link?.title?.trim() == "Book Demo" ?
                                                    (<a
                                                        data-bs-toggle={'modal'}
                                                        data-bs-target={"#contact_modal"}
                                                        className='text-decoration-none text-lightgray tk-degular fw-normal text-capitalize fontXX '>{item?.link?.title}</a>
                                                    ) : (
                                                        <a href={item?.link?.url} onClick={goTopPage} className='text-decoration-none text-lightgray tk-degular fw-normal text-capitalize fontXX'>{item.link.title}</a>
                                                    )
                                                }
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row h-100 d-lg-flex align-items-lg-end dpb-70'>
                        <ul className='col-lg-3 col-xl-3 ps-0 mb-0 d-flex align-items-center social-icons'>
                            {contentFooter?.soicalMedia?.map((item, i) => (
                                <li className='list-none me-4 tmb-65' key={i}>
                                    <a href={item.link.url} className='text-decoration-none'>
                                        <GatsbyImage image={getImage(item?.icon?.localFile)} alt='' />
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <ul className='col-lg-8 col-xl-9 mb-0 h-100 ms-lg-auto d-lg-flex align-items-lg-end  justify-content-lg-end'>
                            <li className='list-none d-lg-inline-flex d-none mx-lg-4'>
                                <span className='text-lightgray tk-degular fontX lh-1 text-decoration-none '>
                                    {contentFooter?.copyrightText}
                                </span>
                            </li>
                            <li className='list-none tmb-15'>
                                <div className='d-flex justify-content-between'>
                                    {contentFooter?.rightBottomLink.map((item, i) => (
                                        <a key={i} href={item.link.url} className='text-lightgray tk-degular fontX lh-1 text-decoration-none mx-lg-4'>
                                            {item.link.title}
                                        </a>
                                    ))}
                                </div>
                            </li>
                            <li className=' list-none d-block d-lg-none'>
                                <span className='text-lightgray tk-degular fontX lh-1 text-decoration-none dmb-15'>
                                    {contentFooter?.copyrightText}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='footer-bg-img position-absolute top-0 start-0'>
                    <img src={footerBgImg} alt="" className='h-100' />
                </div>
            </section>
        </>
    )
}

export default Footer
