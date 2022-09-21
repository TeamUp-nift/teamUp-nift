import React, { useState } from 'react'
import styles from './nav.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../assets/Logo.svg'
import {MdSearch} from 'react-icons/md'
import {RiUser3Line} from 'react-icons/ri'
import Button from './Button'
//@dev - Alternate for a tag. In Next js we use Link for ref
// import {Link} from 'react-scroll'
//@dev - for smooth transition between tabs
import {Transition} from '@headlessui/react'

const Nav = () => {

    const [click, setClick] = useState(false)
    // const [dropdown, setDropdown] = useState(false)
    
    //this will open the navbar on mobile when you click
    const handleClick = () => setClick(!click);

    //this will close the navbar on mobile when you click the close menu icon
    const closeMobileMenu = () =>  setClick(false);

     return (
      <>
          <nav className="shadow-sm bg-gradient-to-r from-[#04091E] to-[#00D0CC] fixed w-full z-10">
            <div className="w-full">
              <div className="flex items-center h-20 w-full">
                {/* Block 1 on the Nav */}
                  <div className="flex items items-center mx-20 justify-between w-full">
                      <div className="flex justify-center items-center flex-shrink-0">
                         <Image src={logo} className="cursor-pointer text-xl" alt="NIFT LOGO" />
                      </div>
              {/* Search button is here */}
              <div className="relative hidden md:block">
               <form
               className="absolute md:static top-10 -left-20 "
               >
                 <button
                     className="absolute md:left-4 left-6 top-3 pl-1 
                     text-2xl text-white"
                    >
                      <MdSearch className="" />
                    </button>
                  <input 
                   type="text"
                    placeholder="Search items, collections, accounts"
                    className="p-3 pl-14 md:text-md font-regular placeholder:text-sm
                     focus:outline-none focus:border-1 w-[400px]
                     md:w-[330px] bg-gradient-to-r from-gray-500 to-gray-500 text-white
                     md:top-0"
                    />
                  </form>
                </div>
                      {/* md - medium device on mobile device, it will display this div as block */}
                      <div className="hidden md:block">
                          <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/Explore"
                             >
                              <span className="cursor-pointer rounded-2xl hover:bg-orange-400 text-white font-regular px-3 py-2 text-md hover:text-white">
                                Explore</span>
                            </Link>

                            <Link href="/Stats" 
                             >
                              <span className="cursor-pointer rounded-2xl hover:bg-orange-400 text-white font-regular px-3 py-2 text-md hover:text-white">
                                Stats</span>
                            </Link>

                               <Link href="/Resources">
                               <span className="cursor-pointer rounded-2xl hover:bg-orange-400 text-white font-regular px-3 py-2 text-md hover:text-white">
                                Resources</span>
                            </Link>

                               <Link href="/Community">
                              <span className="cursor-pointer rounded-2xl hover:bg-orange-400 text-white font-regular px-3 py-2 text-md hover:text-white">
                                Community
                               </span>
                            </Link>


                            <Link href="/Create">
                             <span className="cursor-pointer text-white px-5 py-2 rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 hover:to-yellow-500 ...">
                              Create
                              </span> 
                            </Link>
                            
                            {/* user button */}
                            <button className="px-3 text-white cursor-pointer">
                            <RiUser3Line className="" />
                            </button>
                            
                          </div>
                      </div>
                      
                  </div>
                  {/* Mobile Responsive begin here */}
                  <div className='mr-10 flex md:hidden'>
                       <button onClick={handleClick} type="button"
                        className='bg-orange-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-yellow-400 focus: outline-none focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white'
                         aria-controls='mobile-menu'
                         aria-expanded='false'
                        >
                         <span className='sr-only'>Open main menu</span>
                         {/* this svg is from w3 website */}
                         {!click ? (
                           <svg className='block h-6 w-6' 
                           xmlns='http:www.w3.org/2000/svg' 
                           fill='none' viewBox='0 0 24 24' 
                           stroke='currentColor' 
                           aria-hidden="true"
                           >
                              <path strokeLinecap='round' 
                              strokeLinejoin='round' 
                              strokeWidth='2' 
                              d="M4 6h16M4 12h16M4 18h16" //the menu shape
                              />
                           </svg>
                         ): (
                             <svg className='block h-6 w-6'
                              xmlns='http:www.w3.org/2000/svg' 
                              fill='none' viewBox='0 0 24 24' 
                              stroke='currentColor' 
                              aria-hidden="true"
                              >
                              <path 
                              strokeLinecap='round'
                               strokeLinejoin='round' 
                               strokeWidth='2'
                                d="M6 18L18 6M6 6l12 12" // the cross shape
                                 />
                           </svg>
                         )}
                       </button>
                  </div>
              </div>
            </div>
            <Transition show={click} 
             enter='transition ease-out duration-100 transform'
             enterFrom='opacity-0  scale-95'
             enterTo='opacity-100 scale-100'
             leave='transition ease-in duration-75 transform'
             leaveFrom='opacity-100 scale-100'
             leaveTo='opacity-0 scale-95'
            >
             
              {(ref) => (
                 //this will handle the mobile menu
                <div className='md:hidden id=mobile-menu'>
                  <div ref={ref} className='bg-gradient-to-r from-[#04091E] to-[#00D0CC] px-6 pt-10 pb-3 space-y-8 -top-3 sm:px-3'>
                    {/* Search button is here */}
              <div className="absolute md:block">
               <form className="relative md:static -top-8 left-3">
                  <button
                     className="absolute md:left-4 left-6 top-3 pl-1 
                     text-2xl text-white"
                    >
                      <MdSearch className="" />
                    </button>
               <input 
                   type="text"
                    placeholder="Search items, collections, accounts"
                    className="p-3 pl-14 md:text-md font-regular
                     focus:outline-none  w-[400px]
                     md:w-[350px] bg-gradient-to-r from-gray-500 to-gray-500 text-white
                     md:top-0"
                    />
               </form>
           </div>
           
                    <Link href='/Explore'>
                      <span  className='cursor-pointer hover:bg-orange-400 text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                        Explore
                      </span>
                    </Link>

                      <Link href='/Stats'>
                      <span  className='cursor-pointer hover:bg-orange-400 text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                        Stats
                      </span>
                    </Link>

                      <Link href='/Resources'>
                      <span  className='cursor-pointer hover:bg-orange-400 text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                        Resources
                      </span>
                    </Link>

                      <Link href='/Community'>
                      <span  className='cursor-pointer hover:bg-orange-400 text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                        Community
                      </span>
                    </Link>

                       <button className="px-3 text-white cursor-pointer">
                          <RiUser3Line className="" />
                      </button>
                  </div>
                </div>
              )}
            </Transition>
          </nav>
      </>
     )
}

export default Nav
