import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from '../assets/logo/logo.png'
import TopMenu from './data/TopMenu'
import { Link } from 'react-router'
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [productOpen, setProductOpen] = useState(false)

  return (
    <>
      <nav className='w-full fixed top-0 left-0 z-50 px-4 md:px-2'>
        <div className='px-0 py-0 flex items-center justify-between'>
          {/* Logo */}
          <div className=''>
            <img src={Logo} alt='logo' className='w-20' />
          </div>
          {/* Desktop Menu */}
          <div className='hidden md:flex justify-start gap-10 text-base font-medium md:px-5'>
            {TopMenu.map(item => (
              <div key={item.title} className='relative group'>
                {!item.submenu ? (
                  <Link
                    to={item.link}
                    className='text-white hover:text-red-600 transition-all duration-300'
                  >
                    {item.title}
                  </Link>
                ) : (
                  <>
                    <button className='flex items-center gap-1 text-white hover:text-red-600 transition-all duration-300'>
                      <span>{item.title}</span>
                      <ChevronDown size={16} />
                    </button>

                    <div className='absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50'>
                      {item.submenu.map(submenu => (
                        <Link
                          key={submenu.title}
                          to={submenu.link}
                          className='block px-4 py-3 hover:bg-gray-100'
                        >
                          {submenu.title}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Button */}
          <div className='hidden lg:block'>
            <button className='bg-white/20 hover:bg-white hover:text-black cursor-pointer text-white px-4 py-2 text-sm rounded-lg  hover:scale-105 transition-all duration-300'>
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='lg:hidden bg-white py-2 px-3 shadow-lg rounded-lg'
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileMenu ? 'max-h-[700px] mt-4' : 'max-h-0'
          }`}
        >
          <div className='bg-[var(--light)] rounded-2xl shadow-lg p-5 flex flex-col gap-4'>
            {TopMenu.map(item => (
              <div key={item.title}>
                {!item.submenu ? (
                  <Link
                    to={item.link}
                    className='block py-2 border-b border-gray-100'
                  >
                    {item.title}
                  </Link>
                ) : (
                  <>
                    {/* Mobile Products */}
                    <button
                      onClick={() => setProductOpen(!productOpen)}
                      className='w-full flex items-center justify-between py-2 border-b border-gray-100'
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        size={18}
                        className={`transition-all duration-300 ${
                          productOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        productOpen ? 'max-h-60 mt-2' : 'max-h-0'
                      }`}
                    >
                      <div className='pl-4 flex flex-col gap-2'>
                        {item.submenu.map(submenu => (
                          <Link
                            key={submenu.title}
                            to={submenu.link}
                            className='py-2 text-sm text-gray-600'
                          >
                            {submenu.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* Mobile Button */}
            <button className='bg-[var(--primary-color)] text-white px-5 py-3 rounded-xl mt-3'>
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
