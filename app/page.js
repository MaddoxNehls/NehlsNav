"use client"

import GoogleMapSection from './../components/Home/GoogleMapSection'
import SearchSection from './../components/Home/SearchSection'
import { DestinationContext } from './../context/DestinationContext'
import { SourceContext } from './../context/SourceContext'
import { LoadScript, useJsApiLoader } from '@react-google-maps/api'
import { useState } from 'react'

export default function Home() {
  const [source,setSource]=useState([])
  const [destination,setDestination]=useState([])
  return (
    <SourceContext.Provider value={{source,setSource}}>
      <DestinationContext.Provider value={{destination,setDestination}}>
      <LoadScript 
      libraries={['places']}
      googleMapsApiKey={"AIzaSyAlIDUiTW6M9p6qb7mHsMCvqk0_OMO3MV0"}>
      <div className='p-6 grid grid-cols-1 md:grid-cols-3 gap-5'>
        <div>
            <SearchSection/>
            
        </div>
        <div className='col-span-2'>
            <GoogleMapSection/>
          </div>
      </div>
      </LoadScript>
      </DestinationContext.Provider>
    </SourceContext.Provider>
  )
}
