import NavbarLi from '@/app/components/NavbarLi';
import Link from 'next/link';
import React from 'react'

const Country = () => {
  return (
    <div className='m-4 text-center mb-2'>
    
     <h1 className='text-white text-2xl border-2 p-2 bg-purple-400 m-4'>List Of Countries</h1>
      <NavbarLi href="/country/pakistan" name='Pakistan'/>
      <NavbarLi href="/country/south_korea" name='South Korea'/>
      <NavbarLi href="/country/london" name='London'/>
      <NavbarLi href="/country/turkey" name='Turkey'/>
      <NavbarLi href="/country/paris" name='Paris'/>
    </div>
  )
}

export default Country;
