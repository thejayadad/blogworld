// app/actions/deletePost.js

"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function deletePost(postId: string) {
  "use server";

  try {
    await prisma.post.delete({
      where: { id: postId },
    });
  } catch (error) {
    console.log("Failed to delete post: " + error);
  }
  redirect("/dashboard");

}
