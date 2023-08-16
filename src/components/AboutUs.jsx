import React from 'react'
import { styles } from '../assets/styles'

const AboutUs = () => {
  return (
    <section className={`${styles.mainLayout} flex flex-col lg:flex-row md:items-center gap-[40px] lg:gap-[100px] bg-white py-[35px] text-center lg:text-start`}>
      <div className='flex flex-col lg:w-3/5 items-center lg:items-start'>
        <h3 className="text-[24px] lg:text-[40px] font-medium text-dark leading-[30px] lg:leading-[50px] capitalize">about us</h3>
        <h5 className='text-[20px] lg:text-[32px] font-normal text-dark leading-[28px] lg:leading-[40px] mt-[8px]'>Find out briefly but informatively</h5>
        <p className='text-[16px] lg:text-[20px] font-normal text-dark leading-[25px] pt-[24px] lg:pt-[36px]'>As an upscale and exclusive chauffeur and limousine service near Indonesia, we have been ensuring for more than 15 years that you get to your destination on time and safely. We sell in around Indonesia , as well as beyond to destinations throughout World. From the Indonesia to shuttle service, you can look forward to a professional team and comfort of our car service.</p>
      </div>
      <div className='grid grid-cols-2 md:w-[80%] lg:w-2/5 bg-[#E3E6E9] rounded-[30px] items-center justify-between gap-[24px] md:gap-y-[50px] lg:gap-0 p-5'>
        <div className='flex flex-col justify-center items-center'>
          <img src='/Mobiling-LandingPage/car.svg' alt='car' className={`${styles.iconsMd}`} />
          <p className={`text-[14px] leading-[16px] w-full ${styles.InfoText}`}>From business to Luxuryclass</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src='/Mobiling-LandingPage/location-pin.svg' alt='location-pin' className={`${styles.iconsMd}`} />
          <p className={`text-[14px] leading-[16px] w-full ${styles.InfoText}`}>125 Location in Indonesia</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src='/Mobiling-LandingPage/Touchscreen.svg' alt='touchscreen' className={`${styles.iconsMd}`} />
          <p className={`text-[14px] leading-[16px] w-full ${styles.InfoText}`}>Convenient Online Book</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src='/Mobiling-LandingPage/Clock.png' alt='clock' className={`${styles.iconsMd}`} />
          <p className={`text-[14px] leading-[16px] w-full ${styles.InfoText}`}>24/7 Exclusive On the road</p>
        </div>
      </div>
    </section>  
    )
}

export default AboutUs