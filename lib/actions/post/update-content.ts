'use server';

import { prisma } from '@/lib/prisma';

export const updateContent = async (formData: FormData) => {
  const postId = formData.get('postId')?.toString();
  const newContent = formData.get('content')?.toString();

  if (!postId || !newContent) {
    throw new Error('Post ID and title are required');
  }

  try {
    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: { content: newContent },
    });
    return updatedPost;
  } catch (error) {
    console.error('Error updating post title:', error);
    throw new Error('Failed to update post title');
  }
};
