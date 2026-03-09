import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 rounded-4xl shrink-0 relative overflow-hidden'>
        <img className='h-full w-full object-cover'  src={props.img} alt="" />
        <RightCardContent tag={props.tag} id={props.id}/>
    </div>
  )
}

export default RightCard