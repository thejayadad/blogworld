// app/components/postform/publish-toggle.tsx

'use client';

import { updatePublishedStatus } from '@/lib/actions/post/update-publish';
import React, { useState, useTransition } from 'react';

interface PublishToggleProps {
  initialPublished: boolean;
  postId: string;
}

const PublishToggle: React.FC<PublishToggleProps> = ({ initialPublished, postId }) => {
  const [isPublished, setIsPublished] = useState(initialPublished);
  const [isPending, startTransition] = useTransition();

  const handleToggle = () => {
    const newStatus = !isPublished;
    setIsPublished(newStatus);
    startTransition(() => {
      updatePublishedStatus(postId, newStatus);
    });
  };

  return (
    <div className="flex items-center space-x-2">
      <span>Published:</span>
      <button
        onClick={handleToggle}
        className={`px-4 py-2 rounded-md text-white ${
          isPublished ? 'bg-green-500' : 'bg-gray-500'
        }`}
        disabled={isPending}
      >
        {isPublished ? 'Yes' : 'No'}
      </button>
    </div>
  );
};

export default PublishToggle;
