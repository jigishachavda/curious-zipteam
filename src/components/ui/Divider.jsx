import React from 'react'

const Divider = ({ contentSection }) => {
    return (
        <>
            {contentSection &&
                (
                    <div className={`dmb-${contentSection.desktop.marginBottom} tmb-${contentSection.tablet.marginBottom} mmb-${contentSection.mobile.marginBottom}`}></div>
                )
            }
        </>
    )
}

export default Divider
