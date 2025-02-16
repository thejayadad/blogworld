'use server';

import { prisma } from '@/lib/prisma';
import { put } from '@vercel/blob';


const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const ACCEPTED_FILE_TYPES = ['image/png'];

export const updateImageUrl = async (formData: FormData) => {
  const postId = formData.get('postId')?.toString();
  const imageFile = formData.get("imageUrl") as File | null;

  if (!postId || !imageFile) {
    throw new Error('Post ID and title are required');
  }
  let imageUrl = "";
    // Handle image upload if file exists
    if (imageFile) {
        if (imageFile.size > MAX_UPLOAD_SIZE) {
          return { error: { imageUrl: ["File size must be less than 3MB"] } };
        }
        if (!ACCEPTED_FILE_TYPES.includes(imageFile.type)) {
          return { error: { imageUrl: ["File must be a PNG"] } };
        }
        try {
            const { url } = await put(imageFile.name, imageFile, {
              access: "public",
              multipart: true
            });
            imageUrl = url;
          } catch (error) {
            console.error("File upload failed:", error);
            return { message: "Failed to upload image" };
          }
        }

  try {
    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: { imageUrl: imageUrl },
    });
    return updatedPost;
  } catch (error) {
    console.error('Error updating post title:', error);
    throw new Error('Failed to update post title');
  }
};
