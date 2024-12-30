import React, { useEffect } from 'react'
import Head from './Head'
import Location from './Location'
import Works from './Works'
import Prices from './Prices'
import Meetteam from './Meetteam'

export default function Home() {
  return (
    <main className='home'>
      <Head />
      <Location />
      <Works />
      <Prices />
      <Meetteam />
    </main>
  )
}
