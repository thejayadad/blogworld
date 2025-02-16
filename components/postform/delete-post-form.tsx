'use client';

import { deletePost } from '@/lib/actions/post/delete-post';
import React from 'react';

interface DeletePostButtonProps {
    postId: string;
  }
  

const DeletePostButton: React.FC<DeletePostButtonProps> = ({ postId }) => {
  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this post?')) {
      deletePost(postId);
    }
  };

  return (
    <button
      type="button"
      className="ml-4 text-red-500 hover:underline"
      onClick={handleDelete}
    >
      Delete
    </button>
  );
};

export default DeletePostButton;
