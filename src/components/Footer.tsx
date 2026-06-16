import Social from './data/SocialLinks'
import Noise from './Noise'


const Footer = () => {
  return (
    <>
      <footer className='bg-[#f2f2f2] md:py-8 py-5 px-15'>
        <Noise
          patternSize={160}
          patternScaleX={1.9}
          patternScaleY={1.9}
          patternRefreshInterval={2}
          patternAlpha={10}
        />
        
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
