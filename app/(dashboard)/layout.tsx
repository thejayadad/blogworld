import Aside from '@/components/sidebar/aside';
import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className='h-full flex bg-background-light dark:bg-background-dark'>
      <Aside />
       <main className='flex-1 h-full overflow-y-auto'>
       {children}
       </main>
    </div>
  )
}

export default layout