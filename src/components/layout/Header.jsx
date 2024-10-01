import React, { useEffect, useState } from 'react'
import { useHeader } from '../../hooks/layout/useHeader';
import { usePageBuilder } from '../../hooks/pages/usePageBuilder';
import useHeaderMenu from '../../hooks/custom/useHeaderMenu';
import Svg from '../ui/Svg';
import { Link } from 'gatsby';
import BookDemoBtn from '../common/BookDemoBtn';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Header = ({ pageSlug }) => {
    const data = useHeader();
    const nodes = data?.allWp?.nodes
    const headerData = nodes[0]?.header?.ACF_header
    const data2 = usePageBuilder();
    const headerBg = data2?.allWpPage?.nodes
    const [headerColor, setHeaderColor] = useState('');

    useEffect(() => {
        const slug = window.location.pathname.split('/').filter(Boolean).pop();

        const matchedItem = headerBg.find(item => item?.slug === slug);

        if (matchedItem) {
            setHeaderColor(matchedItem.ACF_headerColor?.headerColor);
        } else {
            setHeaderColor('black');
        }
    }, [headerBg, pageSlug]);

    const {
        isHeaderFixed, isHidden, activeMenuIndex, handleMenuClick, handleMenuIconClick, isMenuOpen, isClicked, headerRef, isMenuIconClicked, handleMegaMenuIconClick
    } = useHeaderMenu()

    return (
        <header ref={headerRef} className={`header-${headerColor} position-fixed top-0 w-100 tpt-75 dpt-30 dpb-30 ${isHeaderFixed ? 'header-fixed' : 'header-fixed-os'} ${isHidden ? 'hidden' : ''} ${isClicked ? 'header-clicked' : ''} ${isMenuIconClicked ? 'header-res bgprimary' : ''}`}>
            <div className='container containerS'>
                <div className='row align-items-center'>
                    <a href='/' className='col-6 col-lg-3 logo'>
                        {headerColor === 'black' ? <Svg blackLogo /> : <Svg whiteLogo />}
                    </a>
                    <div className='col-6 menu-icon d-lg-none d-inline-flex justify-content-end' onClick={handleMenuIconClick}>
                        {isMenuIconClicked ? <Svg resMenuClose /> : <Svg menuIcon />}
                    </div>
                    <div className={`col-12 col-lg-6 ${isMenuIconClicked ? 'd-lg-none' : 'd-none d-lg-block'}`}>
                        <ul className='main-menu d-flex flex-wrap flex-lg-row flex-column justify-content-lg-center list-none ps-0 mb-0 tpt-60'>
                            {headerData?.menuLinks?.map((item, i) => (
                                <li key={i} className={`main-menu-li px-lg-3 ${(activeMenuIndex === i && item.megaMenu && isMenuOpen) ? 'megamenu-open' : ''} ${isMenuIconClicked ? 'position-relative w-100' : ''}`} onClick={(event) => {
                                    handleMenuClick(i, event, item.megaMenu ? true : false)
                                }}>
                                    {item?.megaMenu ? (
                                        <Link to='#' className={`main-link text-decoration-none d-flex align-items-center ${isMenuIconClicked ? 'tmb-10' : ''}`}>
                                            <span className='fontXX leadingL res-fontLM res-leadingXX tk-degular fw-medium fw-lg-semibold me-1 cursor-pointer'>
                                                {item?.link?.title}
                                            </span>
                                            <div className='dropdown-icon d-flex align-items-center justify-content-center'>
                                                {item?.megaMenu && (
                                                    <>
                                                        {headerColor === 'black' ? <Svg angleDonwBlack /> : <Svg angleDonwWhite />}
                                                    </>
                                                )}
                                            </div>
                                        </Link>
                                    ) : (
                                        <Link to={item?.link?.url} className='main-link text-decoration-none' onClick={() => {
                                            handleMegaMenuIconClick()
                                        }}>
                                            <span className='fontXX leadingL res-fontLM res-leadingXX tk-degular fw-medium fw-lg-semibold me-1 cursor-pointer'>
                                                {item?.link?.title}
                                            </span>
                                        </Link>
                                    )}
                                    <div className={`mega-menu-container box-shadow bg-white ${isMenuIconClicked ? 'bg-transparent tpt-20 tpb-20' : 'dpt-120 dpb-120'}`}>
                                        <div className='container containerS'>
                                            <div className='row rowB'>
                                                {item?.megaMenu?.map((menuItem, index) => (
                                                    <div key={index} className='col-lg-4 col-xl-3'>
                                                        <Link to={menuItem?.link?.url} className='text-decoration-none' onClick={() => {
                                                            handleMegaMenuIconClick()
                                                        }}>
                                                            <div className='header-bg position-relative dmb-30 d-none d-lg-block'>
                                                                <GatsbyImage image={getImage(menuItem?.background?.localFile)} className='w-100 h-100 object-cover radiusXM' alt="-" imgStyle={{ quality: 100 }} />
                                                                {item?.link?.title?.toLowerCase()?.includes('resources') ?
                                                                    (<div className='submenu-res-img position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center'>
                                                                        <GatsbyImage image={getImage(menuItem?.image?.localFile)} className='' alt="-" imgStyle={{ quality: 100 }} />
                                                                    </div>) :
                                                                    (<div className='submenu-img position-absolute bottom-0 w-100 h-100 left-center'>
                                                                        <GatsbyImage image={getImage(menuItem?.image?.localFile)} className='w-100 h-100 object-cover' alt="-" imgStyle={{ quality: 100 }} />
                                                                    </div>)
                                                                }
                                                            </div>
                                                            <h1 className='fontXX leadingL res-fontLM tk-degular fw-medium fw-lg-normal tmb-30 dmb-10'>{menuItem?.heading}</h1>
                                                            <span className='fontS leadingS tk-degular fw-normal opacity-50 d-none d-lg-block'>{menuItem?.description}</span>
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className='col-3 col-xl-4 d-lg-none d-block'>
                            <div className='d-flex flex-column justify-content-end'>
                                <a href={headerData?.rightSideButton?.link1?.url} className='login fontXX leadingL tk-degular fw-semibold  text-decoration-none me-4 text-white tmb-40'>
                                    {headerData?.rightSideButton?.link1?.title}
                                </a>
                                <BookDemoBtn
                                    data-bs-toggle={'modal'}
                                    data-bs-target={"#contact_modal"}
                                    title={headerData?.rightSideButton?.link2?.title}
                                    url={headerData?.rightSideButton?.link2?.url}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-3 d-none d-lg-block'>
                        <div className='d-flex align-items-center justify-content-end'>
                            <a href={headerData?.rightSideButton?.link1?.url} className='login fontXX leadingL tk-degular fw-semibold text-decoration-none me-4'>
                                {headerData?.rightSideButton?.link1?.title}
                            </a>
                            <BookDemoBtn
                                data-bs-toggle={'modal'}
                                data-bs-target={"#contact_modal"}
                                title={headerData?.rightSideButton?.link2?.title}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
