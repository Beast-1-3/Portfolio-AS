import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`mt-20 ${isDarkMode ? 'bg-black text-gray-300' : 'bg-gray-100 text-gray-800'} rounded-t-2xl shadow-lg`}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Name + Email */}
        <div className="text-center">
          <h1 className="name text-5xl sm:text-6xl font-bold mb-6 tracking-wide">
            Akarsh<span className="text-blue-500">.</span>
          </h1>

          <div className="w-max flex items-center gap-3 mx-auto bg-opacity-20 rounded-full px-4 py-2 transition-colors hover:bg-opacity-30 cursor-pointer">
            <Image
              src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
              alt="mail"
              className="w-6 h-6"
            />
            <span className="text-lg">akarsh7376@gmail.com</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-500/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="opacity-70">&copy; {new Date().getFullYear()} Akarsh. All rights reserved.</p>
          
          <ul className="flex items-center gap-8 text-base font-medium">
            <li>
              <a 
                target="_blank" 
                href="https://github.com/Beast-1-3"
                className="transition hover:text-blue-500"
              >
                Github
              </a>
            </li>
            <li>
              <a 
                target="_blank" 
                href="https://www.linkedin.com/in/akarsh-singh-607207257/"
                className="transition hover:text-blue-500"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
