import React, { useEffect } from 'react'
import { removeTags } from '../../../utils/helpers';
import Aos from 'aos';

const QueAns = ({ accordionId, contentSection }) => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);


    return (
        <>
            {contentSection && (
                <section className='que-ans-section' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                    <div className="container containerX">
                        <div className="row">
                            <div className="col-xl-10 px-lg-4 mx-auto">
                                <h1 className='col-8 col-md-12 mx-auto fontMX leadingMS res-fontSX res-leadingXL text-center tk-degular fw-semibold tmb-25 dmb-60'>{contentSection?.heading?.split(' ')?.map((word, index) => (
                                    <span key={index} className={index >= 2 ? 'textblue' : ''}>
                                        {word}{index !== index?.length - 1 ? ' ' : ''}
                                    </span>
                                ))} </h1>
                                <div className="accordion" id={accordionId}>
                                    {contentSection?.accordionList?.map((item, i) => (
                                        <div className={`accordion-item dmb-15 ${i === 0 ? 'show' : ''}`} key={i}>
                                            <h2 className="accordion-header">
                                                <button className="accordion-button leadingXM res-leadingXX tk-degular fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${item.id}`} aria-expanded={i === 0 ? 'true' : 'false'} aria-controls={`panelsStayOpen-collapse${item.id}`}>
                                                    {removeTags(item?.heading)}
                                                </button>
                                            </h2>
                                            <div id={`panelsStayOpen-collapse${item.id}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`} data-bs-parent={`#${accordionId}`}>
                                                <div className="accordion-body fontXX leadingXS res-fontM res-leadingL tk-degular fw-normal">
                                                    {removeTags(item?.description)}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default QueAns
