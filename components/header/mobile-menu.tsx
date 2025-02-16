import Link from 'next/link';
import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import LinkItem from './link-item';
import Logo from '../ui/logo';
import { auth } from '@/auth';
import SignIn from '../auth/login';
import SignOut from '../auth/logout';

const MobileMenu = async () => {
    const session = await auth()

    const routes = [
        {
            href: '/',
            label: 'Post'
        },
        {
            href: '/dashboard',
            label: 'Dashboard'
        }
    ]
  return (
    <div>
      <input type="checkbox" id="menu-toggle" className="peer hidden" />
        <label         htmlFor="menu-toggle"
             className='p-2 flex rounded-full bg-purple-200 shadow-sm transition-all duration-300 hover:shadow-md'>
            <FiMenu className='text-gray-400' size={20}/>
        </label>
        <div className='fixed top-0 left-0 h-screen w-64 border-r z-[10000000] bg-neutral-50 text-gray-600 transform -translate-x-full peer-checked:translate-x-0 transition-transform duration-300 shadow-lg'>
        <div className="p-4 flex justify-between items-center mt-3 border-b">
          <span className="text-lg font-semibold">
            <Logo />
          </span>
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer text-2xl text-gray-400 hover:text-gray-900"
          >
            <FiX />
          </label>
        </div>
        <div className='grid grid-rows-6 h-full'>
            <div className='row-span-5 flex items-center justify-center space-y-4 flex-col'>
            {routes.map((route) => (
              <LinkItem key={route.label} href={route.href} label={route.label} />
            ))}
            </div>
            <div className='row-span-1 flex mt-6 justify-center h-full'>
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
        </div>
    </div>
  );
};

export default MobileMenu;
