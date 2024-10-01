import React from 'react'

const NotFoundPage = ({ location = null }) => {
    return (
        <>
            {!location || location.pathname.replace(/^\//, "").replace(/\/$/, "") === '404.html' ? (
                <div className='loading'>
                    <div style={{ background: 'white' }} className='bg-transparent w-100 h-100 d-flex align-items-center justify-content-center fontXM'>
                        Loading...
                    </div>
                </div>
            ) : (
                <div className='d-flex flex-column align-items-center justify-content-center page-not-found bgprimary'>
                    <h2 className='tk-degular fw-semibold fontLS text-center text-white mb-4'>
                        404
                    </h2>
                    <h5 className='tk-degular fontSX text-white'>Page not Found</h5>
                </div>
            )}
        </>
    )
}

export default NotFoundPage 
