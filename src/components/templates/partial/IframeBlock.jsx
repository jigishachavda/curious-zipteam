import React from 'react'

const IframeBlock = ({ contentSection }) => {
  return (
    <div className='container'>
      <div className='col-12 col-lg-10 col-xl-7 mx-auto iframe-block radiusL overflow-hidden'>
        {contentSection &&
          <div dangerouslySetInnerHTML={{ __html: contentSection.iframeLink }} />
        }
      </div>
    </div>
  )
}

export default IframeBlock
