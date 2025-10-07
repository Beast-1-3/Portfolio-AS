'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'
import './Header.css'

const Header = ({ isDarkmode }) => {
    return (
        <div className='header relative w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6'>
            
            {/* floating animated boxes */}
            <div className="box">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i}></div>
                ))}
            </div>

            {/* Profile image */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                className="relative"
            >
                <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 blur-md opacity-70 animate-pulse"></div>
                <Image 
                    src={assets.goku} 
                    alt='profile' 
                    className='relative rounded-full w-36 sm:w-40 border-4 border-gray-300 dark:border-gray-600 shadow-lg' 
                />
            </motion.div>

            {/* Greeting */}
            <motion.h3 
                initial={{ y: -20, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.6, delay: 0.3 }}
                className='flex items-end gap-2 text-xl md:text-2xl font-semibold mb-2'
            >
                Hi, I'm <span className="text-orange-500">Akarsh Kumar Singh</span>
                <Image src={assets.hand_icon} alt='wave' className='w-6 animate-bounce' />
            </motion.h3>

            {/* Main heading */}
            <motion.h1 
                initial={{ y: -30, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.8, delay: 0.5 }}
                className='text-3xl sm:text-5xl lg:text-[58px] font-extrabold leading-tight tracking-wide'
            >
                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                    Competitive Programmer
                </span> 
                <br /> and Web Developer based in India.
            </motion.h1>

            {/* Sub-text */}
            <motion.p 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 0.6, delay: 0.7 }}
                className='max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-lg leading-relaxed'
            >
                Feel free to explore my portfolio and discover my projects, skills, and passion for creating impactful work.
            </motion.p>

            {/* CTA Buttons */}
            <div className='flex flex-wrap items-center justify-center gap-5 mt-6'>
                <motion.a 
                    initial={{ y: 30, opacity: 0 }} 
                    whileInView={{ y: 0, opacity: 1 }} 
                    transition={{ duration: 0.6, delay: 0.6 }}
                    href="#contact" 
                    className='px-8 py-3 border rounded-full border-transparent text-white bg-gradient-to-r from-orange-500 to-pink-600 flex items-center gap-2 shadow-lg hover:scale-105 transition-transform'
                >
                    Contact Me
                    <Image src={assets.right_arrow_white} alt='arrow' className='w-4' />
                </motion.a>

                <motion.a 
                    initial={{ y: 30, opacity: 0 }} 
                    whileInView={{ y: 0, opacity: 1 }} 
                    transition={{ duration: 0.6, delay: 0.7 }}
                    href="/Resume.pdf" 
                    download 
                    className='px-8 py-3 border rounded-full border-gray-400 flex items-center gap-2 bg-white text-gray-800 dark:text-black shadow-md hover:bg-gray-100 transition'
                >
                    My Resume
                    <Image src={assets.download_icon} alt='download' className='w-4' />
                </motion.a>
            </div>
        </div>
    )
}

export default Header
