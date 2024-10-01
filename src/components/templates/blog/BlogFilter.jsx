import React from 'react'

const BlogFilter = ({ selectedCategory, setSelectedCategory, setAnimationActive, data, contentSection }) => {
    const categories = data?.allWpCategory?.nodes;
    const filterPosts = (category) => {
        if (category === selectedCategory) {
            setSelectedCategory(null);
            setAnimationActive(false);
        } else {
            setSelectedCategory(category);
            setAnimationActive(true);
            setTimeout(() => {
                setAnimationActive(false);
            }, 1000);
        }
    };

    return (
        <div>
            <div className='container pe-p-0'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='text-black tk-degular fw-medium fontMM res-fontMX dmb-40'>All Posts</h1>
                    </div>
                    <div className='col-12 d-flex align-items-center dmt-35 tmt-20 dmb-55 tmb-40'>
                        <h5 className='pe-3 me-4 fontM text-black tk-degular fw-medium text-capitalize lh-1'>Filters</h5>
                        <div className='d-flex align-items-center button-filters overflow-y-auto'>
                            {categories?.map((items, i) => (
                                <button
                                    key={i}
                                    onClick={() => filterPosts(items?.name)}
                                    className={`border-0 fontM text-black lh-1 tk-degular fw-medium radiusXM me-3 p-2 text-nowrap ${selectedCategory === items.name ? 'active' : ''}`}>
                                    <span className='px-2 d-block mx-2'>
                                        {items?.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogFilter
