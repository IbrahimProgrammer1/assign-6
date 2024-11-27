"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="hidden md:flex p-7 justify-between bg-[#f7f7f7]">
        <div className="flex gap-x-5">
          <h1>Phone Number: 956 742 455 678</h1>
          <div>|</div>
          <h1>Email: info@ddsgnr.com</h1>
        </div>
        <div className="flex gap-x-12">
          <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
          <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
          <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
          <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
        </div>
      </div>

      <div className="w-full h-[2px] bg-black"></div>

      <div className="bg-[#f7f7f7] mt-3 p-4 flex justify-between items-center relative">
        <Image src="/logo.svg" alt="Logo" width={140} height={46} className="ml-4" />

        <div className="block md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Image src="/menu.svg" alt="Menu" width={30} height={30} />
          </button>
        </div>

        <div
  className={`${
    isMenuOpen ? 'block' : 'hidden'
  } absolute top-[70px] left-0 w-full bg-[#fff] p-5 md:p-0 md:static md:flex md:ml-80 justify-between items-center z-50`}
>
  <ul className="flex flex-col md:flex-row gap-5 md:gap-x-12">
    <li className="text-black after:content-[''] after:block after:h-[2px] after:bg-black after:w-0 after:mx-auto after:transition-all after:duration-300 hover:after:w-full">
      <a href="#">Home</a>
    </li>
    <li className="text-black after:content-[''] after:block after:h-[2px] after:bg-black after:w-0 after:mx-auto after:transition-all after:duration-300 hover:after:w-full">
      <a href="#">Courses</a>
    </li>
    <li className="text-black after:content-[''] after:block after:h-[2px] after:bg-black after:w-0 after:mx-auto after:transition-all after:duration-300 hover:after:w-full">
      <a href="#">Services</a>
    </li>
    <li className="text-black after:content-[''] after:block after:h-[2px] after:bg-black after:w-0 after:mx-auto after:transition-all after:duration-300 hover:after:w-full">
      <a href="#">Achievement</a>
    </li>
    <li className="text-black after:content-[''] after:block after:h-[2px] after:bg-black after:w-0 after:mx-auto after:transition-all after:duration-300 hover:after:w-full">
      <a href="#">About Us</a>
    </li>
    <li className="text-black after:content-[''] after:block after:h-[2px] after:bg-black after:w-0 after:mx-auto after:transition-all after:duration-300 hover:after:w-full">
      <a href="#">Testimonials</a>
    </li>
  </ul>
  <div className="flex flex-col md:flex-row gap-3 md:gap-5 mt-4 md:mt-0 md:mr-16">
    <button className="border-2 border-black rounded p-2 px-4">Login</button>
    <button className="bg-black text-white rounded p-2 px-4 md:ml-4">Sign Up</button>
  </div>
</div>

      </div>
    </div>
  );
};

export default Navbar;
