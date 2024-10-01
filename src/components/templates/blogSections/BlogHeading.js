import React from 'react'

export default function BlogHeading({data}) {
  return (
    <h1 className='text-black tk-degular fw-semibold fontXS res-fontSX tmb-25 dmb-15 tmt-25 dmt-45' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
        {data}
    </h1>
  )
}
