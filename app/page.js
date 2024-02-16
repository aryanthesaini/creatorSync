'use client';
import Image from 'next/image';
import BackgroundCircles from './BackgroundCircles';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
export default function Home() {
  const [text, count] = useTypewriter({
    words: ['Creators', 'Brands', 'Accounts'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      {/* <img className='' src='https://testapp.youngun.in/static/media/youngunnew.b912bef6.jpg' /> */}
      <BackgroundCircles />
      <h1 className='text-sm md:text-md uppercase  pb-2 tracking-[12px]  px-4 font-light'>
        We are
      </h1>

      <div className='z-20'>
        <h1
          className='text-xl md:text-3xl font-semibold uppercase  pb-5 tracking-[12px]  md:tracking-[15px] px-4
        '>
          {' '}
          Creator<span className='text-red-400'> Sync </span>
        </h1>
        <h2 className=' md:text-2xl  scroll-px-10  text-gray-500'>
          <span className='mr-3 mt-5'>
            Collab with your favourite{' '}
            <span className='text-red-400'>{text} </span>{' '}
          </span>
          <Cursor cursorColor='white' />
        </h2>
        <h1
          className='text-lg mt-10 tracking-[2px]  text-red-400 uppercase
        '>
          {' '}
          I am a
        </h1>
        <div className='mt-10 flex justify-evenly'>
          <a
            href='https://45p0mejivpq.typeform.com/to/D9HhUbkt'
            className='relative inline-block text-lg group'>
            <span className='relative z-10 block px-10 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white'>
              <span className='absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50'></span>
              <span className='absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease'></span>
              <span className='relative'>Brand</span>
            </span>
            <span
              className='absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0'
              data-rounded='rounded-lg'></span>
          </a>

          <a
            href='https://45p0mejivpq.typeform.com/to/IyeSBhxC'
            className='relative inline-block text-lg group'>
            <span className='relative z-10 block px-10 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white'>
              <span className='absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50'></span>
              <span className='absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease'></span>
              <span className='relative'>Creator</span>
            </span>
            <span
              className='absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0'
              data-rounded='rounded-lg'></span>
          </a>
        </div>

        {/* <div className='pt-7 pb-5 px-10   scroll-px-10  text-gray-500'>
          We are a humour-led creative agency that opens doors to the internet
          culture for brands Powered by meme marketing
        </div> */}

        {/* <div className='pt-7'>
          <Link href={'#about'}>
            <button className='heroButton'>About us</button>
          </Link>
          <Link href={'/'}>
            <button className='heroButton'>Our Clients</button>
          </Link>
          <Link href={'/'}>
            <button className='heroButton'>Our Team</button>
          </Link>
          <Link href={'/'}>
            <button className='heroButton'>Reach Out</button>
          </Link>
        </div> */}
      </div>
    </div>
  );
}
