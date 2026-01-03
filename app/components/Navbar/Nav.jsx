import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='flex gap-x-3 text-2xl mt-5'>
      <Link href={'/'}>home</Link> 
         <Link href={'/product'}>product</Link> 
            <Link href={'/about'}>about</Link> 
    </div>
  )
}

export default Nav
