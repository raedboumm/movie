import React, { useState } from 'react'
import Cardshow from './Cardshow'
import './style.css'
import popcorn from './popcorn.png'
import ticket from './Layer 2.png'

const App = () => {
  const [cnd,setcnd]= useState(true)
  return (
    <div className='outside'>
      <div className='popcorn' >
    <img src={popcorn} alt="popcorn"/>
</div>
<div className='ticket' style={{ opacity: cnd ? 1 : 0 }}>
    <img src={ticket} alt="ticket"/>
</div>
<div className='popcorntwo' >
    <img src={popcorn} alt="popcorn"/>
</div>

    <div className='center'>
      <button className='btn' onClick={()=> setcnd(!cnd)}> Cinema ticket 🎞️</button>
      {(cnd==false)? <div><Cardshow/></div> : ''
      }
    
    </div>
    </div>
  )
}

export default App