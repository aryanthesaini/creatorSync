'use client';
import Image from 'next/image';

import { Typewriter } from 'react-simple-typewriter';
export default function Home() {
  return (
    <section class='bg-gray-900 text-white'>
      <div class='mx-auto max-w-screen-xl px-4 py-32 lg:flex h-screen items-center'>
        <div class='mx-auto max-w-3xl text-center'>
          <h1 class='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-5xl md:text-7xl font-extrabold text-transparent '>
            CreatorSync
            <span class='block text-xl pt-11 font-medium text-white'>
              {' '}
              Get your favourite{' '}
              <Typewriter
                words={['Brand', 'Creator']}
                loop={100}
                cursor
                cursorStyle='_'
                typeSpeed={50}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
            <span class='block text-lg font-medium'>to collab with</span>
          </h1>

          <h1 class='bg-gradient-to-l from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-light text-transparent pt-10'>
            I am a
          </h1>
          <div class='mt-8 flex flex-wrap justify-center gap-4'>
            <a
              class='block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto'
              href='#'>
              Brand
            </a>

            <a
              class='block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto'
              href='#'>
              Creator
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
