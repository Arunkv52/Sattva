import FooterMenu from './data/FooterMenu'
import Social from './data/SocialLinks'
import Noise from './Noise'
import Logo from '../assets/logo/logo.png'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <>
      <footer className='bg-[#f2f2f2] md:py-8 py-5 px-5'>
        <Noise
          patternSize={160}
          patternScaleX={1.9}
          patternScaleY={1.9}
          patternRefreshInterval={2}
          patternAlpha={10}
        />
        <div className='footer-top md:flex justify-between'>
          <div className='md:w-1/2 w-full'>
            <div className='md:py-0 py-3 md:flex md:justify-start flex justify-center  md:bg-transparent md:p-0'>
              <img src={Logo} alt='' className='md:w-30 w-30' />
            </div>
          </div>
          {/* Social Links section */}
          <div className='md:w-1/2 w-full'>
            <div>
              {FooterMenu.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className='block text-[#7a7346] md:text-2xl text-2xl border-b border-b-[#7a7346] font-semibold md:py-1 py-1 cursor-pointer'
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className='footer-bottom md:flex justify-between items-start mt-15'>
          <div className='md:w-1/2 w-full'>
            <div className='md:w-[50%] w-full'>
              <p className='text-[#7a7346] text-md leading-4'>
                At Sattva Holistics, we guide you toward inner peace, emotional
                wellbeing, and energetic balance. Our healing-centered approach
                supports personal transformation and conscious living in a
                compassionate, uplifting environment.
              </p>
            </div>
          </div>
          {/* Social Links section */}
          <div className='md:w-1/2 w-full'>
            <div className='md:grid md:grid-cols-2 grid grid-cols-1'>
              <div className='w-full flex flex-col justify-between items-start md:pt-0 pt-5'>
                <div className='md:text-base text-base text-[#7a7346] md:pb-2 pb-10'>
                  <ul>
                    <li>admin@sattvaholistics.com</li>
                    <li>+91 99940 53595</li>
                  </ul>
                </div>
              </div>
              <div>
                {Social.map(iitem => (
                  <>
                    <div>
                      <p className='text-base text-[#7a7346]'>{iitem.title}</p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='text-left text-[#7a7346]/50 text-sm md:px-0 pt-20'>
          <p>2026 All rights reserved by Sattva Holistics</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
