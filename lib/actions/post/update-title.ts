'use server';

import { prisma } from '@/lib/prisma';

export const updateTitle = async (formData: FormData) => {
  const postId = formData.get('postId')?.toString();
  const newTitle = formData.get('title')?.toString();

  if (!postId || !newTitle) {
    throw new Error('Post ID and title are required');
  }

  try {
    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: { title: newTitle },
    });
    return updatedPost;
  } catch (error) {
    console.error('Error updating post title:', error);
    throw new Error('Failed to update post title');
  }
};
