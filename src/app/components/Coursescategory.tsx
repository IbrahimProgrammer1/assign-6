import React from 'react'

const Courses = () => {
  return (
    <div className='h-screen:'>
      <div className="text-center">
        <h1 className="text-[36px] md:text-[48px] font-bold">Explore Courses By Category</h1>
        <p className="text-[16px] md:text-[18px] mx-6 md:mx-20 mt-3">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6 md:px-20">
        <div className="bg-[#f7f7f7] flex p-4">
          <img src="/pen.svg" alt="Design & Development" />
          <div className="ml-4">
            <h1 className="font-semibold text-[18px] md:text-[20px]">Design & Development</h1>
            <p>50+ Courses Available</p>
          </div>
        </div>

        <div className="bg-[#f7f7f7] flex p-4">
          <img src="/volume.svg" alt="Marketing" />
          <div className="ml-4">
            <h1 className="font-semibold text-[18px] md:text-[20px]">Marketing</h1>
            <p>50+ Courses Available</p>
          </div>
        </div>

        <div className="bg-[#f7f7f7] flex p-4">
          <img src="/development.svg" alt="Development" />
          <div className="ml-4">
            <h1 className="font-semibold text-[18px] md:text-[20px]">Development</h1>
            <p>50+ Courses Available</p>
          </div>
        </div>

        <div className="bg-[#f7f7f7]  p-4 hidden lg:flex">
          <img src="/communication.svg" alt="Communication" />
          <div className="ml-4">
            <h1 className="font-semibold text-[18px] md:text-[20px]">Communication</h1>
            <p>50+ Courses Available</p>
          </div>
        </div>

        <div className="bg-[#f7f7f7]  p-4 hidden lg:flex">
          <img src="/communication.svg" alt="Digital Marketing" />
          <div className="ml-4">
            <h1 className="font-semibold text-[18px] md:text-[20px]">Digital Marketing</h1>
            <p>50+ Courses Available</p>
          </div>
        </div>

        <div className="bg-[#f7f7f7]  p-4 hidden lg:flex">
          <img src="/selfdev.svg" alt="Self Development" />
          <div className="ml-4">
            <h1 className="font-semibold text-[18px] md:text-[20px]">Self Development</h1>
            <p>50+ Courses Available</p>
          </div>
        </div>

        <div className="bg-[#f7f7f7]  p-4 hidden lg:flex">
          <img src="/business.svg" alt="Business" />
          <div className="ml-4">
            <h1 className="font-semibold text-[18px] md:text-[20px]">Business</h1>
            <p>50+ Courses Available</p>
          </div>
        </div>

        <div className="bg-[#f7f7f7]  p-4 hidden lg:flex">
          <img src="/finance.svg" alt="Finance" />
          <div className="ml-4">
            <h1 className="font-semibold text-[18px] md:text-[20px]">Finance</h1>
            <p>50+ Courses Available</p>
          </div>
        </div>

        <div className="bg-[#f7f7f7]  p-4 hidden lg:flex">
          <img src="/consulting.svg" alt="Consulting" />
          <div className="ml-4">
            <h1 className="font-semibold text-[18px] md:text-[20px]">Consulting</h1>
            <p>50+ Courses Available</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="bg-transparent border-black border-2 rounded p-2 px-5 hover:bg-gray-100">
          <a href="#">View All Courses</a>
        </button>
      </div>
    </div>
  )
}

export default Courses
