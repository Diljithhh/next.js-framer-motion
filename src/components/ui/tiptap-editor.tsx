"use client";

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';

interface TiptapEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

export default function TiptapEditor({ content, onChange, placeholder = 'Start writing...' }: TiptapEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-indigo-400 underline',
        },
      }),
      Image,
      Placeholder.configure({
        placeholder,
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'focus:outline-none',
      },
    },
  });

  if (!editor) {
    return null;
  }

  const addLink = () => {
    const url = window.prompt('Enter URL');
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const addImage = () => {
    const url = window.prompt('Enter image URL');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div className="border border-white/10 rounded-xl bg-white/[0.05] overflow-hidden">
      {/* Toolbar */}
      <div className="border-b border-white/10 p-2 flex flex-wrap gap-2 bg-white/[0.03]">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            editor.isActive('bold')
              ? 'bg-indigo-500/30 text-indigo-300 border border-indigo-500/50'
              : 'bg-white/[0.05] text-white/70 hover:bg-white/[0.1] border border-white/10'
          }`}
          title="Bold"
        >
          <strong>B</strong>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            editor.isActive('italic')
              ? 'bg-indigo-500/30 text-indigo-300 border border-indigo-500/50'
              : 'bg-white/[0.05] text-white/70 hover:bg-white/[0.1] border border-white/10'
          }`}
          title="Italic"
        >
          <em>I</em>
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            editor.isActive('heading', { level: 1 })
              ? 'bg-indigo-500/30 text-indigo-300 border border-indigo-500/50'
              : 'bg-white/[0.05] text-white/70 hover:bg-white/[0.1] border border-white/10'
          }`}
          title="Heading 1"
        >
          H1
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            editor.isActive('heading', { level: 2 })
              ? 'bg-indigo-500/30 text-indigo-300 border border-indigo-500/50'
              : 'bg-white/[0.05] text-white/70 hover:bg-white/[0.1] border border-white/10'
          }`}
          title="Heading 2"
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            editor.isActive('heading', { level: 3 })
              ? 'bg-indigo-500/30 text-indigo-300 border border-indigo-500/50'
              : 'bg-white/[0.05] text-white/70 hover:bg-white/[0.1] border border-white/10'
          }`}
          title="Heading 3"
        >
          H3
        </button>
        <div className="w-px h-6 bg-white/10 mx-1" />
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            editor.isActive('bulletList')
              ? 'bg-indigo-500/30 text-indigo-300 border border-indigo-500/50'
              : 'bg-white/[0.05] text-white/70 hover:bg-white/[0.1] border border-white/10'
          }`}
          title="Bullet List"
        >
          •
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            editor.isActive('orderedList')
              ? 'bg-indigo-500/30 text-indigo-300 border border-indigo-500/50'
              : 'bg-white/[0.05] text-white/70 hover:bg-white/[0.1] border border-white/10'
          }`}
          title="Numbered List"
        >
          1.
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            editor.isActive('blockquote')
              ? 'bg-indigo-500/30 text-indigo-300 border border-indigo-500/50'
              : 'bg-white/[0.05] text-white/70 hover:bg-white/[0.1] border border-white/10'
          }`}
          title="Quote"
        >
          &ldquo;
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            editor.isActive('codeBlock')
              ? 'bg-indigo-500/30 text-indigo-300 border border-indigo-500/50'
              : 'bg-white/[0.05] text-white/70 hover:bg-white/[0.1] border border-white/10'
          }`}
          title="Code Block"
        >
          {'</>'}
        </button>
        <div className="w-px h-6 bg-white/10 mx-1" />
        <button
          type="button"
          onClick={addLink}
          className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white/[0.05] text-white/70 hover:bg-white/[0.1] border border-white/10 transition-colors"
          title="Add Link"
        >
          🔗
        </button>
        <button
          type="button"
          onClick={addImage}
          className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white/[0.05] text-white/70 hover:bg-white/[0.1] border border-white/10 transition-colors"
          title="Add Image"
        >
          🖼️
        </button>
      </div>

      {/* Editor Content */}
      <div className="bg-white text-black min-h-[300px]">
        <style dangerouslySetInnerHTML={{ __html: `
          .ProseMirror {
            min-height: 300px;
            padding: 1rem;
            outline: none;
          }
          .ProseMirror p {
            margin-bottom: 0.75rem;
          }
          .ProseMirror h1 {
            font-size: 2rem;
            font-weight: bold;
            margin-top: 1.5rem;
            margin-bottom: 1rem;
          }
          .ProseMirror h2 {
            font-size: 1.5rem;
            font-weight: bold;
            margin-top: 1.25rem;
            margin-bottom: 0.75rem;
          }
          .ProseMirror h3 {
            font-size: 1.25rem;
            font-weight: bold;
            margin-top: 1rem;
            margin-bottom: 0.5rem;
          }
          .ProseMirror ul, .ProseMirror ol {
            margin-left: 1.5rem;
            margin-bottom: 0.75rem;
          }
          .ProseMirror li {
            margin-bottom: 0.25rem;
          }
          .ProseMirror blockquote {
            border-left: 4px solid #ddd;
            padding-left: 1rem;
            margin: 1rem 0;
            font-style: italic;
          }
          .ProseMirror code {
            background-color: #f4f4f4;
            padding: 0.125rem 0.25rem;
            border-radius: 0.25rem;
            font-family: monospace;
          }
          .ProseMirror pre {
            background-color: #f4f4f4;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
            margin: 1rem 0;
          }
          .ProseMirror pre code {
            background-color: transparent;
            padding: 0;
          }
          .ProseMirror img {
            max-width: 100%;
            height: auto;
            margin: 1rem 0;
          }
          .ProseMirror a {
            color: #6366f1;
            text-decoration: underline;
          }
          .ProseMirror p.is-editor-empty:first-child::before {
            color: #adb5bd;
            content: attr(data-placeholder);
            float: left;
            height: 0;
            pointer-events: none;
          }
        ` }} />
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

