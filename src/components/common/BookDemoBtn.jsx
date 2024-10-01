import React from 'react'
import Svg from '../ui/Svg'

export default function BookDemoBtn(props) {
  const {
    title,
    url,
    extraClass,
    ...rest
  } = props

  return (
    <>
      {title &&
        <a href={url} {...rest} className={`text-decoration-none d-flex align-items-center justify-content-center text-white btnA btnX rounded-5 ${extraClass}`}>
          <span className='tk-degular fontXX leadingX demobook-btn'>{title}</span>
          <Svg ButtonArrow />
        </a>
      }
    </>
  )
}
