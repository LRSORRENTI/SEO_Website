import Logo from '@/assets/logo.svg';
import XSocial from '@/assets/social-x.svg';
import InstaSocial from '@/assets/social-instagram.svg';
import YTSocial from '@/assets/social-youtube.svg';


export const Footer = () => {
  return (
    <footer className='py-5 border-t border-white/15 '>
      <div className='container'>
        <div className='flex flex-col md:flex-row lg:items-center sm:gap-16 lg:gap-8'>
        <div className='flex gap-2 items-center lg:flex-1'>
          <Logo className="w-6 h-6" />
          <div className='font-medium'>AI SEO</div>
        </div>

          <nav className='flex flex-col md:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center'>
            <a href="#home" className='text-white/70 hover:text-white text-xs md:text-sm transition'>Home</a>
            <a href="#features" className='text-white/70 hover:text-white text-xs md:text-sm transition'>Features</a>
            <a href="#testimonials" className='text-white/70 hover:text-white text-xs md:text-sm transition'>Testimonials</a>
            <a href="#contact" className='text-white/70 hover:text-white text-xs md:text-sm transition'>Contact</a>
            {/* <a href="" className='text-white/70 hover:text-white text-xs md:text-sm transition'>Changelog</a> */}
          </nav>
      
        <div className='flex gap-5 lg:flex-1 lg:justify-end '>
          <div className='cursor-pointer' aria-roledescription='X.com link'>
          <XSocial     className="text-white/40 hover:text-white transition"   />
          </div>
          <div className='cursor-pointer' aria-roledescription='Instagram link'>
          <InstaSocial className="text-white/40 hover:text-white transition"   />
          </div>
          <div className='cursor-pointer' aria-roledescription='YouTube link'>
          <YTSocial    className="text-white/40 hover:text-white transition"   />
          </div>
        </div>
        </div>
      </div>
    </footer>
  )
};
