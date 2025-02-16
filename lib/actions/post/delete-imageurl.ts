'use server'
// 'use server';

import { prisma } from '@/lib/prisma';

export const deleteImageUrl = async (postId: string) => {
  if (!postId) {
    throw new Error('Post ID is required');
  }

  try {
    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: { imageUrl: null }, // Set imageUrl to null or '' to remove the image
    });
    return updatedPost;
  } catch (error) {
    console.error('Error deleting post image:', error);
    throw new Error('Failed to delete post image');
  }
};
