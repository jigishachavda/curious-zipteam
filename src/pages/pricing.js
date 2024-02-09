import React from 'react';
import Layout from '../layout';
import DreamCards from '../components/templates/partial/DreamCards';
import PricingTables from '../components/templates/pricing/PricingTables';
import QueAns from '../components/templates/partial/QueAns';

function Pricing() {
    return (
        <Layout pageSlug="pricing">
            <PricingTables />
            <QueAns accordionId="accordionOpenExample" pageType="pricing" />
            <DreamCards pageType="pricing" isIndexPage={false} extraClass='blog-related bg-white position-relative z-1' />
        </Layout>
    );
}

export default Pricing;
