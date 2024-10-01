import React from 'react'
import '../assets/styles/main.min.css'
import Layout from '../layout';
import ContentSection from '../components/templates/ContentSection';

const index = () => {
  return (
    <>
      <Layout pageSlug={'home'}>
        <ContentSection pageSlug={'home'} />
      </Layout>
    </>
  )
}

export default index