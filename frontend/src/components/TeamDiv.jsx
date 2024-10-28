import React from 'react'


const TeamDiv = ({image, name}) => {
  return (
    <div className='flex gap-4 border border-white p-2 rounded items-center'>
       <img src={image} alt='' className='w-[60px] h-[60px] rounded-full border '/> 
       <h1 className='text-white font-bold'>{name}</h1>
    </div>
  )
}

export default TeamDiv