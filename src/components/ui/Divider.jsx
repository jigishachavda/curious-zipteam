import React from 'react'

const Divider = ({ desktop, tablet, mobile }) => {
    return (
        <>
            <div className={`dmb-${desktop} tmb-${tablet} mmb-${mobile}`}></div>
        </>
    )
}

export default Divider
