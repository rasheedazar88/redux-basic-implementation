import React from 'react'
import { useState } from 'react'
import DestinationWrapper from './DestinationWrapper'
import Header from './Header'



import './style.css'

const AppComponent = (props) => {
  return (
    <React.Fragment>
        <Header />
        <DestinationWrapper destinations={props.destinations} />
    </React.Fragment>
  )
}

export default AppComponent



