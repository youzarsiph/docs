/**
 * Menus
 */

import { Editor } from '@tiptap/react'
import { DropdownProps } from '@/app/types'

const Menus: DropdownProps[] = [
  {
    label: 'File',
    items: [
      {
        type: 'item',
        name: 'New',
        shortcut: 'Ctrl + N',
        description: 'New Doc',
        icon: () => <i className="bi bi-file-earmark-plus text-xl" />,
        onClick: () => {},
      },
      {
        type: 'item',
        name: 'Open',
        description: 'Open a file',
        icon: () => <i className="bi bi-file-earmark-check text-xl" />,
        onClick: () => {},
      },
      {
        type: 'item',
        name: 'Save',
        description: 'Save the open file',
        icon: () => <i className="bi bi-save text-xl" />,
        onClick: () => {},
      },
      {
        type: 'item',
        name: 'Save as',
        description: 'Save the open file as...',
        icon: () => <i className="bi bi-save2 text-xl" />,
        onClick: () => {},
      },
      {
        type: 'item',
        name: 'Download',
        description: 'Download',
        icon: () => <i className="bi bi-download text-xl" />,
        onClick: () => {},
      },
      {
        type: 'item',
        name: 'Print',
        shortcut: 'Ctrl + P',
        description: 'Print',
        icon: () => <i className="bi bi-printer text-xl" />,
        onClick: () => {},
      },
    ],
  },
  {
    label: 'Edit',
    items: [
      {
        type: 'item',
        name: 'Undo',
        shortcut: 'Ctrl + Z',
        description: 'Undo last action',
        icon: () => <i className="bi bi-arrow-clockwise text-xl" />,
        onClick: (editor: Editor) => editor.chain().focus().undo().run(),
      },
      {
        type: 'item',
        name: 'Redo',
        shortcut: 'Ctrl + Shift + Z',
        description: 'Redo last action',
        icon: () => <i className="bi bi-arrow-counterclockwise text-xl" />,
        onClick: (editor: Editor) => editor.chain().focus().redo().run(),
      },
      {
        type: 'item',
        name: 'Cut',
        shortcut: 'Ctrl + X',
        description: 'Cut selected text',
        icon: () => <i className="bi bi-scissors text-xl" />,
        onClick: (editor: Editor) =>
          editor
            .chain()
            .focus()
            .cut({ from: 0, to: editor.getText().length - 1 }, 1)
            .run(),
      },
      {
        type: 'item',
        name: 'Copy',
        shortcut: 'Ctrl + C',
        description: 'Copy selected text',
        icon: () => <i className="bi bi-copy text-xl" />,
        onClick: () => {},
      },
      {
        type: 'item',
        name: 'Pase',
        shortcut: 'Ctrl + V',
        description: 'Pase selected text',
        icon: () => <i className="bi bi-clipboard text-xl" />,
        onClick: () => {},
      },
      {
        type: 'item',
        name: 'Select All',
        shortcut: 'Ctrl + A',
        description: 'Select all text',
        icon: () => <i className="bi bi-body-text text-xl" />,
        onClick: (editor: Editor) => editor.chain().focus().selectAll().run(),
      },
      {
        type: 'item',
        name: 'Delete',
        description: 'Delete selected text',
        icon: () => <i className="bi bi-trash text-xl" />,
        onClick: (editor: Editor) =>
          editor.chain().focus().deleteSelection().run(),
      },
    ],
  },
  {
    label: 'View',
    items: [
      {
        type: 'item',
        name: 'New',
        shortcut: 'Ctrl + N',
        description: 'New Doc',
        icon: () => <i className="bi bi-file-earmark-plus text-xl" />,
        onClick: () => {},
      },
    ],
  },
  {
    label: 'Insert',
    items: [
      {
        type: 'item',
        name: 'Image',
        description: 'Insert an image',
        icon: () => <i className="bi bi-image text-xl" />,
        onClick: (editor: Editor) =>
          editor.chain().focus().setImage({ src: '../assets/img.png' }).run(),
      },
      {
        type: 'item',
        name: 'Table',
        description: 'Insert a table',
        icon: () => <i className="bi bi-table text-xl" />,
        onClick: (editor: Editor) =>
          editor
            .chain()
            .focus()
            .insertTable({ rows: 1, cols: 3, withHeaderRow: true })
            .run(),
      },
      {
        type: 'item',
        name: 'Horizontal Rule',
        description: 'Insert an horizontal rule',
        icon: () => <i className="bi bi-hr text-xl" />,
        onClick: (editor: Editor) =>
          editor.chain().focus().setHorizontalRule().run(),
      },
      {
        type: 'item',
        name: 'Hard Break',
        description: 'Insert an hard break',
        icon: () => <i className="bi bi-file-earmark-break text-xl" />,
        onClick: (editor: Editor) =>
          editor.chain().focus().setHardBreak().run(),
      },
      {
        type: 'item',
        name: 'Link',
        description: 'Insert a link',
        icon: () => <i className="bi bi-link-45deg text-xl" />,
        onClick: (editor: Editor) =>
          editor
            .chain()
            .focus()
            .setLink({ href: 'https://github.com/youzarsiph' })
            .run(),
      },
      {
        type: 'item',
        name: 'Code Block',
        description: 'Insert a codeblock',
        icon: () => <i className="bi bi-code-square text-xl" />,
        onClick: (editor: Editor) =>
          editor.chain().focus().toggleCodeBlock().run(),
      },
      {
        type: 'item',
        name: 'Blockquote',
        description: 'Insert a Blockquote',
        icon: () => <i className="bi bi-blockquote-left text-xl" />,
        onClick: (editor: Editor) =>
          editor.chain().focus().toggleBlockquote().run(),
      },
    ],
  },
  {
    label: 'Format',
    items: [
      {
        type: 'menu',
        name: 'Text',
        description: 'Text formatting',
        icon: () => <i className="bi bi-type-bold text-xl" />,
        onClick: () => {},
        items: [
          {
            type: 'item',
            name: 'Bold',
            shortcut: 'Ctrl + B',
            disabled: (editor: Editor) => !editor.can().toggleBold(),
            description: 'Toggle bold',
            icon: () => <i className="bi bi-type-bold text-xl" />,
            onClick: (editor: Editor) =>
              editor.chain().focus().toggleBold().run(),
          },
          {
            type: 'item',
            name: 'Italic',
            shortcut: 'Ctrl + I',
            disabled: (editor: Editor) => !editor.can().toggleItalic(),
            description: 'Toggle italic',
            icon: () => <i className="bi bi-type-italic text-xl" />,
            onClick: (editor: Editor) =>
              editor.chain().focus().toggleItalic().run(),
          },
          {
            type: 'item',
            name: 'Underline',
            shortcut: 'Ctrl + U',
            disabled: (editor: Editor) => !editor.can().toggleUnderline(),
            description: 'Toggle underline',
            icon: () => <i className="bi bi-type-underline text-xl" />,
            onClick: (editor: Editor) =>
              editor.chain().focus().toggleUnderline().run(),
          },
          {
            type: 'item',
            name: 'Strikethrough',
            shortcut: 'Ctrl + Shift + S',
            disabled: (editor: Editor) => !editor.can().toggleStrike(),
            description: 'Toggle strikethrough',
            icon: () => <i className="bi bi-type-strikethrough text-xl" />,
            onClick: (editor: Editor) =>
              editor.chain().focus().toggleStrike().run(),
          },
          {
            type: 'item',
            name: 'Subscript',
            shortcut: 'Ctrl + ,',
            disabled: (editor: Editor) => !editor.can().toggleSubscript(),
            description: 'Toggle subscript',
            icon: () => <i className="bi bi-subscript text-xl" />,
            onClick: (editor: Editor) =>
              editor.chain().focus().toggleSubscript().run(),
          },
          {
            type: 'item',
            name: 'Superscript',
            shortcut: 'Ctrl + .',
            disabled: (editor: Editor) => !editor.can().toggleSuperscript(),
            description: 'Toggle subscript',
            icon: () => <i className="bi bi-superscript text-xl" />,
            onClick: (editor: Editor) =>
              editor.chain().focus().toggleSuperscript().run(),
          },
          {
            type: 'item',
            name: 'Inline code',
            disabled: (editor: Editor) => !editor.can().toggleCode(),
            description: 'Toggle inline code',
            icon: () => <i className="bi bi-code text-xl" />,
            onClick: (editor: Editor) =>
              editor.chain().focus().toggleCode().run(),
          },
          {
            type: 'item',
            name: 'Highlight',
            disabled: (editor: Editor) => !editor.can().toggleHighlight(),
            description: 'Toggle highlight',
            icon: () => <i className="bi bi-markdown text-xl" />,
            onClick: (editor: Editor) =>
              editor.chain().focus().toggleHighlight().run(),
          },
        ],
      },
      {
        type: 'menu',
        name: 'Paragraph styles',
        description: 'Paragraph styles',
        icon: () => <i className="bi bi-justify text-xl" />,
        onClick: () => {},
        items: [
          {
            type: 'item',
            name: 'Paragraph',
            shortcut: 'Ctrl + Alt + 0',
            disabled: (editor: Editor) => !editor.can().setParagraph(),
            description: 'Apply paragraph style',
            icon: () => <i className="bi bi-paragraph text-xl" />,
            onClick: (editor: Editor) =>
              editor.chain().focus().setParagraph().run(),
          },
          {
            type: 'item',
            name: 'Heading 1',
            shortcut: 'Ctrl + Alt + 1',
            disabled: (editor: Editor) =>
              !editor.can().setHeading({ level: 1 }),
            description: 'Apply heading 1 style',
            icon: () => <i className="bi bi-type-h1 text-xl" />,
            onClick: (editor: Editor) =>
              editor.chain().focus().setHeading({ level: 1 }).run(),
          },
          {
            type: 'item',
            name: 'Heading 2',
            shortcut: 'Ctrl + Alt + 2',
            disabled: (editor: Editor) =>
              !editor.can().setHeading({ level: 2 }),
            description: 'Apply heading 2 style',
            icon: () => <i className="bi bi-type-h2 text-xl" />,
            onClick: (editor: Editor) =>
              editor.chain().focus().setHeading({ level: 2 }).run(),
          },
          {
            type: 'item',
            name: 'Heading 3',
            shortcut: 'Ctrl + Alt + 3',
            disabled: (editor: Editor) =>
              !editor.can().setHeading({ level: 3 }),
            description: 'Apply heading 3 style',
            icon: () => <i className="bi bi-type-h3 text-xl" />,
            onClick: (editor: Editor) =>
              editor.chain().focus().setHeading({ level: 3 }).run(),
          },
          {
            type: 'item',
            name: 'Heading 4',
            shortcut: 'Ctrl + Alt + 4',
            disabled: (editor: Editor) =>
              !editor.can().setHeading({ level: 4 }),
            description: 'Apply heading 4 style',
            icon: () => <i className="bi bi-type-h4 text-xl" />,
            onClick: (editor: Editor) =>
              editor.chain().focus().setHeading({ level: 4 }).run(),
          },
          {
            type: 'item',
            name: 'Heading 5',
            shortcut: 'Ctrl + Alt + 5',
            disabled: (editor: Editor) =>
              !editor.can().setHeading({ level: 5 }),
            description: 'Apply heading 5 style',
            icon: () => <i className="bi bi-type-h5 text-xl" />,
            onClick: (editor: Editor) =>
              editor.chain().focus().setHeading({ level: 5 }).run(),
          },
          {
            type: 'item',
            name: 'Heading 6',
            shortcut: 'Ctrl + Alt + 6',
            disabled: (editor: Editor) =>
              !editor.can().setHeading({ level: 6 }),
            description: 'Apply heading 6 style',
            icon: () => <i className="bi bi-type-h6 text-xl" />,
            onClick: (editor: Editor) =>
              editor.chain().focus().setHeading({ level: 6 }).run(),
          },
        ],
      },
      {
        type: 'menu',
        name: 'Align & Indent',
        description: 'Align & Indent',
        icon: () => <i className="bi bi-text-left text-xl" />,
        onClick: () => {},
        items: [
          {
            type: 'item',
            name: 'Text align left',
            shortcut: 'Ctrl + Shift + L',
            description: 'Change text alignment to left',
            icon: () => <i className="bi bi-text-left text-xl" />,
            onClick: (editor: Editor) =>
              editor.chain().focus().setTextAlign('left').run(),
          },
          {
            type: 'item',
            name: 'Text align center',
            shortcut: 'Ctrl + Shift + E',
            description: 'Change text alignment to center',
            icon: () => <i className="bi bi-text-center text-xl" />,
            onClick: (editor: Editor) =>
              editor.chain().focus().setTextAlign('center').run(),
          },
          {
            type: 'item',
            name: 'Text align right',
            shortcut: 'Ctrl + Shift + R',
            description: 'Change text alignment to right',
            icon: () => <i className="bi bi-text-right text-xl" />,
            onClick: (editor: Editor) =>
              editor.chain().focus().setTextAlign('right').run(),
          },
          {
            type: 'item',
            name: 'Text align justify',
            shortcut: 'Ctrl + Shift + J',
            description: 'Change text alignment to justify',
            icon: () => <i className="bi bi-justify text-xl" />,
            onClick: (editor: Editor) =>
              editor.chain().focus().setTextAlign('justify').run(),
          },
          {
            type: 'item',
            name: 'Increase indent',
            shortcut: 'Tab',
            disabled: (editor: Editor) =>
              !editor.can().sinkListItem('listItem'),
            description: 'Add numbered list',
            icon: () => <i className="bi bi-indent text-xl" />,
            onClick: (editor: Editor) =>
              editor.chain().focus().sinkListItem('listItem').run(),
          },
          {
            type: 'item',
            name: 'Decrease indent',
            shortcut: 'Shift + Tab',
            disabled: (editor: Editor) =>
              !editor.can().liftListItem('listItem'),
            description: 'Add numbered list',
            icon: () => <i className="bi bi-unindent text-xl" />,
            onClick: (editor: Editor) =>
              editor.chain().focus().liftListItem('listItem').run(),
          },
        ],
      },
      {
        type: 'menu',
        name: 'Bullets & Numbering',
        description: 'Bullets & Numbering',
        icon: () => <i className="bi bi-list-ul text-xl" />,
        onClick: () => {},
        items: [
          {
            type: 'item',
            name: 'Task list',
            disabled: (editor: Editor) => !editor.can().toggleTaskList(),
            description: 'Add task list',
            icon: () => <i className="bi bi-list-check text-xl" />,
            onClick: (editor: Editor) =>
              editor.chain().focus().toggleTaskList().run(),
          },
          {
            type: 'item',
            name: 'Bullet list',
            disabled: (editor: Editor) => !editor.can().toggleBulletList(),
            description: 'Add bullet list',
            icon: () => <i className="bi bi-list-ul text-xl" />,
            onClick: (editor: Editor) =>
              editor.chain().focus().toggleBulletList().run(),
          },
          {
            type: 'item',
            name: 'Numbered list',
            disabled: (editor: Editor) => !editor.can().toggleOrderedList(),
            description: 'Add numbered list',
            icon: () => <i className="bi bi-list-ol text-xl" />,
            onClick: (editor: Editor) =>
              editor.chain().focus().toggleOrderedList().run(),
          },
        ],
      },
      {
        type: 'item',
        name: 'Clear marks',
        disabled: (editor: Editor) => !editor.can().unsetAllMarks(),
        description: 'Clear all marks',
        icon: () => <i className="bi bi-x-lg text-xl" />,
        onClick: (editor: Editor) =>
          editor.chain().focus().unsetAllMarks().run(),
      },
      {
        type: 'item',
        name: 'Clear nodes',
        disabled: (editor: Editor) => !editor.can().clearNodes(),
        description: 'Clear all nodes',
        icon: () => <i className="bi bi-x-square text-xl" />,
        onClick: (editor: Editor) => editor.chain().focus().clearNodes().run(),
      },
    ],
  },
  {
    label: 'Tools',
    items: [
      {
        type: 'item',
        name: 'Spell check',
        description: 'Check doc spell',
        icon: () => <i className="bi bi-spellcheck text-xl" />,
        onClick: () => {},
      },
      {
        type: 'item',
        name: 'Word & Character Count',
        description: 'Word & Character Count show/hide',
        icon: () => <i className="bi bi-123 text-xl" />,
        onClick: () => {},
      },
    ],
  },
]

export default Menus
