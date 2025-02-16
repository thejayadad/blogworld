import React from 'react'
import Box from '../ui/Box'
import MobileMenu from './mobile-menu'
import Logo from '../ui/logo'
import NavLinks from './nav-links'
import { auth } from '@/auth'
import SignOut from '../auth/logout'
import SignIn from '../auth/login'

const Header = async () => {
  const session = await auth()
  return (
    <header
    className='w-full border-b py-4'
    >
       <Box>
        <div className='flex items-center justify-between gap-3 md:gap-0'>
        <div>
            <Logo />
        </div>
            <div className='block lg:hidden'>
                <MobileMenu />
            </div>
            <div className='hidden lg:flex items-center space-x-1'>
                <NavLinks />
                         {
                                  session ? (
                                      <>
                                          <SignOut />
                                      </>
                                  ) :
              
                                  (
                                      <>
                                      <SignIn />
                                      </>
                                  )
                              }
            </div>
        </div>
       </Box>
    </header>
  )
}

export default Header