import { useEffect, useState, useRef, useLayoutEffect } from 'react'

export default function useHeaderMenu() {
    const headerRef = useRef(null);
    const [activeMenuIndex, setActiveMenuIndex] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isHeaderFixed, setHeaderFixed] = useState(false);
    const [isHidden, setHidden] = useState(false);
    const [isMenuIconClicked, setIsMenuIconClicked] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        }
    };

    const handleMenuClick = (index, event, _isMegaMenu) => {
        event.preventDefault();
        if (_isMegaMenu) {
            if (activeMenuIndex === index) {
                setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
                setIsClicked(prevIsMenuOpen => !prevIsMenuOpen);
            } else {
                if (!isMenuOpen) {
                    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
                    setIsClicked(prevIsMenuOpen => !prevIsMenuOpen);
                }
            }
        } else {
            setIsMenuOpen(false);
            setIsClicked(false);
        }

        setActiveMenuIndex(index);
    };

    useEffect(() => {
        const body = document.querySelector('body');
        if (isMenuOpen) {
            body.classList.add('show-background-layer');
            body.style.overflow = 'hidden';
        } else {
            body.classList.remove('show-background-layer');
            body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);


    const handleClickOutside = (event) => {
        if (headerRef.current && !headerRef.current.contains(event.target)) {
            setIsMenuOpen(false);
            setIsClicked(false);
            const body = document.querySelector('body');
            body.classList.remove('show-background-layer');
            body.style.overflow = 'auto';
            localStorage.removeItem('backgroundLayer');
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleMenuIconClick = () => {
        if (typeof window !== 'undefined' && window.innerWidth <= 992) {
            setIsMenuIconClicked(prevState => !prevState);

            const html = document.querySelector('html');
            if (html) {
                html.style.overflow = isMenuIconClicked ? '' : 'hidden';
            }
        }
    };

    useEffect(() => {
        const html = document.querySelector('html');
        if (isMenuIconClicked) {
            html.style.overflow = 'hidden';
        } else {

            html.style.overflow = '';
        }
    }, [isMenuIconClicked]);

    const handleMegaMenuIconClick = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth <= 992) {
                setIsMenuIconClicked(prevState => !prevState);

                const body = document.querySelector('body');
                if (body) {
                    body.style.overflow = isMenuIconClicked ? 'auto' : 'hidden';
                }
            }
        }
    };

    useLayoutEffect(() => {
        if (!isMenuIconClicked) {
            const body = document.querySelector('body');
            body.style.overflow = 'auto'
        }
    }, [isMenuIconClicked]);

    useLayoutEffect(() => {
        const handleLinkClick = (event) => {
            const body = document.querySelector('body');
            if (body && isMenuOpen) {
                if (typeof window !== 'undefined') {
                    if (! event.currentTarget.href.includes(window.location.origin)) {
                        window.open(event.currentTarget.href, '_blank');
                    }
                }

                body.style.overflow = 'hidden';
            }
        };
        const menuLinks = document.querySelectorAll('.main-menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', handleLinkClick);
        });

        return () => {
            menuLinks.forEach(link => {
                link.removeEventListener('click', handleLinkClick);
            });
        };
    }, [isMenuOpen]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                const scroll = window.scrollY;
                if (scroll >= 50) {
                    setHeaderFixed(true);
                } else {
                    setHeaderFixed(false);
                }
                const currentScrollPos = window.scrollY;
                if (prevScrollPos > currentScrollPos || currentScrollPos === 0) {
                    setHidden(false);
                } else {
                    setHidden(true);
                }
                setPrevScrollPos(currentScrollPos);
            };
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [isHidden, isHeaderFixed, prevScrollPos,]);
   

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [prevScrollPos, visible]);

    return {
        activeMenuIndex, setActiveMenuIndex,
        isMenuOpen, setIsMenuOpen,
        prevScrollPos, setPrevScrollPos,
        visible, setVisible,
        isClicked, setIsClicked,
        isHeaderFixed, setHeaderFixed,
        isHidden, setHidden,
        isMenuIconClicked, setIsMenuIconClicked,
        headerRef, handleMenuClick,
        handleMenuIconClick, handleMegaMenuIconClick
    }
}