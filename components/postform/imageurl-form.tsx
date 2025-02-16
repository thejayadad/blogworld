'use client';

import React, { useState, useRef } from 'react';
import { updateImageUrl } from '@/lib/actions/post/update-imageurl';
import { deleteImageUrl } from '@/lib/actions/post/delete-imageurl';
import { FiImage, FiTrash2 } from 'react-icons/fi';

interface ImageUrlFormProps {
  initialImageUrl: string | null;
  postId: string;
}

const ImageUrlForm: React.FC<ImageUrlFormProps> = ({ initialImageUrl, postId }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(initialImageUrl);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append('postId', postId);
    formData.append('imageUrl', selectedFile);

    try {
      await updateImageUrl(formData);
      // Optionally, refresh the page or update the state to reflect the new image
    } catch (error) {
      console.error('Failed to upload image:', error);
    } finally {
      setIsUploading(false);
      // Reset the file input value to allow re-uploading the same file if needed
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleDelete = async () => {
    try {
      await deleteImageUrl(postId);
      setImageUrl(null);
      setSelectedFile(null);
      // Optionally, refresh the page or update the state to reflect the removal
    } catch (error) {
      console.error('Failed to delete image:', error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-64 mb-4">
        {imageUrl ? (
          <div className="relative w-full h-full">
            <img
              src={imageUrl}
              alt="Post Image"
              className="object-cover h-[400px] w-full rounded-md cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            />
            <button
              onClick={handleDelete}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
            >
              <FiTrash2 className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <label
            htmlFor="fileInput"
            className="flex flex-col items-center justify-center w-full h-full bg-gray-200 rounded-md cursor-pointer"
          >
            <FiImage className="text-gray-400 text-6xl" />
            <span className="mt-2 text-gray-600">Click to upload an image</span>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
          </label>
        )}
      </div>
      {selectedFile && (
        <button
          onClick={handleUpload}
          className="px-4 py-2 z-[100000] bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          disabled={isUploading}
        >
          {isUploading ? 'Uploading...' : 'Upload Image'}
        </button>
      )}
    </div>
  );
};

export default ImageUrlForm;
