import React from 'react'
import { usePageBuilder } from '../../hooks/pages/usePageBuilder';
import HeroSection from './home/HeroSection';
import HowItWork from './home/HowItWork';
import DreamCards from './partial/DreamCards';
import DisneyContent from './home/DisneyContent';
import BuildTeams from './partial/BuildTeams';
import GetStarted from './partial/GetStarted';
import QueAns from './partial/QueAns';
import TeamMakes from './partial/TeamMakes';
import SolutionHero from './solution/SolutionHero';
import WhereNext from './partial/WhereNext';
import PricingTables from './pricing/PricingTables';
import ProductHero from './product/ProductHero';
import SkillManagement from './partial/SkillManagement';
import Divider from '../ui/Divider';
import CollectionData from './product/CollectionData';
import BlogCardData from './blog/BlogCardData';
import IframeBlock from './partial/IframeBlock';
import PrivacyBlock from './privacy/PrivacyBlock';
import BlogFeature from './blog/BlogFeature';

const ContentSection = ({ pageSlug }) => {
    const data = usePageBuilder();
    const nodes = data?.allWpPage?.nodes;


    const contentSections = nodes.find(e => e.slug === pageSlug)?.ACF_builderpage?.contentSection;

    const loadDynamicContent = (dynamicContentSection) => {
        switch (true) {
            case dynamicContentSection.fieldGroupName === 'page_AcfBuilderpage_ContentSection_HeroSection':
                return <HeroSection contentSection={dynamicContentSection} />;

            case dynamicContentSection.fieldGroupName === 'page_AcfBuilderpage_ContentSection_TabSection':
                return <HowItWork contentSection={dynamicContentSection} />;

            case dynamicContentSection.fieldGroupName === 'page_AcfBuilderpage_ContentSection_ZipteamSection':
                return <DisneyContent contentSection={dynamicContentSection} />;

            case dynamicContentSection.fieldGroupName === 'page_AcfBuilderpage_ContentSection_MakeDream':
                return <DreamCards contentSection={dynamicContentSection} />;

            case dynamicContentSection.fieldGroupName === 'page_AcfBuilderpage_ContentSection_BuildTeams':
                return <BuildTeams contentSection={dynamicContentSection} />;

            case dynamicContentSection.fieldGroupName === 'page_AcfBuilderpage_ContentSection_ReadGetStarted':
                return <GetStarted contentSection={dynamicContentSection} />;

            case dynamicContentSection.fieldGroupName === 'page_AcfBuilderpage_ContentSection_Accordion':
                return <QueAns accordionId="accordionPanelsOpenExample" contentSection={dynamicContentSection} />;

            case dynamicContentSection.fieldGroupName === 'page_AcfBuilderpage_ContentSection_SolutionsForStartups':
                return <SolutionHero contentSection={dynamicContentSection} />;

            case dynamicContentSection.fieldGroupName === 'page_AcfBuilderpage_ContentSection_WhereToNext':
                return <WhereNext contentSection={dynamicContentSection} />;

            case dynamicContentSection.fieldGroupName === 'page_AcfBuilderpage_ContentSection_PricingTable':
                return <PricingTables contentSection={dynamicContentSection} />;

            case dynamicContentSection.fieldGroupName === 'page_AcfBuilderpage_ContentSection_PrimaryHeroSection':
                return <ProductHero contentSection={dynamicContentSection} />;

            case dynamicContentSection.hasOwnProperty('selectFeaturePost'):
                return <BlogFeature contentSection={dynamicContentSection} />;

            case dynamicContentSection.fieldGroupName === 'page_AcfBuilderpage_ContentSection_LeftRightImageContent':
                return <TeamMakes contentSection={dynamicContentSection} />;

            case dynamicContentSection.fieldGroupName === 'page_AcfBuilderpage_ContentSection_LeftRightAccordion':
                return <SkillManagement accordionId="accordionPanelExample" contentSection={dynamicContentSection} />;

            case dynamicContentSection.fieldGroupName === 'page_AcfBuilderpage_ContentSection_CollectData':
                return <CollectionData accordionId="accordionPanelExample" contentSection={dynamicContentSection} />;

            case dynamicContentSection.fieldGroupName === 'page_AcfBuilderpage_ContentSection_Spacing':
                return <Divider contentSection={dynamicContentSection} />;

            case dynamicContentSection.fieldGroupName === 'page_AcfBuilderpage_ContentSection_AllPost':
                return <BlogCardData contentSection={dynamicContentSection} />;

            case dynamicContentSection.fieldGroupName === 'page_AcfBuilderpage_ContentSection_IframeBlock':
                return <IframeBlock contentSection={dynamicContentSection} />;

            case dynamicContentSection.fieldGroupName === 'page_AcfBuilderpage_ContentSection_PrivacyBlock':
                return <PrivacyBlock contentSection={dynamicContentSection} />;

            default:
                return '';
        }
    }
    return (
        <div>
            {contentSections?.map((dynamicContentSection, i) => (
                <div key={i}>
                    {loadDynamicContent(dynamicContentSection)}
                </div>
            ))}
        </div>
    )
}
export default ContentSection
