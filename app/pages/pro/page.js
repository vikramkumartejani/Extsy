import Hero from '@/app/components/ProPage/Hero'
import MarketTrend from '@/app/components/ProPage/MarketTrend'
import React from 'react'

const page = () => {
  return (
    <div className='w-full max-w-full mx-auto px-4'>
      <Hero/>
      <MarketTrend/>
    </div>
  )
}

export default page