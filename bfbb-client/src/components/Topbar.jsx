import React, { useState, useEffect, useContext, createContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import NavLogo from '/img/bfbb-community-logo.png';


const MenuContext = createContext();

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  // const location = useLocation();
  // const currentPath = location.path;

  const toggleMenu = () => setIsOpen(!isOpen);


  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>
      <nav className='bg-[#010054] text-white flex p-[1rem] items-center overflow-hidden sticky top-0 min-h-[5rem] max-h-[4rem] w-full justify-between'>
        <img src={NavLogo} className='align-middle max-h-12'></img>
        <div className='hidden md:block font-bob text-xl'>
          <NavLink label='Home' route='/' />
          <NavLink label='Speedrunning' route='/speedrun' />
        </div>
        <MenuToggle />
      </nav>
      <MenuItems />
    </MenuContext.Provider>
  )
};

const NavLink = ({ label, route }) => {
  return (
    <Link to={route} ><p className={`text-center py-3 md:!py-0 md:!text-start md:!px-4 md:!inline `}>{label}</p></Link>
  );
};

const MenuToggle = () => {

  const { toggleMenu } = useContext(MenuContext);

  return (
    <div className='md:hidden bg-transparent border-none text-white text-[1.5rem]' onClick={toggleMenu}>
      <svg
        className='w-[2rem] h-[2rem]'
        fill='none'
        stroke='#FFFFFF'
        viewBox='0 0 24 24'
        xmlns='https://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M4 6h16M4 12h16M4 18h16'
        ></path>
      </svg>
    </div>
  );
};

const MenuItems = () => {

  const { isOpen } = useContext(MenuContext);
  // const location = useLocation();
  // const currentPath = location.pathname;
  // const { currentUser } = 

  return (
    <div className={`font-bob text-white transition-all duration-300 ease-in-out ${isOpen ? 'block !bg-[#02006C] sticky md:!flex !max-h-screen !opacity-100' : '!max-h-0 !opacity-0 pointer-events-none'}`}>
      <NavLink label='Home' route='/' />
      <hr className='border-t border-solid border-[#30303D]' />
      <NavLink label='Speedrunning' route='/speedrun' />
    </div>
  );
};

export { Topbar }
