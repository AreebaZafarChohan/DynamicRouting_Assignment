import React from 'react'
import NavbarLi from './NavbarLi';

const Header = () => {
  return (
    <div>
      <ul className='flex flex-row space-x-6 m-8 justify-center items-center bg-pink-600 h-16 text-lg text-white'>
        <NavbarLi href='/' name='Home' />
        <NavbarLi href='/country' name='Country' />
      </ul>
    </div>
  );
};

export default Header;
