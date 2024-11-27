import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
    <div className='mt-16 bg-[#f7f7f7]'>
        <h1 className='text-center text-5xl font-bold'>Our Team</h1>
        <p className='text-center text-[18px] mt-4 mx-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <div className='flex flex-col lg:flex-row gap-x-80  lg:justify-center lg:items-center lg:flex-wrap lg:gap-y-40'>
            <div className='flex flex-col justify-center items-center mt-12'>
                <Image src="/james.svg" alt="" width={80} height={80}/>
                <h1 className='font-semibold text-[20px] mt-2'>James Nduku </h1>
                <p className='mt-2'>Marketing Coordinator</p>
                <div className='flex gap-x-5 mt-6'>
                    <Image src="linkedin.svg" alt="" width={22} height={22}/>
                    <Image src="twitter.svg" alt="" width={22} height={22}/>
                    <Image src="website.svg" alt="" width={22} height={22}/>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center mt-12'>
                <Image src="/joseph.svg" alt="" width={80} height={80}/>
                <h1 className='font-semibold text-[20px] mt-2'>Joseph Munyambu </h1>
                <p className='mt-2'>Nursing Assistant</p>
                <div className='flex gap-x-5 mt-6'>
                    <Image src="linkedin.svg" alt="" width={22} height={22}/>
                    <Image src="twitter.svg" alt="" width={22} height={22}/>
                    <Image src="website.svg" alt="" width={22} height={22}/>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center mt-12'>
                <Image src="/josephn.svg" alt="" width={80} height={80}/>
                <h1 className='font-semibold text-[20px] mt-2'>Joseph Ngumbau </h1>
                <p className='mt-2'>Medical Assistant</p>
                <div className='flex gap-x-5 mt-6'>
                    <Image src="linkedin.svg" alt="" width={22} height={22}/>
                    <Image src="twitter.svg" alt="" width={22} height={22}/>
                    <Image src="website.svg" alt="" width={22} height={22}/>
                </div>
            </div>
            <div className='ml-6 flex gap-x-80'>

            
            <div className=' flex-col justify-center items-center mt-12  hidden lg:block'>
                <Image src="/erick.svg" alt="" width={80} height={80} className='ml-8'/>
                <h1 className='font-semibold text-[20px] mt-2'>Erick Kipkemboi </h1>
                <p className='mt-2 ml-5'>Web Designer</p>
                <div className='flex gap-x-5 mt-6 ml-5'>
                    <Image src="linkedin.svg" alt="" width={22} height={22}/>
                    <Image src="twitter.svg" alt="" width={22} height={22}/>
                    <Image src="website.svg" alt="" width={22} height={22}/>
                </div>
            </div>
            <div className=' flex-col justify-center items-center mt-12  hidden lg:block'>
                <Image src="/stephen.svg" alt="" width={80} height={80} className='ml-7'/>
                <h1 className='font-semibold text-[20px] mt-2'>Stephen Kerubo </h1>
                <p className='mt-2 ml-3'>President of Sales</p>
                <div className='flex gap-x-5 mt-6 ml-4'>
                    <Image src="linkedin.svg" alt="" width={22} height={22}/>
                    <Image src="twitter.svg" alt="" width={22} height={22}/>
                    <Image src="website.svg" alt="" width={22} height={22}/>
                </div>
            </div>
                <div className=' flex-col justify-center items-center mt-12  hidden lg:block'>
                    <Image src="/jhon.svg" alt="" width={80} height={80} className='ml-4'/>
                    <h1 className='font-semibold text-[20px] mt-2'>John Leboo </h1>
                    <p className='mt-2 ml-5'>Dog Trainer</p>
                    <div className='flex gap-x-5 mt-6 ml-3'>
                        <Image src="linkedin.svg" alt="" width={22} height={22}/>
                        <Image src="twitter.svg" alt="" width={22} height={22}/>
                        <Image src="website.svg" alt="" width={22} height={22}/>
                    </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Team