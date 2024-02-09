import React, { useEffect } from 'react'
import { usePageBuilder } from '../../../hooks/pages/usePageBuilder'
import Divider from '../../ui/Divider'
import BookDemoBtn from '../../common/BookDemoBtn'
import Aos from 'aos'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const TeamMakes = ({ pageType }) => {
    const data = usePageBuilder();
    const nodes = data.allWpPage.nodes
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    const pageConfig = {
        index: { contentIndex: 1, headingIndex: 10, marginIndex: 11 },
        solution: { contentIndex: 4, headingIndex: 4, marginIndex: 5 },
    };

    const { contentIndex, headingIndex, marginIndex } = pageConfig[pageType];
    const contentSection = nodes[contentIndex]?.ACF_builderpage.contentSection;
    const description = contentSection?.[headingIndex]?.description;

    let modifiedHTML = "";
    if (typeof window !== 'undefined') {
        const parser = new DOMParser();
        const parsedHTML = parser.parseFromString(description, 'text/html');
        const secondParagraph = parsedHTML.querySelector('p:nth-of-type(2)');
        const ulElement = parsedHTML.querySelector('ul');
        const listItems = parsedHTML.querySelectorAll('li');
        secondParagraph?.classList.add('dmb-30');
        ulElement?.classList.add('ps-4', 'tmb-0', 'pb-1');
        listItems?.forEach(item => item.classList.add('fontXX', 'leadingL', 'tk-degular', 'fw-normal', 'ps-3', 'dmb-25'));
        modifiedHTML = parsedHTML.documentElement.outerHTML;
      }

    return (
        <>
            <section className='team-make-section bg-white position-relative z-1' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                <div className="container res-max-w-100 px-p-0 h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6 h-100 tmb-50">
                            <div className='team-make-img radiusL no-radius overflow-hidden'>
                                <GatsbyImage image={getImage(contentSection?.[headingIndex]?.image?.localFile)} alt="" className='w-100 h-100' />
                            </div>
                        </div>
                        <div className="col-lg-6 ps-xl-5 px-p-p">
                            <div className='col-lg-11 ms-lg-auto'>
                                <h1 className='fontSM leadingSS res-fontSX res-leadingSX tk-degular fw-semibold dmb-25'>{contentSection?.[headingIndex]?.heading}</h1>
                                <div className='fontXX leadingXS res-fontM res-leadingL tk-degular fw-normal tmb-25 dmb-25' dangerouslySetInnerHTML={{ __html: modifiedHTML }}>
                                </div>
                                <BookDemoBtn
                                    data-bs-toggle={'modal'}
                                    data-bs-target={"#contact_modal"}
                                    title={contentSection?.[headingIndex]?.button?.title}
                                    url={contentSection?.[headingIndex]?.button?.url}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Divider desktop={contentSection?.[marginIndex]?.desktop?.marginBottom} tablet={contentSection?.[marginIndex]?.tablet?.marginBottom} mobile={contentSection?.[marginIndex]?.mobile?.marginBottom} />
        </>
    )
}

export default TeamMakes
