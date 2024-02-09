import React, { useEffect, useState } from 'react'
import { useBlog } from '../../../hooks/pages/useBlog';
import { usePageBuilder } from '../../../hooks/pages/usePageBuilder';
import BlogFilter from './BlogFilter';
import BlogCards from './BlogCards';
import Aos from 'aos';
import BookDemoBtn from '../../common/BookDemoBtn';

const BlogCardData = () => {
    const data = useBlog();
    const data2 = usePageBuilder();
    const nodes2 = data2.allWpPage.nodes;
    const contentSection = nodes2[0].ACF_builderpage.contentSection;

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    const BlogCardsData = data.allWpPost.edges?.map((_blogPost, i) => ({
        ..._blogPost,
        _tag_id: i + 1,
    }));

    const allPostsCategory =
        data.allWpCategory.nodes.length > 0
            ? data.allWpCategory.nodes[0].name
            : null;
    const [selectedCategory, setSelectedCategory] = useState(allPostsCategory);
    const [visiblePosts, setVisiblePosts] = useState(6);
    const [animationActive, setAnimationActive] = useState(false);

    const loadMore = () => {
        setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6);
    };

    const filteredPosts = selectedCategory
        ? BlogCardsData?.filter((post) =>
            post.node.categories.nodes.some(
                (cat) => cat.name === selectedCategory
            )
        )
        : BlogCardsData;

    return (
        <div>
            <BlogFilter
                allPostsCategory={allPostsCategory}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                setAnimationActive={setAnimationActive}
                contentSection={contentSection}
                data={data}
            />
            <section className='blog-filter-cards bg-white h-100 position-relative z-1' data-aos='fade-up' data-aos-easing="linear" data-aos-duration="500">
                <BlogCards
                    BlogCards={BlogCardsData}
                    selectedCategory={selectedCategory}
                    visiblePosts={visiblePosts}
                    loadMore={loadMore}
                    animationActive={animationActive}
                />
                {visiblePosts < filteredPosts?.length && (
                    <div className='d-flex justify-content-center' onClick={loadMore}>
                        <BookDemoBtn
                            title='Load More'
                        />
                    </div>
                )}
            </section>
        </div>
    )
}

export default BlogCardData
