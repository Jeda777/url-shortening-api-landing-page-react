import { iconFacebook, iconInstagram, iconTwitter, iconPinterest, logo } from '../assets'

const Footer = () => {
  return (
    <footer className='bg-veryDarkViolet text-white py-14 lg:py-16'>
      <div className='custom-container flex flex-col items-center text-center lg:flex-row lg:text-left lg:justify-between lg:items-start gap-10'>
        <img src={logo} alt='Shortly' className='h-[33px] brightness-[9999%]' />
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-14'>
          <div className='flex flex-col gap-1'>
            <p className='font-bold mb-2'>Features</p>
            <a href='#' className='text-grayCustom hover:color-primary transition-all'>
              Link Shortening
            </a>
            <a href='#' className='text-grayCustom hover:color-primary transition-all'>
              Branded Links
            </a>
            <a href='#' className='text-grayCustom hover:color-primary transition-all'>
              Analytics
            </a>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='font-bold mb-2'>Resources</p>
            <a href='#' className='text-grayCustom hover:color-primary transition-all'>
              Blog
            </a>
            <a href='#' className='text-grayCustom hover:color-primary transition-all'>
              Developers
            </a>
            <a href='#' className='text-grayCustom hover:color-primary transition-all'>
              Support
            </a>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='font-bold mb-2'>Company</p>
            <a href='#' className='text-grayCustom hover:color-primary transition-all'>
              About
            </a>
            <a href='#' className='text-grayCustom hover:color-primary transition-all'>
              Our Team
            </a>
            <a href='#' className='text-grayCustom hover:color-primary transition-all'>
              Careers
            </a>
            <a href='#' className='text-grayCustom hover:color-primary transition-all'>
              Contact
            </a>
          </div>
          <div className='flex justify-center items-center gap-5 lg:items-start'>
            <a href='#'>
              <img src={iconFacebook} alt='Facebook' />
            </a>
            <a href='#'>
              <img src={iconTwitter} alt='Twitter' />
            </a>
            <a href='#'>
              <img src={iconPinterest} alt='Pinterest' />
            </a>
            <a href='#'>
              <img src={iconInstagram} alt='Instagram' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
