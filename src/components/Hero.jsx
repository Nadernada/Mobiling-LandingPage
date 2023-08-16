import React from 'react'
import { styles } from '../assets/styles'

const Hero = () => {
  return (
    <section className={`${styles.mainLayout} justify-between flex lg:flex-row flex-col`}>
      <div className='xl:basis-2/3 basis-8/12 flex flex-col justify-start text-center lg:text-start'>
        <div className='absolute bg-circle-gradient w-[100px] lg:w-[400px] h-[400px] rounded-full blur-[300px] left-[25%] top-[45%] z-0 origin-center' />
        <h1 className='xl:text-[80px] lg:text-[60px] text-[40px] font-semibold text-dark lx:leading-[100px] lg:leading-[70px] leading-[40px] capitalize'>Best car for your performance</h1>
        <p className='xl:text-[24px] lg:text-[20px] text-[18px] font-normal text-mid leading-[30px] capitalize lg:w-[80%] mt-[24px]'>we will serve you to get dream car here easily and quickly that is reliable</p>
        <div className='flex lg:flex-row flex-col items-center mt-[25px] z-10' dir='ltr'>
          <input type='text' name='query' placeholder='Search' className='lg:w-[450px] w-full bg-white px-[32px] focus-visible:outline-blue-600 py-[12px] rounded-t-[10px] lg:rounded-l-[10px] lg:rounded-tr-none xs:max-lg:rounded-t-[10px] text-[18px] leading-[22.5px]' />
          <div className='w-full lg:w-[47px] flex flex-row justify-center items-center lg:justify-center bg-blue-600 p-[15px] rounded-b-[10px] lg:rounded-bl-none lg:rounded-r-[10px]  cursor-pointer'>
            <img src='./assets/search.svg' alt='search' className='w-[17px] h-[17px] object-contain' />
            <p className='text-[18px] font-medium text-light block lg:hidden ml-[8px]'>search</p>
          </div>
        </div>

        <h3 className='text-[36px] font-normal text-dark leading-[45px] mt-[70px] lg:mt-[130px]'>BMW Series 3 BLUE</h3>
        <div className='flex flex-row items-center justify-between w-full lg:w-[50%] xl:w-[40%]' >
          <div className='flex flex-col justify-start'>
            <p className='text-[16px] font-normal text-mid leading-[20px] mt-[16px] capitalize'>base price</p>
            <p className='text-[24px] font-light text-nav leading-[30px] mt-[4px]'>$ 41.87k</p>
          </div>
          <div className='flex flex-col justify-start'>
            <p className='text-[16px] font-normal text-mid leading-[20px] mt-[16px] capitalize'>power</p>
            <p className='text-[24px] font-light text-nav leading-[30px] mt-[4px] uppercase'>365 hp</p>
          </div>
          <div className='flex flex-col justify-start'>
            <p className='text-[16px] font-normal text-mid leading-[20px] mt-[16px] capitalize'>engine</p>
            <p className='text-[24px] font-light text-nav leading-[30px] mt-[4px]'>362 v6</p>
          </div>
        </div>
        <div className='w-full lg:w-[70%] h-[1px] bg-[#98A2B3] mt-[48px] mb-[40px] lg:mb-[90px]'></div>
      </div>
      <div className='xl:basis-1/3 basis-4/12 h-full flex flex-col items-center justify-between static mt-0 lg:mt-[120px] md:gap-[45px] lg:gap-0'>
        <div className='hidden lg:block w-[300px] h-full bg-blue-500 absolute top-0 z-0' />
        <div className='w-[90px] h-[90px] flex items-center'>
          <img src='./assets/stamp.svg' alt='stamp' className='w-[90px] h-[90px] object-contain animate-spin-slow origin-center' />
          <img src='./assets/star.svg' alt='star' className='w-[28px] h-[28px] relative -left-[59px] animate-spin-slow origin-center' />
        </div>
        <img src='./assets/Hero.png' alt='Car' className='xl:w-[600px] lg:w-[400px] h-auto aspect-auto  lg:absolute lg:-bottom-[110px] xl:-bottom-[180px] 2xl:-bottom-[110px] z-10' />
        <div className='flex flex-row w-full lg:w-[60%] items-center justify-around relative lg:top-[400px] mt-[16px] lg:mt-0'>
          <img src='./assets/chevron-left.svg' alt='chevron-left' className='w-[32px] h-[32px] object-contain cursor-pointer' />
          <img src='./assets/chevron-right.svg' alt='chevron-right' className='w-[32px] h-[32px] object-contain cursor-pointer' />
        </div>
      </div>
    </section>
  )
}

export default Hero