import React, { FC } from 'react'

interface TechCardProps{
    tech:string
}

const TechCard:FC<TechCardProps> = ({
    tech
}) => {
  return (
    <div className='
        border 
        px-3 
        py-2 
        shadow-inner
        shadow-white 
        hover:shadow-sm
        hover:shadow-white
        hover:scale-105
        cursor-pointer
        transition
        rounded-full
        '>
        <h1 className='text-center whitespace-nowrap text-xs'>
            {tech}
        </h1>
    </div>
  )
}

export default TechCard