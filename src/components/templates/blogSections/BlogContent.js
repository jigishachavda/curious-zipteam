import React from 'react'
import { removeTags } from '../../../utils/helpers'

const BlogContent = ({ data }) => {
    return (
        <h4 className='tk-degular fw-medium text-black fontXX res-fontLM res-leadingXS leadingXM tmb-35 dmb-45'>
            {removeTags(data)}
        </h4>
    )
}

export default BlogContent
