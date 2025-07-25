import React from 'react'
import MainLayout from '../../layouts/MainLayout';
import AboutBanner from './AboutComponents/AboutBanner';
import DesignSection from './AboutComponents/DesignSection';
function About() {
  return (
    <>
    <MainLayout>
        <AboutBanner />
        <div className='container'> 
        <DesignSection />
        </div>
    </MainLayout>
    </>
  )
}

export default About