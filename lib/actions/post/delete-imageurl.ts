// 'use server';

import { prisma } from '@/lib/prisma';
import { del } from '@vercel/blob';

export const deleteImageUrl = async (postId: string) => {
  if (!postId) {
    throw new Error('Post ID is required');
  }

  try {
    // Retrieve the current imageUrl from the database
    const post = await prisma.post.findUnique({
      where: { id: postId },
      select: { imageUrl: true },
    });

    if (!post || !post.imageUrl) {
      throw new Error('Post or image not found');
    }

    const imageUrl = post.imageUrl;

    // Delete the image from Vercel Blob storage
    await del(imageUrl);

    // Update the post's imageUrl to null in the database
    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: { imageUrl: null },
    });

    return updatedPost;
  } catch (error) {
    console.error('Error deleting post image:', error);
    throw new Error('Failed to delete post image');
  }
};
