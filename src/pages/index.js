import React from 'react'
import '../assets/styles/main.min.css'
import Layout from '../layout';
import HeroSection from '../components/templates/home/HeroSection'
import DreamCards from '../components/templates/partial/DreamCards'
import HowItWork from '../components/templates/home/HowItWork'
import DisneyContent from '../components/templates/home/DisneyContent'
import BuildTeams from '../components/templates/partial/BuildTeams'
import TeamMakes from '../components/templates/partial/TeamMakes'

const index = () => {
  return (
    <>
      <Layout pageSlug="home">
        <HeroSection />
        <DreamCards pageType="index" isIndexPage={false} />
        <HowItWork />
        <DisneyContent />
        <BuildTeams isIndexPage={true} pageType="index" />
        <TeamMakes pageType="index" />
      </Layout>
    </>
  )
}

export default index

