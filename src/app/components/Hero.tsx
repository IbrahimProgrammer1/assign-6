import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row px-4 md:px-0 md:justify-between'>
                <div className='p-6 md:p-0 md:m-40'>
                    <h1 className='font-bold text-[38px] block lg:hidden  md:text-[3.5rem] leading-tight'>
                        Learn new skills  online with ease
                    </h1>
                    <h1 className='font-bold hidden lg:block text-[38px] md:text-[3.5rem] leading-tight'>
                        Learn new skills <br />  online with ease
                    </h1>
                    <p className='text-[13px] md:text-[1.125rem] block lg:hidden mt-4 md:mt-8'>
                        Discover a wide range of courses covering a <br className='hidden md:block' />
                        variety of subjects, taught by expert instructors.
                    </p>
                    <p className=' hidden lg:block text-[13px] md:text-[1.125rem] mt-4 md:mt-8'>
                        Discover a wide range of courses covering a variety of <br />
                         subjects, taught by expert instructors. Ibrahim
                    </p>
                    <div className='mt-6 md:mt-8 flex flex-col sm:flex-row gap-4'>
                        <button className='w-full sm:w-auto'>
                            <a href="#" className='inline-block w-full bg-black rounded text-white px-6 py-3 text-center hover:bg-gray-800'>
                                Start learning now
                            </a>
                        </button>
                        <button className='w-full sm:w-auto'>
                            <a href="#" className='inline-block w-full bg-transparent border-black border-2 rounded px-6 py-3 text-center hover:bg-gray-100'>
                                Explore Courses
                            </a>
                        </button>
                    </div>
                </div>

                <div className='mt-8 md:mt-0'>
                    <Image
                        src="/girl.svg"
                        alt="Student with book"
                        width={500}
                        height={600}
                        className='w-full h-auto'
                        priority
                    />
                </div>
            </div>

            <div className='bg-[#f7f7f7] mt-8 md:mt-0 px-4 md:px-10 py-8'>
                <div className='flex flex-col md:flex-row md:justify-between md:items-center max-w-7xl mx-auto'>
                    <h2 className='font-bold text-[18px] md:text-[24px] mb-6 md:mb-0'>
                        Trusted by the world's best companies <br />
                        <br className='hidden md:block' />
                        <span className='sm:hidden lg:visible'>

                        [social proof to build credibility]
                        </span>
                    </h2>
                    <div className='w-full md:w-auto overflow-hidden'>
                        <div className='flex gap-8 min-w-max md:min-w-0'>
                            <Image
                                src="/companies.svg"
                                alt="Trusted Companies"
                                width={500}
                                height={50}
                                className='h-8 md:h-auto w-auto'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero