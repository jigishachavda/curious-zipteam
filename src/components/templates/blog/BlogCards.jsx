import React from 'react';
import MyLink from '../../ui/MyLink';
import { removeTags } from '../../../utils/helpers';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BlogCards = ({ BlogCards, selectedCategory, visiblePosts, animationActive }) => {
    const filteredPosts = selectedCategory
        ? BlogCards?.filter((post) =>
            post.node.categories.nodes.some(
                (cat) => cat.name === selectedCategory
            )
        )
        : BlogCards;

    return (
        <div className='container'>
            <div className='row rowA'>
                {filteredPosts &&
                    filteredPosts.slice(0, visiblePosts).map((post, i) => (
                        <div key={i} className={`${animationActive ? 'animationOnClick' : ''} col-lg-4 dmb-90 tmb-75 mmb-65 blog-cards text-decoration-none text-black`}>
                            <MyLink key={i} to={post.node.link} state={{ post }}>
                                <div className='single-blog cursor-pointer'>
                                    <div className='blog-img overflow-hidden position-relative radiusXM'>
                                        {post?.node.ACF_blogpage?.flexibleContent[1] === post?.node.ACF_blogpage?.flexibleContent[1] ?
                                            <GatsbyImage image={getImage(post?.node.ACF_blogpage?.flexibleContent[1]?.image?.localFile)} className='w-100 h-100 object-cover radiusXM' alt="" />
                                            : null}
                                    </div>
                                    <h5 className='text-black fontXM mt-lg-4 mt-2 pt-lg-0 pt-1 tk-degular fw-medium pe-4 leadingXM '>{post?.node.ACF_blogpage?.flexibleContent[0]?.heading}</h5>
                                    <h6 className='text-black fontS mt-lg-3 mt-2 pt-lg-0 pt-1 tk-degular fw-normal leadingL text-truncate text-truncate2'>{removeTags(post?.node.ACF_blogpage?.flexibleContent[2]?.content)}</h6>
                                    <label className='text-black blog-label d-flex align-items-center p-2 radiusXL  border-grayOne border mt-lg-4 mt-3'>
                                        <span className='bg-primary me-2 ms-1 d-block rounded-circle rounded-icon'></span>
                                        <h6 className='me-1 fontX tk-degular fw-medium lh-1 '>{post.node.ACF_blogpage?.time}</h6>
                                    </label>
                                </div>
                            </MyLink>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default BlogCards
