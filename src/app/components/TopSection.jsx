"use client"
import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';


const TopSection = () => {
    return (
        <section className='lg:py-16' id='home'>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold'
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">Hello, I{`'`}m{' '}</span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Rohit',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Full-Stack Developer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={25}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl'>I am a motivated and versatile individual, always eager to take on new challenges.</p>
                    <div>
                        <ScrollLink
                            to='email' 
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            duration={700}
                        >
                            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white'>Hire Me</button>
                        </ScrollLink>
                        <Link
                            href={'https://drive.google.com/file/d/1vD8_3BQgBeNbO-u0JWlO3tSINfWisfyw/view'}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <button
                                
                                className='px-1 py-1 w-full sm:w-fit mt-3 rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white'
                            >
                                <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download Resume</span>
                            </button>
                        </Link>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-5 place-self-center mt-8 sm:mt-0 relative w-[235px] h-[235px] lg:w-[330px] lg:h-[330px]"
                >
                    <Image
                        src='/images/portfolio_picture.jpeg' alt='myImage'
                           className="rounded-full object-cover object-[50%_35%] border-4 border-[#854ce6]"
                        fill={true}
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default TopSection;