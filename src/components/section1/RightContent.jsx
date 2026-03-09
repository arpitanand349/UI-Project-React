import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className=' h-full flex rounded-4xl overflow-x-auto gap-6  w-2/3 p-6' >
      {props.users.map(function(e,idx){
        return <RightCard key={idx} id={idx}img={e.img} tag={e.tag}/>
      })}        
    </div>
  )
}

export default RightContent