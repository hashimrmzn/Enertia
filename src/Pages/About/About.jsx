import React from 'react'
import MainLayout from '../../layouts/MainLayout';
import AboutBanner from './AboutComponents/AboutBanner';
import DesignSection from './AboutComponents/DesignSection';
import Endure from './AboutComponents/Endure';
function About() {
  return (
    <>
    <MainLayout>
        <AboutBanner />
        <div className='container'> 
        <DesignSection />
        <Endure />
        </div>
    </MainLayout>
    </>
  )
}

export default About