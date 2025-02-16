'use client';

import React from 'react';
import { Editor } from '@tiptap/react';
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaListUl,
  FaListOl,
  FaQuoteLeft,
  FaUndo,
  FaRedo,
  FaCode,
  FaHeading,
} from 'react-icons/fa';

interface ToolbarProps {
  editor: Editor | null;
}

const Toolbar: React.FC<ToolbarProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const setHeading = (level: number) => {
    editor.chain().focus().toggleHeading({ level }).run();
  };

  return (
    <div className="flex space-x-2 mb-2">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 ${editor.isActive('bold') ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        <FaBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 ${editor.isActive('italic') ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        <FaItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`p-2 ${editor.isActive('strike') ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        <FaStrikethrough />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 ${editor.isActive('bulletList') ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        <FaListUl />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 ${editor.isActive('orderedList') ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        <FaListOl />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`p-2 ${editor.isActive('blockquote') ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        <FaQuoteLeft />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`p-2 ${editor.isActive('codeBlock') ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        <FaCode />
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        className="p-2 bg-gray-200"
      >
        <FaUndo />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        className="p-2 bg-gray-200"
      >
        <FaRedo />
      </button>
      {[1, 2, 3].map((level) => (
        <button
          key={level}
          onClick={() => setHeading(level)}
          className={`p-2 ${editor.isActive('heading', { level }) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          <FaHeading className={`h-${level + 2} w-${level + 2}`} />
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
