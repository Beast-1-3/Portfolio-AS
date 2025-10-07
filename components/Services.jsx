import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = ({ isDarkMode }) => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20" id="services">
      {/* Section Title */}
      <h4 className="text-center mb-2 text-lg text-gray-600 dark:text-gray-400">
        What I Offer
      </h4>
      <h2 className="text-center text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
        My Expertise
      </h2>

      {/* Description */}
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-700 dark:text-gray-300">
        I provide innovative solutions in web development, debugging, and UI/UX
        design, ensuring functional, error-free, and user-friendly digital
        experiences.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-14">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-600 rounded-2xl px-8 py-12 
                       transition-all duration-500 transform cursor-pointer 
                       hover:shadow-lg hover:scale-[1.02] hover:bg-lightHover 
                       dark:hover:bg-darkHover"
          >
            <Image src={icon} alt={title} className="w-12" />
            <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-6">
              {description}
            </p>
            <a
              href={link}
              className="flex items-center gap-2 text-sm mt-6 text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Read more
              <Image src={assets.right_arrow} alt="Arrow" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
