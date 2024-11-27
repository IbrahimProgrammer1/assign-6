"use client";

import React from 'react';

const Achievement = () => {
  return (
    <div className="mx-auto max-w-7xl py-20 px-4 sm:px-6 lg:px-8  lg:mt-11">
      <h1 className="text-center text-4xl font-bold sm:text-5xl">
        Our Achievements
      </h1>
      <p className="mt-6 text-center text-lg sm:text-xl lg:text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
      </p>

      <div className="mt-16 flex gap-x-20 justify-center gap-y-9 flex-wrap lg:grid-cols-4">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold sm:text-5xl">+200</h1>
          <p className="mt-2 text-base sm:text-lg">Courses</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold sm:text-5xl">50K</h1>
          <p className="mt-2 text-base sm:text-lg">Mentors</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold sm:text-5xl">370K</h1>
          <p className="mt-2 text-base sm:text-lg">Students</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold sm:text-5xl">100+</h1>
          <p className="mt-2 text-base sm:text-lg">Recognition</p>
        </div>
      </div>

      <div className="hidden sm:block mt-48">
        <h1 className="text-center text-4xl font-bold sm:text-5xl">
          Our Achievements
        </h1>
        <p className="mt-6 text-center text-lg sm:text-xl lg:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold sm:text-5xl">+200</h1>
            <p className="mt-2 text-base sm:text-lg">Courses</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold sm:text-5xl">50K</h1>
            <p className="mt-2 text-base sm:text-lg">Mentors</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold sm:text-5xl">370K</h1>
            <p className="mt-2 text-base sm:text-lg">Students</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold sm:text-5xl">100+</h1>
            <p className="mt-2 text-base sm:text-lg">Recognition</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
