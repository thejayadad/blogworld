import { auth } from '@/auth';
import Header from '@/components/header/header';
import Aside from '@/components/sidebar/aside';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import React from 'react'

const layout = async ({
    children, params
  }: Readonly<{
    children: React.ReactNode;
    params: {websiteId: string}
  }>) => {
    const session = await auth()
    const userEmail = session?.user?.email
    if(!session){
      redirect('/')
    }

    // const website = await prisma.website.findFirst({
    //     where: {
    //         id:params.websiteId,
    //         userEmail
    //     }
    // })
    // if(!website){
    //     redirect('/')
    // }

    return(
        <>
        {children}
        </>
    )
}

export default layout