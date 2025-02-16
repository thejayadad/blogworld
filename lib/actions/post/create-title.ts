'use server';

import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

export const createTitle = async (formData: FormData) => {
  let newPost;
  try {
    const session = await auth();
    const userEmail = session?.user?.email;

    if (!userEmail) {
      throw new Error('User not authenticated');
    }

    // Create a new post with an empty title
    newPost = await prisma.post.create({
      data: {
        title: '',
        content: '', // Add default content if needed
        userEmail: userEmail,
      },
    });

    // Revalidate the posts list page if necessary
    // revalidatePath('/posts');
  } catch (error) {
    console.error('Error creating post:', error);
    // Handle the error appropriately
    return;
  }

  // Redirect to the new post's page
  redirect(`/dashboard/post/${newPost.id}`);
};
