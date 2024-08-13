import React, { useState, useEffect, useContext, createContext } from 'react';
import { Link } from 'react-router-dom';

import NavLogo from '/img/bfbb-community-logo.png';


const MenuContext = createContext();

const Topbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);


  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>

      <nav className='
          bg-[#010054] 
          text-white 
          flex 
          p-[1rem] 
          items-center 
          overflow-hidden 
          sticky 
          top-0 
          min-h-[5rem] 
          w-full 
          justify-between 
          z-10
        '
      >
        <img src={NavLogo} className='align-middle max-h-12'></img>

        <div className='hidden md:block font-bob text-xl items-center justify-center'>
          <NavLink label='Home' route='/' />
          <NavLink label='Speedrunning' route='/speedrun' />
          <button className='ml-4 text-center font-bob text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-base px-5 py-2.5 focus:outline-none'>Login</button>
        </div>

        <MenuToggle />

      </nav>

      <MenuItems />

    </MenuContext.Provider>
  )
};

const NavLink = ({ label, route }) => {
  return (
    <Link to={route} >
      <p className={`
          text-center 
          py-3 
          md:!py-0 
          md:!text-start 
          md:!px-4 
          md:!inline 
        `
      }>
        {label}
      </p>
    </Link>
  );
};

const MenuToggle = () => {

  const { toggleMenu } = useContext(MenuContext);

  return (
    <div
      className='md:hidden bg-transparent border-none text-white text-[1.5rem]'
      onClick={toggleMenu}>
      <svg
        className='w-[2rem] h-[2rem]'
        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="6" r="2" fill="currentColor" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <circle cx="12" cy="18" r="2" fill="currentColor" />
      </svg>
    </div>
  );
};

const MenuItems = () => {

  const { isOpen } = useContext(MenuContext);

  return (
    <div className={`
        font-bob 
        text-white 
        transition-all 
        duration-300 
        ease-in-out 
        ${isOpen ?
        'block md:!hidden !bg-[#010035] sticky md:!flex !max-h-screen !opacity-100' :
        'block !md:hidden !max-h-0 !opacity-0 pointer-events-none'
      }
      `
    }>

      <hr className='border-t border-solid border-[#30303D]' />
      <NavLink label='Home' route='/' />
      <hr className='border-t border-solid border-[#30303D]' />
      <NavLink label='Speedrunning' route='/speedrun' />
      <hr className='border-t border-solid border-[#30303D]' />

    </div>
  );
};

export { Topbar }
