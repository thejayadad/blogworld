import { auth } from '@/auth';
import HeadingText from '@/components/auth/heading-text';
import TitleForm from '@/components/postform/title-form';
import Box from '@/components/ui/Box';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';
import React from 'react'


interface Props{
    params: {
        id: string;
    }
}
const SinglePostPage = async ({params}:Props) => {
    const {id} = await params;
    const session = await auth()
    const userEmail = session?.user?.email
    if(!session){
        redirect('/')
    }
    const post = await prisma.post.findUnique({
        where: {
            id: id
        }
    })
    if(!post){
        redirect("/")
    }
    //REQUIRED FIELDS
    const requiredFields = [
        post.title,
        post.content,
        post.imageUrl
    ]
    const totalFields = requiredFields.length;
    const completedFields = requiredFields.filter(Boolean).length;
    const completedText = `(${completedFields} / ${totalFields})`

    const formattedDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date(post.createdAt));
  return (
   <div>
    <Box>
      <div className='py-4 px-2'>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl font-extrabold leading-6'>Update Post Page</h1>
            <span className='text-sm text-slate-700'>Required Fields {completedText}</span>
        </div>
        <div className='mt-6'>
            <div className='h-[400px] bg-orange-300'>
                SinglePostPage
            </div>
            <div className="mt-4 flex items-center justify-between">
                <TitleForm
                initialTitle={post.title}
                postId={post.id}
                />
              <p className="text-gray-600 mb-4 w-full flex justify-end">
                By {post.userEmail} on {formattedDate}
              </p>
            </div>
            <div className="prose">{post.content} POST CONTENT HERE</div>

        </div>
      </div>
    </Box>
   </div>
  )
}

export default SinglePostPage