import React, { useState } from 'react'

const FixedBanner = () => {
    const [activeBtn, setActiveBtn] = useState(0);

    const handleButtonClick = (index) => {
        setActiveBtn(index);
    };

    return (
        <section className='fixed-section position-fixed bottom-0'>
            <div className='bg-white h-100 w-100 d-flex align-items-center'>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <a href="javascript:void(0)" className={`fixed-btn d-flex justify-content-center align-items-center text-decoration-none radiusS text-black fontS leadingM tk-degular fw-medium px-3 mx-1 ${activeBtn === 0 ? 'active' : ''}`} onClick={() => handleButtonClick(0)}>How It Helps</a>
                        <a href="javascript:void(0)" className={`fixed-btn d-flex justify-content-center align-items-center text-decoration-none radiusS text-black fontS leadingM tk-degular fw-medium px-3 mx-1 ${activeBtn === 1 ? 'active' : ''}`} onClick={() => handleButtonClick(1)}>Dream Team Maker</a>
                        <a href="javascript:void(0)" className={`fixed-btn d-flex justify-content-center align-items-center text-decoration-none radiusS text-black fontS leadingM tk-degular fw-medium px-3 mx-1 ${activeBtn === 2 ? 'active' : ''}`} onClick={() => handleButtonClick(2)}>Ai-Assisted Skills Management</a>
                        <a href="javascript:void(0)" className={`fixed-btn d-flex justify-content-center align-items-center text-decoration-none radiusS text-black fontS leadingM tk-degular fw-medium px-3 mx-1 ${activeBtn === 3 ? 'active' : ''}`} onClick={() => handleButtonClick(3)}>FAQ’s</a>
                        <a href="javascript:void(0)" className={`fixed-btn d-flex justify-content-center align-items-center text-decoration-none radiusS text-black fontS leadingM tk-degular fw-medium px-3 mx-1 ${activeBtn === 4 ? 'active' : ''}`} onClick={() => handleButtonClick(4)}>Where to next?</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FixedBanner
