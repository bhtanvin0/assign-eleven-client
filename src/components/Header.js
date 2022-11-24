import React, { useContext } from 'react';
import Socials from './Socials';
import Logo from '../img/header/logo192 - Copy.png';
import MobileNav from './MobileNav';
import { Link, useNavigate } from 'react-router-dom';
import { CursorContext } from '../context/CursorContext';
import { AuthContext } from './AuthProvider/AuthProvider';

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const { logOut, user } = useContext(AuthContext)
  const navigete = useNavigate()
  const handleLogOut = () => {
    logOut()
      .then(result => {
        navigete('/login')
      })
      .catch(err => {
        alert.error(err.message)
      })

  }

  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* logo */}
        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          to={'/'}
          className='max-w-[100px]'
        >
          <img src={Logo} alt='' />
        </Link>
        {/* nav - initially hidden - show on desktop mode */}
        <nav
          className='hidden xl:flex gap-x-12 font-semibold'
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <Link
            to={'/'}
            className='text-[#696c6d] hover:text-primary transition'
          >
            Home
          </Link>
          {/* <Link
            to={'/about'}
            className='text-[#696c6d] hover:text-primary transition'
          >
            About
          </Link> */}
          <Link
            to={'/services'}
            className='text-[#696c6d] hover:text-primary transition'
          >
            Services
          </Link>
          <Link
            to={'/contact'}
            className='text-[#696c6d] hover:text-primary transition'
          >
            Contact
          </Link>
          <Link
            to={'/blog'}
            className='text-[#696c6d] hover:text-primary transition'
          >
            Blog
          </Link>

          {
            user?.uid ? <div>
              <Link onClick={handleLogOut} className='mr-2 border-2 rounded-lg  p-2 rounded-lg hover:bg-violet-500 text-block font-bold hover:text-orange-600'><span>Log Out</span></Link>
              <Link
                to={'/reviews'}
                className='text-[#696c6d] hover:text-primary transition mx-2'
              >
                My reviews
              </Link>
              <Link
                to={'/addservice'}
                className='text-[#696c6d] hover:text-primary transition '
              >
                Add Service
              </Link>
            </div>

              : <div>

                <Link

                  to={'/login'}
                  className='text-[#696c6d] hover:text-primary transition mr-5'
                >
                  Login
                </Link>
                <Link
                  to={'/register'}
                  className='text-[#696c6d] hover:text-primary transition'
                >
                  Register
                </Link>
              </div>
          }


        </nav>
      </div>
      {/* socials */}
      <Socials />
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
