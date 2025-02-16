'use server'


import { prisma } from '@/lib/prisma';

export async function updatePublishedStatus(postId: string, published: boolean) {
  'use server';
  try {
    await prisma.post.update({
      where: { id: postId },
      data: { published },
    });
  } catch (error) {
    console.error('Failed to update published status:', error);
  }
}
