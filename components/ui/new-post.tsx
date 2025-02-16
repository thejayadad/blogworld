'use client';

import { createTitle } from '@/lib/actions/post/create-title';

const NewPost = () => {
  return (
    <form action={createTitle}>
      <button
        type="submit"
        className="px-2 py-1 flex w-full items-center bg-purple-500 text-white rounded-md hover:bg-purple-600 transition"
      >
        New Post
      </button>
    </form>
  );
};

export default NewPost;
