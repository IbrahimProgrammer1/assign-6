import React from 'react'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <div>

    <div className='mt-16 mx-4'>
        <h1 className='text-5xl font-bold hidden lg:block'>Customer testimonials</h1>
        <h1 className='text-3xl font-bold block lg:hidden text-center'>What Our Student Say</h1>
        <p className='text-[18px] mt-5 text-center lg:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
<div className="flex lg:mx-16 gap-x-20 my-3 justify-center">
    <div className='border-2 border-black mx-4 lg:w-96 '>
        <div className='mx-5 my-7'>
        <div className='flex gap-x-1'>
        <Image src="/fivestar.svg" alt="" height={18.89} width={20}/>
        <Image src="/fivestar.svg" alt="" height={18.89} width={20}/>
        <Image src="/fivestar.svg" alt="" height={18.89} width={20}/>
        <Image src="/fivestar.svg" alt="" height={18.89} width={20}/>   
        <Image src="/fivestar.svg" alt="" height={18.89} width={20}/>
        </div>
        <h1 className='mt-3'>
        "Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Suspendisse varius enim in eros <br /> elementum tristique. Duis cursus, mi <br /> quis viverra ornare."
        </h1>
        <div className='mt-5 flex gap-x-4'>
            <Image src="/josephn.svg" alt="" height={56} width={56} className='rounded-full' />
            <div>
                <h1 className='font-semibold'>Wade Warren</h1>
                <p>Position, Company name</p>
            </div>
        </div>
        </div>
    </div>
    <div className='border-2 border-black mx-4 lg:w-96 hidden lg:block'>
        <div className='mx-5 my-7'>
        <div className='flex gap-x-1'>
        <Image src="/fivestar.svg" alt="" height={18.89} width={20}/>
        <Image src="/fivestar.svg" alt="" height={18.89} width={20}/>
        <Image src="/fivestar.svg" alt="" height={18.89} width={20}/>
        <Image src="/fivestar.svg" alt="" height={18.89} width={20}/>   
        <Image src="/fivestar.svg" alt="" height={18.89} width={20}/>
        </div>
        <h1 className='mt-3'>
        "Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Suspendisse varius enim in eros <br /> elementum tristique. Duis cursus, mi <br /> quis viverra ornare."
        </h1>
        <div className='mt-5 flex gap-x-4'>
            <Image src="/josephn.svg" alt="" height={56} width={56} className='rounded-full' />
            <div>
                <h1 className='font-semibold'>Wade Warren</h1>
                <p>Position, Company name</p>
            </div>
        </div>
        </div>
    </div>
    <div className='border-2 border-black mx-4 lg:w-96 hidden lg:block'>
        <div className='mx-5 my-7'>
        <div className='flex gap-x-1'>
        <Image src="/fivestar.svg" alt="" height={18.89} width={20}/>
        <Image src="/fivestar.svg" alt="" height={18.89} width={20}/>
        <Image src="/fivestar.svg" alt="" height={18.89} width={20}/>
        <Image src="/fivestar.svg" alt="" height={18.89} width={20}/>   
        <Image src="/fivestar.svg" alt="" height={18.89} width={20}/>
        </div>
        <h1 className='mt-3'>
        "Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Suspendisse varius enim in eros <br /> elementum tristique. Duis cursus, mi <br /> quis viverra ornare."
        </h1>
        <div className='mt-5 flex gap-x-4'>
            <Image src="/josephn.svg" alt="" height={56} width={56} className='rounded-full' />
            <div>
                <h1 className='font-semibold'>Wade Warren</h1>
                <p>Position, Company name</p>
            </div>
        </div>
        </div>
    </div>
    </div>

<div className='flex justify-between mx-[42px] lg:mx-12'>
    <div className='mx-4 my-4'>
        <div className='mt-2'><img src="/dots.svg" alt="" /></div></div>
        <div className='flex mx-4 gap-x-4'><img src="/leftarrow.svg" alt="" />
        <img src="/rightarrow.svg" alt="" />
        </div>
</div>
    </div>
  )
}

export default Testimonials