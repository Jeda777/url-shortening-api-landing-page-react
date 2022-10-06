import { useState } from 'react'
import { logo } from '../assets/index'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='custom-container py-10 flex justify-between relative text-grayCustom font-bold text-lg bg-white'>
      <div className='flex gap-11 items-center'>
        <img src={logo} alt='Shortly' className='h-[33px]' />
        <nav className='hidden lg:flex gap-8'>
          <a href='#' className='desktop-nav-link'>
            Features
          </a>
          <a href='#' className='desktop-nav-link'>
            Pricing
          </a>
          <a href='#' className='desktop-nav-link'>
            Resources
          </a>
        </nav>
      </div>

      <div className='flex'>
        <div className='hidden lg:flex items-center gap-9'>
          <a href='#' className='desktop-nav-link'>
            Login
          </a>
          <a href='#' className='bg-primary py-3 px-6 rounded-full text-white hover:opacity-70 transition-all'>
            Sign Up
          </a>
        </div>
        <div onClick={() => setMenuOpen((prev) => !prev)} className='w-6 h-6 flex flex-col justify-between lg:hidden'>
          <div className='w-full h-[4px] bg-grayCustom'></div>
          <div className='w-full h-[4px] bg-grayCustom'></div>
          <div className='w-full h-[4px] bg-grayCustom'></div>
        </div>
      </div>

      <nav
        className={`absolute left-4 right-4 ${
          menuOpen ? 'top-[100%]' : '-top-[150vh]'
        } transition-all flex flex-col bg-secondary text-white py-10 px-6 text-center gap-9 rounded-2xl lg:hidden z-20`}
      >
        <a href='#'>Features</a>
        <a href='#'>Pricing</a>
        <a href='#'>Resources</a>
        <div className='w-full h-px bg-grayCustom -my-1'></div>
        <a href='#'>Login</a>
        <a href='#' className='w-full bg-primary py-4 rounded-full -mt-4'>
          Sign Up
        </a>
      </nav>
    </div>
  )
}

export default Navbar
