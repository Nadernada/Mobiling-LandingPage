import React from 'react'
import { styles } from '../assets/styles'
import FooterLinks from './FooterLinks'

const Footer = () => {
  return (
    <footer className={`${styles.mainLayout} py-[15px] lg:py-[35px] bg-blue-800`}>
      <div className='flex flex-col lg:flex-row w-full justify-between pt-[36px] lg:pt-[72px]'>
        <div className='flex flex-col lg:w-1/3 items-start'>
          <div className='flex flex-row justify-center items-center'>
            <img src='/Mobiling-LandingPage/logo-b&w.svg' className='w-[30px] h-[34px] object-contain mr-[12px]' />
            <div className='flex flex-col justify-start'>
              <h5 className='text-[20px] font-medium text-light leading-[25px] mb-[5px]'>Mobiling</h5>
              <p className='text-[12px] font-light text-light leading-[15px]'>Automobile</p>
            </div>
          </div>
          <p className='w-[80%] text-[16px] font-normal text-light leading-[20px] mt-[26px]' >As an upscale and exclusive chauffeur and limousine service near Indonesia, we have been ensuring for more than 15 years that you get to your destination on time and safely.</p>
          <div className='flex flex-row justify-center items-center gap-[24px] mt-[40px]'>
            <img src='/Mobiling-LandingPage/twitter.svg' alt='facebook' className={`${styles.iconsSm}`} />
            <img src='/Mobiling-LandingPage/facebook.svg' alt='facebook' className={`${styles.iconsSm}`} />
            <img src='/Mobiling-LandingPage/linkedin.svg' alt='linkedin' className={`${styles.iconsSm}`} />
            <img src='/Mobiling-LandingPage/instagram.svg' alt='instagram' className={`${styles.iconsSm}`} />
          </div>
        </div>
        <FooterLinks />
      </div>
      <div className='flex flex-col lg:flex-row justify-between items-center border-t-[1px] border-light py-[40px] mt-[40px] xl:mt-0' >
        <p className='text-[14px] lg:text-[18px] font-normal text-light leading-[22px] lg:leading-[36px]'>Copyright 2023 Mobiling Co.</p>
        <ul className='list-none flex flex-row justify-center gap-[55px] mt-[30px] lg:mt-0'>
          <li className={`${styles.footerLinks} lg:leading-[36px]`}>Terms of Service</li>
          <li className={`${styles.footerLinks} lg:leading-[36px]`}>Privacy Policy</li>
          <li className={`${styles.footerLinks} lg:leading-[36px]`}>Cookies</li>
        </ul>
        <button className='bg-transparent text-light flex flex-row items-center justify-center mt-[30px] lg:mt-0'><span>
          <img src='/Mobiling-LandingPage/globe.svg' alt='globe' className={`${styles.iconsSm} pr-[16px]`} /></span>
          English<span>
          <img src='/Mobiling-LandingPage/arrow-right.svg' alt='arrow-right' className={`${styles.iconsSm} pl-[16px]`} /></span>
        </button>
      </div>
    </footer>
  )
}

export default Footer