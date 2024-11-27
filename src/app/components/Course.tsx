import React from 'react';
import Image from 'next/image';

const Course = () => {
  return (
    <div className='px-4 lg:px-8'>
      <h1 className='text-4xl lg:text-6xl font-bold text-center'>Courses</h1>
      <p className='text-lg lg:text-2xl text-center mt-7'>Your Ultimate Guide to Learning</p>
      <ul className='flex flex-wrap gap-x-8 gap-y-4 justify-center mt-10 lg:mt-16 text-[16px] lg:text-[18px] mb-6'>
        <li>
          <a
            href="#"
            className="text-black after:content-[''] after:block after:h-[2px] after:bg-black after:w-0 after:mx-auto after:transition-all after:duration-300 hover:after:w-full"
          >
            Popular
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black after:content-[''] after:block after:h-[2px] after:bg-black after:w-0 after:mx-auto after:transition-all after:duration-300 hover:after:w-full"
          >
            Recommended
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-black after:content-[''] after:block after:h-[2px] after:bg-black after:w-0 after:mx-auto after:transition-all after:duration-300 hover:after:w-full"
          >
            Best Price
          </a>
        </li>
      </ul>

      <div className='flex flex-wrap gap-8 justify-center'>
        <div className='w-full sm:w-[300px] md:w-[360px] lg:w-[416px] bg-[#f7f7f7] rounded-lg'>
          <Image src="/ui.svg" alt="" width={416} height={300} className="rounded-lg w-full h-auto" />
          <div className='flex justify-between p-4'>
            <h1 className='text-[16px]'>Design</h1>
            <div className='flex items-center gap-1'>
              <Image src="/star.svg" alt="" width={24} height={24} className='cursor-pointer' />
              <h1 className='text-[16px]'>5.0</h1>
            </div>
          </div>
          <h1 className='font-bold text-[20px] ml-4'>UI/UX Design 201</h1>
          <p className='text-[14px] ml-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          <div className='flex justify-between p-4'>
            <button className='border-2 border-black rounded px-5 py-3'>Enroll Now</button>
            <h1 className='mt-3'>400$</h1>
          </div>
        </div>

        <div className='w-full sm:w-[300px] md:w-[360px] lg:w-[416px] bg-[#f7f7f7] rounded-lg'>
          <Image src="/python.svg" alt="" width={416} height={300} className="rounded-lg w-full h-auto" />
          <div className='flex justify-between p-4'>
            <h1 className='text-[16px]'>Programming</h1>
            <div className='flex items-center gap-1'>
              <Image src="/star.svg" alt="" width={24} height={24} className='cursor-pointer' />
              <h1 className='text-[16px]'>5.0</h1>
            </div>
          </div>
          <h1 className='font-bold text-[20px] ml-4'>Introduction to Python</h1>
          <p className='text-[14px] ml-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          <div className='flex justify-between p-4'>
            <button className='border-2 border-black rounded px-5 py-3'>Enroll Now</button>
            <h1 className='mt-3'>400$</h1>
          </div>
        </div>
        <div className='w-full sm:w-[300px] md:w-[360px] lg:w-[416px] bg-[#f7f7f7] rounded-lg'>
          <Image src="/dataana.svg" alt="" width={416} height={300} className="rounded-lg w-full h-auto" />
          <div className='flex justify-between p-4'>
            <h1 className='text-[16px]'>Business</h1>
            <div className='flex items-center gap-1'>
              <Image src="/star.svg" alt="" width={24} height={24} className='cursor-pointer' />
              <h1 className='text-[16px]'>5.0</h1>
            </div>
          </div>
          <h1 className='font-bold text-[20px] ml-4'>Data Analysis for Beginners</h1>
          <p className='text-[14px] ml-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          <div className='flex justify-between p-4'>
            <button className='border-2 border-black rounded px-5 py-3'>Enroll Now</button>
            <h1 className='mt-3'>400$</h1>
          </div>
        </div>
        <div className='w-full sm:w-[300px] md:w-[360px] lg:w-[416px] bg-[#f7f7f7] rounded-lg hidden lg:block'>
          <Image src="/art.svg" alt="" width={416} height={300} className="rounded-lg w-full h-auto" />
          <div className='flex justify-between p-4'>
            <h1 className='text-[16px]'>Art</h1>
            <div className='flex items-center gap-1'>
              <Image src="/star.svg" alt="" width={24} height={24} className='cursor-pointer' />
              <h1 className='text-[16px]'>5.0</h1>
            </div>
          </div>
          <h1 className='font-bold text-[20px] ml-4'>Art Specialization</h1>
          <p className='text-[14px] ml-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          <div className='flex justify-between p-4'>
            <button className='border-2 border-black rounded px-5 py-3'>Enroll Now</button>
            <h1 className='mt-3'>400$</h1>
          </div>
        </div>
        <div className='w-full sm:w-[300px] md:w-[360px] lg:w-[416px] bg-[#f7f7f7] rounded-lg hidden lg:block'>
          <Image src="/law.svg" alt="" width={416} height={300} className="rounded-lg w-full h-auto" />
          <div className='flex justify-between p-4'>
            <h1 className='text-[16px]'>Law</h1>
            <div className='flex items-center gap-1'>
              <Image src="/star.svg" alt="" width={24} height={24} className='cursor-pointer' />
              <h1 className='text-[16px]'>5.0</h1>
            </div>
          </div>
          <h1 className='font-bold text-[20px] ml-4'>Rule of Law</h1>
          <p className='text-[14px] ml-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          <div className='flex justify-between p-4'>
            <button className='border-2 border-black rounded px-5 py-3'>Enroll Now</button>
            <h1 className='mt-3'>400$</h1>
          </div>
        </div>
        <div className='w-full sm:w-[300px] md:w-[360px] lg:w-[416px] bg-[#f7f7f7] rounded-lg hidden lg:block'>
          <Image src="/webflow.svg" alt="" width={416} height={300} className="rounded-lg w-full h-auto" />
          <div className='flex justify-between p-4'>
            <h1 className='text-[16px]'>Tech</h1>
            <div className='flex items-center gap-1'>
              <Image src="/star.svg" alt="" width={24} height={24} className='cursor-pointer' />
              <h1 className='text-[16px]'>5.0</h1>
            </div>
          </div>
          <h1 className='font-bold text-[20px] ml-4'>Introduction to webflow</h1>
          <p className='text-[14px] ml-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
          <div className='flex justify-between p-4'>
            <button className='border-2 border-black rounded px-5 py-3'>Enroll Now</button>
            <h1 className='mt-3'>400$</h1>
          </div>
        </div>
      </div>

      <div className='text-center mt-12'>
        <button className='border-2 border-black rounded px-5 py-3 hover:bg-slate-100'>
          View All Courses
        </button>
      </div>
    </div>
  );
}

export default Course;
