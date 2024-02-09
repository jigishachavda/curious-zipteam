import React from 'react'
import Layout from '../layout';
import ProductHero from '../components/templates/product/ProductHero';
import SkillSection from '../components/templates/product/SkillSection';
import SkillManagement from '../components/templates/partial/SkillManagement';
import CollectionData from '../components/templates/product/CollectionData';
import QueAns from '../components/templates/partial/QueAns';
import GetStarted from '../components/templates/partial/GetStarted';
import WhereNext from '../components/templates/partial/WhereNext';

const product = () => {
    return (
        <Layout headerColor={true} pageSlug="product">
            <ProductHero />
            <div className='background-height bg-white'>
                <SkillSection />
                <SkillManagement isIndexPage={false} accordionId="accordionPanelExample" pageType="product" />
                <CollectionData />
                <QueAns accordionId="accordionPanelsOpenExample" pageType="product" />
                <GetStarted pageType="product" />
                <WhereNext pageType="product" />
            </div>
        </Layout>
    )
}

export default product
