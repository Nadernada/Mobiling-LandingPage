import React from "react"
import { styles } from "../assets/styles"
export default function FooterLinks () {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-x-[80px] mt-[56px] lg:mt-0'>
        <div className='flex flex-col justify-start'>
            <h5 className='text-[18px] lg:text-[20px] font-bold text-light leading-[20px] lg:leading-[25px] capitalize my-[32px] lg:mb-[45px]'>buy vehicle</h5>
            <ul className='list-none justify-start'>
                <li className={`${styles.footerLinks}`}>Find new car</li>
                <li className={`${styles.footerLinks}`}>Current vehicle offers</li>
                <li className={`${styles.footerLinks}`}>Price lists & brochures</li>
            </ul>
        </div>
        <div className='flex flex-col justify-start'>
            <h5 className='text-[18px] lg:text-[20px] font-bold text-light leading-[20px] lg:leading-[25px] capitalize my-[32px] lg:mb-[45px] lg:mt-0'>Purchase advice</h5>
            <ul className='list-none justify-start'>
                <li className={`${styles.footerLinks}`}>Book a test drive</li>
                <li className={`${styles.footerLinks}`}>Find a dealer near you</li>
                <li className={`${styles.footerLinks}`}>Find used vehicles</li>
            </ul>
        </div>
        <div className='flex flex-col justify-start'>
            <h5 className='text-[18px] lg:text-[20px] font-bold text-light leading-[20px] lg:leading-[25px] capitaliz my-[32px] lg:mb-[45px] lg:mt-0'>Customer Service</h5>
            <ul className='list-none justify-start'>
                <li className={`${styles.footerLinks}`}>Current service offers</li>
                <li className={`${styles.footerLinks}`}>Online service campaign VIN-checker</li>
                <li className={`${styles.footerLinks}`}>5 Year staf service</li>
                <li className={`${styles.footerLinks}`}>24h roadside assitance</li>
                <li className={`${styles.footerLinks}`}>New and events</li>
                <li className={`${styles.footerLinks}`}>Press release</li>
            </ul>
        </div>
    </div>
  )
}

