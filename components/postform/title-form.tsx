'use client';

import React, { useState, FormEvent } from 'react';
import { FiEdit } from 'react-icons/fi';
import { updateTitle } from '@/lib/actions/post/update-title';

interface TitleFormProps {
  initialTitle: string;
  postId: string;
}

const TitleForm: React.FC<TitleFormProps> = ({ initialTitle, postId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('postId', postId);
    formData.append('title', title);

    try {
      await updateTitle(formData);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to update title:', error);
    }
  };

  return (
    <div className="w-full shadow-sm">
      <div className="flex items-center justify-between">
        {!isEditing ? (
          <>
            <h2 className="text-xl font-semibold">{title}</h2>
            <button
              onClick={toggleEdit}
              className="flex items-center text-blue-500 hover:text-blue-700"
            >
              <FiEdit className="h-4 w-4 mr-1" />
              Edit
            </button>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="flex items-center space-x-2 w-full">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="flex-grow p-2 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
              Save
            </button>
            <button
              type="button"
              onClick={toggleEdit}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default TitleForm;
