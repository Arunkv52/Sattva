import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router'
import Logo from '../assets/logo/logo.png'
import TopMenu from './data/TopMenu'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <nav className='fixed top-0 left-0 z-50 w-full px-2 py-0'>
      <div className='mx-auto flex items-center justify-between'>
        {/* Logo */}
        <Link to='/'>
          <img src={Logo} alt='Logo' className='w-20 object-contain' />
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-10'>
          {TopMenu.map(item => (
            <Link
              key={item.title}
              to={item.link}
              className='text-[#8a8750] font-medium hover:text-red-600 transition-colors duration-300'
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <div className='hidden md:block'>
          <a href='https://payment.sattvaholistics.com/'>
            <button className='cursor-pointer bg-white text-[#8a8750] text-sm px-5 py-2 rounded-lg shadow-md hover:scale-105 transition-all duration-300'>
              Register Now
            </button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type='button'
          onClick={() => setMobileMenu(!mobileMenu)}
          className='md:hidden bg-white p-2 rounded-lg shadow-md'
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileMenu ? 'max-h-[500px] mt-4' : 'max-h-0'
        }`}
      >
        <div className='bg-white rounded-2xl shadow-lg p-5 flex flex-col'>
          {TopMenu.map(item => (
            <Link
              key={item.title}
              to={item.link}
              onClick={() => setMobileMenu(false)}
              className='py-3 border-b border-gray-100 text-[#8a8750] hover:text-red-600 transition-colors duration-300'
            >
              {item.title}
            </Link>
          ))}

          <button className='mt-5 bg-[#8a8750] text-white py-3 rounded-xl hover:opacity-90 transition'>
            Register Now
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
