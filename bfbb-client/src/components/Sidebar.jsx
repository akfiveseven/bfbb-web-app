import { useState } from "react";
import { Text } from "../components/Typography";
import { PageContent } from "../components/PageContent";

const Sidebar = ({ children, menu }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className='
          md:hidden 
          bg-[#010054] 
          text-white 
          flex 
          p-[1rem] 
          items-center 
          overflow-hidden 
          top-[5rem] 
          min-h-[2rem] 
          w-full 
          sticky
          justify-between
          z-10 
          border-t-2
          border-b-2
          border-gray-800
          '
      >

        <div className='flex items-center' onClick={() => setIsOpen(!isOpen)}>
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
          &nbsp;
          &nbsp;


          <Text className='font-mono text-base !text-gray-400'>Speedrun &gt;</Text>
          <Text className='font-mono text-base text-yellow'>&nbsp;Strats</Text>

        </div>

      </nav>

      {/* small screen sizes */}
      <div className="flex min-h-[calc(100vh-9rem)] md:hidden z-0">
        <div className={`font-bob bg-[#010035] ${isOpen ? "w-48 p-8 pt-8" : "w-0"} duration-300`}>

          {menu === 'speedrun' &&
            <div className={`${isOpen ? "sticky" : "hidden"} font-bob text-md`}>
              <Text className=''>Strats</Text>
              <hr className='border-t border-solid border-[#30303D] my-4' />
              <Text className=''>Routes</Text>
              <hr className='border-t border-solid border-[#30303D] my-4' />
              <Text className=''>Guides</Text>
              <hr className='border-t border-solid border-[#30303D] my-4' />
              <Text className=''>Glossary</Text>
              <hr className='border-t border-solid border-[#30303D] my-4' />
              <Text className=''>Resources</Text>
            </div>
          }


        </div>

        <div className='flex-1 overflow-auto max-h-[calc(100vh-9rem)]'>
          {children}
        </div>
      </div>

      <div className='hidden md:flex min-h-[calc(100vh-5rem)]'>
        <div className={`font-bob bg-[#010035] pt-8`}>

          {menu === 'speedrun' &&
            <div className={`font-bob px-8`}>
              <Text className=''>Strats</Text>
              <hr className='border-t border-solid border-[#30303D] my-4' />
              <Text className=''>Routes</Text>
              <hr className='border-t border-solid border-[#30303D] my-4' />
              <Text className=''>Guides</Text>
              <hr className='border-t border-solid border-[#30303D] my-4' />
              <Text className=''>Glossary</Text>
              <hr className='border-t border-solid border-[#30303D] my-4' />
              <Text className=''>Resources</Text>
            </div>
          }

        </div>

        <div className='flex-1 overflow-auto !max-h-[calc(100vh-5rem)]'>
          {children}
        </div>

      </div>
    </>
  );
};

export { Sidebar }
