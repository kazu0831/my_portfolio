import React from 'react'
import MediaQuery from 'react-responsive'
import Mobile from './Mobile'
import Desktop from './Pc'

function Home() {
  return (
    <>
      <MediaQuery query='(min-width:768px)'>
        <Desktop />
      </MediaQuery>

      <MediaQuery query='(max-width: 767px)'>
        <Mobile />
      </MediaQuery>
    </>
  )
}

export default Home
