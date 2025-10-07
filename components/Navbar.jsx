'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef();
  const openMenu = () =>{
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  const closeMenu = () =>{
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(scrollY > 40){
        setIsScroll(true);
      } else{
        setIsScroll(false);
      }
    })
  },[])

  return (
    <>
      {/* light mode background blob */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>

      {/* Navbar main */}
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
        ${isScroll ? 'bg-white bg-opacity-60 backdrop-blur-xl shadow-md dark:bg-darkTheme dark:shadow-white/20' : ''} 
        transition-all duration-500`}>
        
        {/* Logo */}
        <a href="#top" className='hover:opacity-80 transition'>
          <h1 className='name text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide'>
            Akarsh<span className='text-blue-500'>.</span>
          </h1> 
        </a>

        {/* Desktop menu */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 text-lg font-medium 
          ${isScroll ? '' : 'bg-white shadow-md bg-opacity-60 dark:border dark:border-white/40 dark:bg-transparent'} 
          transition-all duration-500`}>
          
          <li><a className='relative after:block after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all hover:after:w-full' href="#top">Home</a></li>
          <li><a className='relative after:block after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all hover:after:w-full' href="#about">About me</a></li>
          <li><a className='relative after:block after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all hover:after:w-full' href="#services">Services</a></li>
          <li><a className='relative after:block after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all hover:after:w-full' href="#work">Projects</a></li>
          <li><a className='relative after:block after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all hover:after:w-full' href="#contact">Contact me</a></li>
        </ul>

        {/* Right section */}
        <div className='flex items-center gap-4'>
          {/* Dark/Light mode toggle */}
          <button 
            onClick={()=>setIsDarkMode(prev => !prev)} 
            className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition'>
            <Image src={isDarkMode ? assets.sun_icon :assets.moon_icon} alt='' className='w-6' />
          </button>

          {/* Contact button */}
          <a className='hidden lg:flex items-center gap-3 px-8 py-2.5 border border-gray-500 rounded-full ml-4 font-medium hover:bg-gray-100 dark:border-white/50 dark:hover:bg-gray-800 transition' href="#contact">
            Contact <Image src={isDarkMode? assets.arrow_icon_dark : assets.arrow_icon} className='w-3' alt='arrow' />
          </a>

          {/* Mobile menu button */}
          <button className='block md:hidden ml-3'>
            <Image onClick={openMenu} src={isDarkMode? assets.menu_white :assets.menu_black} alt='' className='w-6 cursor-pointer hover:scale-110 transition' />
          </button>
        </div>

        {/* Mobile menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-6 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white shadow-2xl'>
          
          <div className='absolute right-6 top-6 hover:rotate-90 transition-transform' onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white :assets.close_black} alt='' className='w-5 cursor-pointer'/>
          </div>

          <li><a className='hover:text-blue-500 transition' onClick={closeMenu} href="#top">Home</a></li>
          <li><a className='hover:text-blue-500 transition' onClick={closeMenu} href="#about">About me</a></li>
          <li><a className='hover:text-blue-500 transition' onClick={closeMenu} href="#services">Services</a></li>
          <li><a className='hover:text-blue-500 transition' onClick={closeMenu} href="#work">Projects</a></li>
          <li><a className='hover:text-blue-500 transition' onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
