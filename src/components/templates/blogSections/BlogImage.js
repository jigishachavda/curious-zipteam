import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

export default function BlogImage({ data }) {
    return (
        <>
            <div className='open-blog-images overflow-hidden radiusXX dmt-75 dmb-60' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                {data?.localFile?.childImageSharp ? (
                    <GatsbyImage image={getImage(data?.localFile)} className='w-100 h-100 object-cover' alt='' imgStyle={{ quality: 100 }}  />
                ) : (
                    <img src={data?.mediaItemUrl} className='w-100 h-100 object-cover' alt='' />
                )}
            </div>
        </>
    )
}
