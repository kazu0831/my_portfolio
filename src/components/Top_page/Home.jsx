import React from 'react'
import Subtitle from './Subtitle'
import Title from './Title'
import Objects from './Objects'

function Home() {
  return (

    <div className='flex bg-gradient-to-r from-blue-500 to-purple-500'>
      
      <div className='flex flex-col justify-center items-center w-1/2 h-screen'>

        <Title />
        <Subtitle text="I'm Kazu / passinate about front-end" delay={100}/>
        
      </div>

      <div className='flex flex-col justify-center items-center w-1/2 h-screen'>

        <Objects />
        
      </div>

    </div>
  )
}

export default Home
