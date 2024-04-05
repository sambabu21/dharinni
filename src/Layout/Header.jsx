import {NavLink,Link} from 'react-router-dom'
import { useState } from 'react'
import Logo from "../Images/DHARINNI.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { Disclosure,   } from '@headlessui/react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

export default function Header(){
    const [isActive,setIsActive] = useState(false)
    
    const setNavActive = () =>{
        if(window.scrollY >=200){
            setIsActive(true)
        }else{
            setIsActive(false)
        }
    }

    window.addEventListener("scroll",setNavActive)

    return ( 
    <motion.div animate={{ y:0 }} initial={{ y:-20}} transition={{duration:0.7 }}>
    <Disclosure as="nav" className={isActive?'w-full flex h-20 justify-around items-center z-20 fixed bg-gray-100 bg-opacity-30 bg-header backdrop-filter: blur(4px);':
             'w-full flex h-20 justify-around items-center z-20 fixed bg-stone-900 bg-opacity-40'}>
      {({ open }) => (
        <>
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 ">
            <div className="flex h-16 justify-center relative ">
              <div className="flex justify-between items-center  w-3/4">
                <div className="flex flex-shrink-0 items-center justify-center">
                <Link 
                    to="/"
                >
                    <img src={Logo} alt="logo" className='w-14 h-14'/>
                </Link>
                </div>
                <div className="hidden sm:ml-6 md:flex sm:space-x-4 -mr-20">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                    <NavLink
                        to="/"
                        className='nav__link text-sm sm:text-md lg:text-lg font-semibold leading-6 text-[#f9f8f4] mx-2 '
                    >
                        Home 
                    </NavLink>
                    <NavLink
                        to="/about"
                        className='nav__link text-sm sm:text-md lg:text-lg font-semibold leading-6 text-[#f9f8f4] mx-2 '
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className='nav__link text-sm sm:text-md lg:text-lg font-semibold leading-6 text-white mx-2 '
                    >
                        Projects 
                    </NavLink>
                    <NavLink
                        to="/events"
                        className='nav__link text-sm sm:text-md lg:text-lg font-semibold leading-6 text-[#E6C5AD] mx-2 '
                    >
                        Events 
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className='nav__link text-sm sm:text-md lg:text-lg font-semibold leading-6 text-[#E6C5AD] mx-2 '
                    >
                        Get Involved 
                    </NavLink>
                    
                    
                </div>
                
              </div>
              <div className='hidden md:flex md:flex-col gap-4 absolute top-[40vh] right-0 bg-black py-2 bg-opacity-20 rounded-md'>
                      <a >
                          <FontAwesomeIcon icon={faFacebook} className='w-8 h-8 mx-3 hover:cursor-pointer text-[#F8FAE5] hover:bg-[#F8FAE5] rounded-full hover:text-[#43766C]'/>
                      </a>
                      <a >
                        <FontAwesomeIcon icon={faSquareInstagram} className='w-8 h-8 mx-3 hover:cursor-pointer text-[#F8FAE5] hover:bg-[#F8FAE5] rounded-sm hover:text-[#43766C]'/>
                      </a>
                      <a >
                          <FontAwesomeIcon icon={faLinkedin} className='w-8 h-8 mx-3 hover:cursor-pointer text-[#F8FAE5] hover:bg-[#F8FAE5] rounded-sm hover:text-[#43766C]'/>
                      </a>
                    </div>
              
              <div className="-mr-2 flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="absolute right-10 inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#43766C]">
                  
                  {open ? (
                    <XMarkIcon className=" h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className=" h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden fixed top-20 w-full z-10 bg-[#2C3134] pb-2">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#F8FAE5] hover:border-[#43766C] hover:bg-[#F8FAE5] hover:text-[#2C3134]"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#F8FAE5] hover:border-[#43766C] hover:bg-[#F8FAE5] hover:text-[#2C3134]"
              >
                About Us
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/projects"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#F8FAE5] hover:border-[#43766C] hover:bg-[#F8FAE5] hover:text-[#2C3134]"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/events"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#F8FAE5] hover:border-[#43766C] hover:bg-[#F8FAE5] hover:text-[#2C3134]"
              >
                Events
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-[#F8FAE5] hover:border-[#43766C] hover:bg-[#F8FAE5] hover:text-[#2C3134]"
              >
                 Get Involved 
              </Disclosure.Button>
            </div>
            <div>
                      <a >
                          <FontAwesomeIcon icon={faFacebook} className='w-8 h-8 mx-3 hover:cursor-pointer text-[#F8FAE5] hover:bg-[#F8FAE5] rounded-full hover:text-[#2C3134]'/>
                      </a>
                      <a >
                        <FontAwesomeIcon icon={faSquareInstagram} className='w-8 h-8 mx-3 hover:cursor-pointer text-[#F8FAE5] hover:bg-[#F8FAE5] rounded-sm hover:text-[#2C3134]'/>
                      </a>
                      <a >
                          <FontAwesomeIcon icon={faLinkedin} className='w-8 h-8 mx-3 hover:cursor-pointer text-[#F8FAE5] hover:bg-[#F8FAE5] rounded-md hover:text-[#2C3134]'/>
                      </a>
                    </div>
            
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </motion.div>  
)}