import React from 'react'
import Hero from './components/Hero'
import Newest from './components/Newest'
import Head from './components/head'

export const dynamic = 'force-dynamic'

function page() {
  return (
    <div className='bg-white pb-6 sm:pb-8 lg:pb-12'>
      <Head />
      <Hero />
      <Newest />
    </div>
  )
}

export default page