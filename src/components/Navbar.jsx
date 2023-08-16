import {React, useState} from 'react'
import {navLinks} from '../assets/navLinks'
import NavLinks from './NavLinks.jsx'

const Navbar = () => {

  const [active, setActive] = useState(0)
  const [isOpen, setIsOpen] = useState(open)

  return (
    <nav className='w-full h-[120px] py-[36px] lg:px-[80px] xl:px-[140px] px-[50px] flex justify-between items-center '>
      <div className='flex flex-row justify-center items-center'>
        <img src='.../public/logo-colored.svg' className='w-[30px] h-[34px] object-contain mr-[12px]' />
        <div className='flex flex-col justify-start'>
          <h3 className='text-[20px] font-medium text-blue-600 leading-[25px] mb-[5px]'>Mobiling</h3>
          <p className='text-[12px] font-light text-mid leading-[15px]'>Automobile</p>
        </div>
      </div>
      <div className={`${isOpen ? 'scale-100 rounded-0 opacity-100' : 'scale-0 lg:scale-100  rounded-l-[200px] opacity-0 lg:opacity-100'} bg-blue-800 lg:bg-transparent w-full absolute lg:relative h-max z-20 top-0 left-0 flex flex-col lg:flex-row justify-center items-center py-[100px] transition-all duration-300 origin-top-right`}>
        <div className='flex flex-col lg:flex-row justify-center items-center lg:mx-auto' >
          {navLinks.map((nav, index) => (
            <NavLinks {...nav} key={index} index={index} active={active} handleClick={setActive}/>
          ))}
        </div>
        <button className='bg-blue-600 hover:bg-blue-800 text-[18px] font-normal text-light leading-[22.5px] py-[12px] px-[40px] mt-[12px] lg:mt-0 rounded-[10px] transition-all z-10'>Sign in</button>
      </div>
      <img src={`${isOpen ? '/close.svg' : '/burger-menu.svg'}`} alt='menu' className={`block lg:hidden w-[32px] h-[32px] object-contain z-30 cursor-pointer transition-all`} onClick={()=>setIsOpen(!isOpen)}/>
    </nav>
  )
}

export default Navbar
