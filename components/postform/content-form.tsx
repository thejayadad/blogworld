'use client';

import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { updateContent } from '@/lib/actions/post/update-content';
import Toolbar from './toolbar';

interface ContentFormProps {
  initialContent?: string;
  postId: string;
}

const ContentForm: React.FC<ContentFormProps> = ({
    initialContent = '', // Default to an empty string if initialContent is undefined
    postId,
  }) => {
  const [isEditing, setIsEditing] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
    editable: isEditing,
  });

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    if (editor) {
      editor.setEditable(!isEditing);
    }
  };

  const handleSave = async () => {
    if (!editor) return;

    const updatedContent = editor.getHTML();
    const formData = new FormData();
    formData.append('postId', postId);
    formData.append('content', updatedContent);

    try {
      await updateContent(formData);
      setIsEditing(false);
      editor.setEditable(false);
    } catch (error) {
      console.error('Failed to update content:', error);
    }
  };

  return (
    <div className="bg-neutral-50 w-full py-4 rounded-md shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Content</h2>
        <button
          onClick={toggleEdit}
          className="flex items-center text-blue-500 hover:text-blue-700"
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
      </div>
      <div className="mt-4">
        {isEditing ? (
          <>
            <Toolbar editor={editor} /> {/* Include the Toolbar component */}
            <EditorContent editor={editor} />
            <button
              onClick={handleSave}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
              Save
            </button>
          </>
        ) : (
            <>
                
            </>
        )}
      </div>
    </div>
  );
};

export default ContentForm;
