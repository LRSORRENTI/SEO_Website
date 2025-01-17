import acmeLogo from '@/assets/logo-acme.png';
import apexLogo from '@/assets/logo-apex.png';
import celestial from '@/assets/logo-celestial.png';
import quantum from '@/assets/logo-quantum.png';
import pulse from '@/assets/logo-pulse.png';
import echo from '@/assets/logo-echo.png';

export const LogoTicker = () => {
  const logos = [acmeLogo, apexLogo, celestial, quantum, pulse, echo];

  return (
    <section className='py-20 md:py-24'>
      <div className="container">
        <div className='flex items-center gap-5'>
          <div className='flex-1 md:flex-none'>
          <h2>Trusted by top innovative teams</h2>
          </div>
          <div className='flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
          <div className='flex flex-none gap-16'>
            {logos.map((logo, index) => (
              <img
                src={logo.src} 
                key={index} 
                alt={`Logo ${index + 1}`} 
                className="h-6 w-auto "
              />
            ))}
          </div>
         </div>
        </div>
      </div>
    </section>
  );
};
