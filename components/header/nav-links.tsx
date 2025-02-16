import React from 'react'
import LinkItem from './link-item'

const NavLinks = () => {
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
    <div className='flex items-center space-x-2'>
        {routes.map((route) => (
              <LinkItem key={route.label} href={route.href} label={route.label} />
            ))}
    </div>
  )
}

export default NavLinks