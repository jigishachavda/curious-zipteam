import React from 'react'
import Layout from '../layout';
import SolutionHero from '../components/templates/solution/SolutionHero';
import BuildTeams from '../components/templates/partial/BuildTeams';
import TeamMakes from '../components/templates/partial/TeamMakes';
import SkillManagement from '../components/templates/partial/SkillManagement';
import QueAns from '../components/templates/partial/QueAns';
import GetStarted from '../components/templates/partial/GetStarted';
import WhereNext from '../components/templates/partial/WhereNext';

const solution = () => {
    return (
        <Layout pageSlug="solutions">
            <SolutionHero />
            <BuildTeams isIndexPage={false} pageType="solution" />
            <TeamMakes isIndexPage={false} pageType="solution" />
            <SkillManagement isIndexPage={true} accordionId="accordionExample" pageType="solution" />
            <QueAns accordionId="accordionPanelsStayOpenExample" pageType="solution" />
            <GetStarted pageType="solution" />
            <WhereNext pageType="solution" />
        </Layout>
    )
}

export default solution
