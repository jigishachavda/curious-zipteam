import React from 'react'
import { removeTags } from '../../../utils/helpers'

const PrivacyBlock = ({ contentSection }) => {

    return (
        <>
            {contentSection && (
                <section className='dpt-200'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-lg-10 col-xl-8 mx-auto px-0 px-lg-5'>
                                <div className='fontM leadingM tk-degular fw-medium textblue'>
                                    {contentSection?.prefix}
                                </div>
                                <div className='fontMM leadingMS res-fontSS res-leadingSX tk-degular fw-semibold dmb-50'>
                                    {removeTags(contentSection?.heading)}
                                </div>
                            </div>
                            <div className='privacy-content tk-degular fw-normal fontXX leadingXS pe-1'
                                dangerouslySetInnerHTML={{
                                    __html: contentSection?.content
                                }}
                            ></div>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}

export default PrivacyBlock
