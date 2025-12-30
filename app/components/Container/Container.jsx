"use client"
import React from 'react'

function Container({children}) {
  return (
    <div className='max-w-[1320px] mx-auto px-5 xl:px-0'>
      {children}
    </div>
  )
}

export default Container
