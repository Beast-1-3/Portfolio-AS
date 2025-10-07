
import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import './Work.css';


const Work = ({ isDarkMode }) => {
    // Animation variants for each card
    const variants = [
        { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 } },
        { initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 } },
        { initial: { opacity: 0, y: -40 }, whileInView: { opacity: 1, y: 0 } },
        { initial: { opacity: 0, x: 40 }, whileInView: { opacity: 1, x: 0 } },
    ];

    return (
        <div className="w-full px-[12%] py-14 scroll-mt-20" id="work">
            {/* Headings */}
            <h4 className="text-center mb-2 text-lg text-gray-500">My Portfolio</h4>
            <h2 className="text-center text-5xl font-bold">My Latest Work</h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 dark:text-gray-300">
                Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in full-stack development.
            </p>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-14">
                {workData.map((project, index) => {
                    const animation = variants[index % variants.length];
                    return (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className="group"
                        >
                            <motion.div
                                initial={animation.initial}
                                whileInView={animation.whileInView}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                className="relative w-full aspect-square flex items-end justify-center bg-no-repeat bg-cover bg-center rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
                                style={{ backgroundImage: `url(${project.bgImage})` }}
                            >
                                {/* Glassmorphism Overlay Card */}
                                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-11/12 backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/30 dark:border-gray-700/40 rounded-xl py-4 px-6 flex items-center justify-between shadow-lg transition-all duration-500 group-hover:bottom-7" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'}}>
                                    <div>
                                        <h2 className="font-semibold text-gray-900 dark:text-white">{project.title}</h2>
                                        <p className="text-sm text-gray-700 dark:text-gray-200">{project.description}</p>
                                    </div>
                                    <div className="border rounded-full border-black dark:border-white w-10 h-10 flex items-center justify-center group-hover:bg-lime-300/70 transition-colors shadow-md bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm">
                                        <Image src={assets.send_icon} alt="" className="w-5 dark:invert" />
                                    </div>
                                </div>
                            </motion.div>
                        </a>
                    );
                })}
            </div>

            {/* Show More Button */}
            <a
                className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-700 rounded-full py-3 px-10 mx-auto mt-10 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
                target="_blank"
                href="https://github.com/Beast-1-3"
            >
                Show more
                <Image
                    src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
                    alt=""
                    className="w-4"
                />
            </a>
        </div>
    );
};

export default Work;
