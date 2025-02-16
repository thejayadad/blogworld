import React from 'react'
import ThemeToggle from './theme-toggle'
import { auth } from '@/auth'
import SignOut from '../auth/logout'
import SignIn from '../auth/login'

const Header = async () => {
    const session = await auth()
  return (
    <header
    className='w-full border-b dark:border-b-background-dark/90 dark:bg-text-light/30 py-2'
    >
        <div className='mx-auto max-w-screen-2xl px-4 py-2'>
            <div className='flex justify-end items-center space-x-4'>
                <div>
                    <ThemeToggle />
                </div>
                <div>
                {session ? (
                    <>
                    <SignOut />
                    </>
                ): 
                (

                    <>
                    <SignIn />
                    </>
                )
                }
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header