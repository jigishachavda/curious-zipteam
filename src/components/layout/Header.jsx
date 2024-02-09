import React, { useEffect, useMemo } from 'react'
import { useHeader } from '../../hooks/layout/useHeader';
import Svg from '../ui/Svg';
import { usePageBuilder } from '../../hooks/pages/usePageBuilder';
import BookDemoBtn from '../common/BookDemoBtn';
import useHeaderMenu from '../../hooks/custom/useHeaderMenu';
import { Link } from 'gatsby';
import { HELPER } from '../../services';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Header = ({ pageSlug }) => {
    const data = useHeader();
    const nodes = data.allWp.nodes
    const headerData = nodes[0]?.header.ACF_header
    const data2 = usePageBuilder();
    const headerBg = data2.allWpPage.nodes
    const pageDetails = headerBg.find(node => node.title.toLowerCase().includes(pageSlug))

    const {
        activeMenuIndex,
        isMenuOpen,
        isHeaderFixed,
        isHidden,
        isMenuIconClicked,
        headerRef, handleMenuClick,
        handleMenuIconClick
    } = useHeaderMenu()

    useEffect(() => {
        HELPER.addSlugToBody(pageSlug);
    }, [])

    const LogoSvg = () => {
        let logoType = 'blackLogo';
        if (pageDetails?.ACF_headerColor?.headerColor === 'black') {
            if (isMenuIconClicked || !isMenuOpen) {
                logoType = 'whiteLogo';
            }
        }
        const BlackLogo = () => <Svg blackLogo />;
        const WhiteLogo = () => <Svg whiteLogo />;

        return (
            <>
                {logoType === 'blackLogo' && <BlackLogo />}
                {logoType === 'whiteLogo' && <WhiteLogo />}
            </>
        );
    };

    const ArrowSvg = ({ rotate }) => {
        let arrowType = 'angleDonwBlack'
        if (pageDetails?.ACF_headerColor?.headerColor === 'black') {
            if (!isMenuOpen) {
                arrowType = 'angleDonwWhite'
            }
        }
        const prop = { [arrowType]: arrowType };
        if (rotate) {
            prop['rotated'] = true;
        }
        const BlackArrow = () => <Svg angleDonwBlack />;
        const WhiteArrow = () => <Svg angleDonwWhite />;

        return (
            <>
                {arrowType === 'angleDonwBlack' && <BlackArrow />}
                {arrowType === 'angleDonwWhite' && <WhiteArrow />}
            </>
        );
    };

    const headerColor = useMemo(() => {
        let color = 'text-black';
        if (pageDetails?.ACF_headerColor?.headerColor == 'black' && (isMenuIconClicked || !isMenuOpen)) {
            color = 'text-white';
        }
        return color;
    }, [pageDetails, isMenuOpen])

    const borderBtnClass = useMemo(() => {
        let extraClass = '';
        if (pageDetails?.ACF_headerColor?.headerColor == 'black' && false == isMenuOpen) {
            extraClass = 'btn-border-white';
        }
        return extraClass;
    }, [pageDetails, isMenuOpen])

    return (
        <header ref={headerRef} className={`position-fixed top-0 w-100 ${isHeaderFixed ? 'header-fixed' : 'header-fixed-os'} ${isHidden ? 'hidden' : ''} ${isMenuIconClicked ? 'bg-primary h-100 res-menu' : ''}`}>
            <div className='position-relative tpt-75 dpt-30 dpb-30'>
                <div className='container containerS h-100'>
                    <div className='row h-100 w-100 d-lg-flex justify-content-between align-items-center'>
                        <a href='/' className='col-6 col-lg-3 col-xl-4 logo'>
                            <LogoSvg />
                        </a>
                        <div className='col-1 menu-icon d-lg-none d-flex justify-content-end' onClick={handleMenuIconClick}>
                            {isMenuIconClicked ? <Svg resMenuClose /> : <Svg menuIcon />}
                        </div>
                        <div className={`col-12 col-lg-6 col-xl-4 ${isMenuIconClicked ? 'd-lg-none d-block' : 'd-lg-block d-none'}`}>
                            <ul className='main-menu d-lg-flex list-none ps-0 mb-0 tpt-60'>
                                {headerData?.menuLinks?.map((item, i) => (
                                    <li key={i} className={`main-menu-li d-lg-flex align-items-center w-100 px-lg-3 ${(activeMenuIndex === i && item.megaMenu && isMenuOpen) ? 'megamenu-open' : ''}  ${isMenuIconClicked ? ' position-relative w-100' : ''}`} onClick={(event) => {
                                        handleMenuClick(i, event)
                                    }}>
                                        <Link to={item.link.url} className={`main-link text-decoration-none d-flex align-items-center ${headerColor} ${isMenuIconClicked ? 'tmb-40' : ''}`}
                                        >
                                            <span className='fontXX leadingL res-fontLM res-leadingXX tk-degular fw-medium fw-lg-semibold me-1 cursor-pointer'>
                                                {item.link.title}
                                            </span>
                                            <div className='dropdown-icon d-flex align-items-center justify-content-center'>
                                                {item.megaMenu && (
                                                    <ArrowSvg />
                                                )}
                                            </div>
                                        </Link>
                                        <div className={`mega-menu-container position-absolute p-initial top-0 start-0 w-100 bg-white box-shadow no-box-shadow tpb-0 tpt-0 dpb-120 dpt-115 ${isMenuIconClicked ? 'bg-primary text-white' : ''}`}>
                                            <div className='container containerS'>
                                                <div className='row rowX'>
                                                    {item?.megaMenu?.map((menuItem, index) => (
                                                        <div key={index} className='col-lg-4 col-xl-3'>
                                                            <Link to={menuItem.link.url} className='text-decoration-none text-black' onClick={() => {
                                                                handleMenuIconClick()
                                                            }}>
                                                                <div className='header-bg position-relative dmb-30 d-none d-lg-block'>
                                                                    <GatsbyImage image={getImage(menuItem?.background?.localFile)} className='w-100 h-100 object-cover radiusXM' alt="-" />
                                                                    {item.link.title.toLowerCase().includes('resources') ?
                                                                        (<div className='submenu-res-img position-absolute w-100 h-100 top-0 d-flex justify-content-center align-items-center'>
                                                                            <GatsbyImage image={getImage(menuItem?.image?.localFile)} className='' alt="-" />
                                                                        </div>) :
                                                                        (<div className='submenu-img position-absolute bottom-0 w-100 h-100 left-center'>
                                                                            <GatsbyImage image={getImage(menuItem?.image?.localFile)} className='w-100 h-100 object-cover' alt="-" />
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
                                    <a href={headerData?.rightSideButton?.link1?.url} className={`login fontXX leadingL tk-degular fw-semibold  text-decoration-none me-4 text-white tmb-60`}>
                                        {headerData?.rightSideButton?.link1?.title}
                                    </a>
                                    <BookDemoBtn
                                        data-bs-toggle={'modal'}
                                        data-bs-target={"#contact_modal"}
                                        extraClass='btn-border-white'
                                        title={headerData?.rightSideButton?.link2?.title}
                                        url={headerData?.rightSideButton?.link2?.url}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='col-3 col-xl-4  d-none d-lg-block'>
                            <div className='d-flex align-items-center justify-content-end'>
                                <a href={headerData?.rightSideButton?.link1?.url} className={`login fontXX leadingL tk-degular fw-semibold  text-decoration-none me-4 ${headerColor}`}>
                                    {headerData?.rightSideButton?.link1?.title}
                                </a>
                                <BookDemoBtn
                                    data-bs-toggle={'modal'}
                                    data-bs-target={"#contact_modal"}
                                    extraClass={isHeaderFixed ? '' : borderBtnClass}
                                    title={headerData?.rightSideButton?.link2?.title}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
