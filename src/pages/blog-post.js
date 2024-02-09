import React from 'react'
import BlogHero from '../components/templates/blog/BlogHero'
import BlogCards from '../components/templates/blog/BlogCards'
import Layout from '../layout'
import BlogCardData from '../components/templates/blog/BlogCardData'

const blogPost = () => {
    return (
        <>
            <Layout pageSlug="blog">
                <BlogHero />
                <BlogCardData />
            </Layout>
        </>
    )
}

export default blogPost