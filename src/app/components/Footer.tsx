import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className=''>
        <div className='lg:flex'>
<div className='flex-col'>

        <h1 className='text-center lg:ml-16 lg:mt-12 font-semibold text-[18px] lg:text-left'>Subscribe to our newsletter</h1>
        <p className='text-center text-[18px] mt-4 block lg:hidden '>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
        <p className='text-center lg:ml-16 lg:mt-3 text-[18px] mt-4 lg:m-0 hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
        <div className='flex-col lg:flex-row justify-center items-center mt-4 mx-7 lg:ml-[32rem] '>
            <input type="text" placeholder='Enter Email' className='border-[1px] border-black p-2 w-full lg:w-72 rounded ' />
            <button className='border-[1px] border-black rounded p-2 w-full mt-4 lg:w-40 lg:ml-3 lg:ml'>Subscribe</button>



            <h1 className='text-[12px] text-center mt-4 lg:text-start'>By subscribing you agree to with our <span className='underline'> Privacy Policy</span></h1>

        </div>
        </div>
        <div className='flex justify-center items-center mt-12 lg:justify-start lg:mt-12 lg:mx-20'>
            <img src="/logo.svg" alt="" />
        </div>
            <div className='flex flex-col justify-center items-center lg:flex-row lg:gap-x-80 lg:-mt-20 lg:ml-56'>
                <div>

                <h1 className='font-semibold mt-7 text-center'>Course</h1>
                <ul className='justify-center flex flex-col gap-y-4 mt-4'>
                    <li className='text-center'><a href="#">Business</a></li>
                    <li className='text-center'><a href="#">Development</a></li>
                    <li className='text-center'><a href="#">Technology</a></li>
                    <li  className='text-center'><a href="#">Design</a></li>
                    <li  className='text-center'><a href="#">Programming</a></li>
                </ul>
                </div>
                <div>

                <h1 className='font-semibold mt-9 text-center'>Resources</h1>
                <ul className='justify-center flex flex-col gap-y-4 mt-4'>
                    <li className='text-center'><a href="#">Career</a></li>
                    <li className='text-center'><a href="#">Resume</a></li>
                    <li className='text-center'><a href="#">Learning</a></li>
                    <li  className='text-center'><a href="#">Interview Preparation</a></li>
                    <li  className='text-center'><a href="#">Jobs</a></li>
                </ul>
                </div>
<div>

                <h1 className='font-semibold mt-9 text-center'>About Us</h1>
                <ul className='justify-center flex flex-col gap-y-4 mt-4'>
                    <li className='text-center'><a href="#">Contact</a></li>
                    <li className='text-center'><a href="#">Help/Support</a></li>
                    <li className='text-center'><a href="#">FAQ</a></li>
                    <li  className='text-center'><a href="#">Terms and Conditions</a></li>
                    <li  className='text-center'><a href="#">Partners</a></li>
                </ul>
</div>

            </div>
            <div className=' h-[1px] lg:w-[87rem] bg-black mt-12 lg:mr-10 lg:ml-10 mx-10 '></div>
            <div>
                <div className='lg:flex gap-x-12 lg:mx-10 lg:mt-6 justify-between lg:mr-20'>
                <h1 className='text-center'>2023 Ddsgnr. All right reserved.</h1>
                <ul className='flex text-[14px] gap-x-2 justify-center lg:gap-x-12 lg:-ml-[32rem]  '>
                    <li className='underline'><a href="#">Privacy Policy</a></li>
                    <li className='underline'><a href="#">Terms of Service</a></li>
                    <li className='underline'><a href="#">Cookies Settings</a></li>
                </ul>

                <div className='flex justify-center gap-x-4'>
                    <Image src="/facebook.svg" alt="" width={24} height={24} />
                    <Image src="/instagram.svg" alt="" width={24} height={24} />
                    <Image src="/twitter.svg" alt="" width={24} height={24} />
                    <Image src="/linkedin.svg" alt="" width={24} height={24} />
                </div>
                </div>
            </div>
    </div>
  )
}

export default Footer