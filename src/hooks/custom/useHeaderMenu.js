import { useEffect, useState, useRef, useLayoutEffect } from 'react'
import { useHeader } from '../layout/useHeader';

export default function useHeaderMenu() {
    const data = useHeader();
    const nodes = data.allWp.nodes
    const headerData = nodes?.header?.ACF_header
    const headerRef = useRef(null);
    const [activeMenuIndex, setActiveMenuIndex] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isHeaderFixed, setHeaderFixed] = useState(false);
    const [isHidden, setHidden] = useState(false);
    const [isMenuIconClicked, setIsMenuIconClicked] = useState(false);

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        }
    };

    const handleMenuClick = (index, event) => {
        event.preventDefault();
        if (activeMenuIndex == index) {
            setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
        } else {
            if (!isMenuOpen) {
                setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
            }
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
        if (typeof window !== 'undefined') {
            const body = document.querySelector('body');
            if (body && headerRef.current && !headerRef.current.contains(event.target)) {
                setIsMenuOpen(false);
                body.classList.remove('show-background-layer');
                body.style.overflow = 'auto';
                localStorage.removeItem('backgroundLayer');
            }
        }
    };

    const handleMenuIconClick = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth <= 768) {
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
        const handleLinkClick = () => {
            const body = document.querySelector('body');
            if (body) {
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
    }, [isHidden, isHeaderFixed, prevScrollPos]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (isMenuOpen) {
                window.addEventListener('click', handleClickOutside);
            } else {
                window.removeEventListener('click', handleClickOutside);
            }

            return () => {
                window.removeEventListener('click', handleClickOutside);
            };
        }
    }, [isMenuOpen]);

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
        isHeaderFixed, setHeaderFixed,
        isHidden, setHidden,
        isMenuIconClicked, setIsMenuIconClicked,
        headerRef, handleMenuClick,
        handleMenuIconClick
    }
}