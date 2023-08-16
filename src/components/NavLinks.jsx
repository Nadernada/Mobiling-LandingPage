import React from 'react'

const NavLinks = ({title, subtitles, index, active, handleClick}) => {
  return (
    <div className={`${active===index ? 'border-b-dark border-b-[2px]' : ''} flex flex-row justify-between px-[24px] py-[12px] cursor-pointer transition-all relative group`} onClick={() =>handleClick(index)}>
        {subtitles ? (
            <div className=' flex flex-col lg:flex-row justify-between items-center  my-[10px] lg:my-0'>
              <div className='flex flex-row items-center'>
              <p className={`text-[18px] ${active===index ? 'text-light lg:text-dark' : 'text-mid lg:text-nav'} lg:hover:text-dark font-normal  leading-[22.5px]`}>{title}</p>
              <img src='./assets/arrow-down.svg' alt='arrow-down' className='w-[16px] h-[16px] object-contain ml-[8px] rotate-180 group-hover:rotate-0 origin-center transition-all duration-500' />
              </div>
              <ul className='scale-0 group-hover:flex group-hover:scale-100 hover:flex flex-col relative lg:absolute w-[100vw] lg:w-full bg-blue-400 py-[20px] px-4 top-[10%] lg:top-[100%] left-0 origin-top divide-y-2 text-mid lg:rounded-b-[16px] transition ease-in-out duration-500'>
                <li className='py-[8px] text-center hover:text-dark'>item 1</li>
                <li className='py-[8px] text-center hover:text-dark'>item 3</li>
                <li className='py-[8px] text-center hover:text-dark'>item 3</li>
              </ul>
            </div>
            ) : (
                <p className={`text-[18px] ${active===index ? 'text-light lg:text-dark border-b-dark' : 'text-mid lg:text-nav'} lg:hover:text-dark font-normal leading-[22.5px] my-[10px] lg:my-0`} >{title}</p>
                
                )}
    </div>
  )
}

export default NavLinks