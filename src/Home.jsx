// import { SignInButton } from '@clerk/clerk-react'
// import React from 'react'
// import { Button } from './components/ui/button'

import Category from './components/Category'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import InfoSection from './components/InfoSection'
import MostSearchedCar from './components/MostSearchedCar'

function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Category */}
      <Category />

      {/* Most Seached Car */}
      <MostSearchedCar />

      {/* InfoSection */}
      <InfoSection />

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home
