// app/dashboard/page.tsx

import { auth } from "@/auth";
import HeadingText from "@/components/auth/heading-text";
import DeletePostButton from "@/components/postform/delete-post-form";
import Box from "@/components/ui/Box";
import NewPost from "@/components/ui/new-post";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Post } from "@prisma/client";

interface DashboardPageProps {}

export default async function DashboardPage({}: DashboardPageProps) {
  const session = await auth();

  if (!session || !session.user?.email) {
    redirect("/");
    return null;
  }

  const userEmail = session.user.email;

  // Fetch posts associated with the user's email
  const posts: Post[] = await prisma.post.findMany({
    where: { userEmail },
    orderBy: { createdAt: "desc" },
  });

  return (
    <Box>
      <div className="flex flex-col space-y-4 p-4">
        <div className="flex items-center justify-between">
          <HeadingText
            title="Dashboard Page"
            description="Create & Review all of your posts"
          />
          <NewPost />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">Title</th>
                <th className="px-4 py-2 border-b">Published</th>
                <th className="px-4 py-2 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr className="text-center" key={post.id}>
                  <td className="px-4 py-2 border-b">{post.title}</td>
                  <td className="px-4 py-2 border-b">
                    {post.published ? "Yes" : "No"}
                  </td>
                  <td className="px-4 py-2 border-b flex items-center space-x-2 justify-center">
                    <Link href={`/dashboard/post/${post.id}`}>Update</Link>
                    <DeletePostButton postId={post.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Box>
  );
}
