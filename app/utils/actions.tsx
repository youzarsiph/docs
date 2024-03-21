/**
 * Editor actions
 */

import { Editor } from "@tiptap/react";
import { Fonts } from "@/app/styles";

const Actions = [
  {
    type: "item",
    name: "Undo",
    isActive: undefined,
    disabled: (editor: Editor) => !editor.can().undo(),
    description: "Undo latest action",
    icon: () => <i className="bi bi-arrow-counterclockwise" />,
    onClick: (editor: Editor) => editor.chain().focus().undo().run(),
  },
  {
    type: "item",
    name: "Redo",
    isActive: undefined,
    disabled: (editor: Editor) => !editor.can().redo(),
    description: "Redo latest action",
    icon: () => <i className="bi bi-arrow-clockwise" />,
    onClick: (editor: Editor) => editor.chain().focus().redo().run(),
  },
  {
    type: "item",
    name: "Print",
    isActive: undefined,
    disabled: (editor: Editor) => editor.getText().length === 0,
    description: "Print the doc",
    icon: () => <i className="bi bi-printer" />,
    onClick: (editor: Editor) => editor.chain().focus().run(),
  },
  {
    type: "item",
    name: "Spell check",
    isActive: undefined,
    disabled: undefined,
    description: "Check document spell",
    icon: () => <i className="bi bi-spellcheck" />,
    onClick: (editor: Editor) => editor.chain().focus().run(),
  },
  {
    type: "item",
    name: "Zoom",
    isActive: undefined,
    disabled: undefined,
    description: "Document zoom level",
    icon: () => <i className="bi bi-zoom-in" />,
    onClick: (editor: Editor) => editor.chain().focus().run(),
  },
  {
    type: "dropdown",
    name: "Styles",
    isActive: undefined,
    disabled: undefined,
    description: "Change typography",
    icon: () => <i className="bi bi-paragraph" />,
    onClick: undefined,
    values: [
      {
        type: "item",
        name: "Paragraph",
        isActive: (editor: Editor) => editor.isActive("paragraph"),
        disabled: (editor: Editor) => !editor.can().setParagraph(),
        description: "Apply paragraph style",
        icon: () => <i className="bi bi-paragraph" />,
        onClick: (editor: Editor) =>
          editor.chain().focus().setParagraph().run(),
      },
      {
        type: "item",
        name: "Heading 1",
        isActive: (editor: Editor) => editor.isActive("heading", { level: 1 }),
        disabled: (editor: Editor) => !editor.can().setHeading({ level: 1 }),
        description: "Apply heading 1 style",
        icon: () => <i className="bi bi-type-h1" />,
        onClick: (editor: Editor) =>
          editor.chain().focus().setHeading({ level: 1 }).run(),
      },
      {
        type: "item",
        name: "Heading 2",
        isActive: (editor: Editor) => editor.isActive("heading", { level: 2 }),
        disabled: (editor: Editor) => !editor.can().setHeading({ level: 2 }),
        description: "Apply heading 2 style",
        icon: () => <i className="bi bi-type-h2" />,
        onClick: (editor: Editor) =>
          editor.chain().focus().setHeading({ level: 2 }).run(),
      },
      {
        type: "item",
        name: "Heading 3",
        isActive: (editor: Editor) => editor.isActive("heading", { level: 3 }),
        disabled: (editor: Editor) => !editor.can().setHeading({ level: 3 }),
        description: "Apply heading 3 style",
        icon: () => <i className="bi bi-type-h3" />,
        onClick: (editor: Editor) =>
          editor.chain().focus().setHeading({ level: 3 }).run(),
      },
      {
        type: "item",
        name: "Heading 4",
        isActive: (editor: Editor) => editor.isActive("heading", { level: 4 }),
        disabled: (editor: Editor) => !editor.can().setHeading({ level: 4 }),
        description: "Apply heading 4 style",
        icon: () => <i className="bi bi-type-h4" />,
        onClick: (editor: Editor) =>
          editor.chain().focus().setHeading({ level: 4 }).run(),
      },
      {
        type: "item",
        name: "Heading 5",
        isActive: (editor: Editor) => editor.isActive("heading", { level: 5 }),
        disabled: (editor: Editor) => !editor.can().setHeading({ level: 5 }),
        description: "Apply heading 5 style",
        icon: () => <i className="bi bi-type-h5" />,
        onClick: (editor: Editor) =>
          editor.chain().focus().setHeading({ level: 5 }).run(),
      },
      {
        type: "item",
        name: "Heading 6",
        isActive: (editor: Editor) => editor.isActive("heading", { level: 6 }),
        disabled: (editor: Editor) => !editor.can().setHeading({ level: 6 }),
        description: "Apply heading 6 style",
        icon: () => <i className="bi bi-type-h6" />,
        onClick: (editor: Editor) =>
          editor.chain().focus().setHeading({ level: 6 }).run(),
      },
    ],
  },
  {
    type: "dropdown",
    name: "Fonts",
    isActive: undefined,
    disabled: undefined,
    description: "Change font family",
    icon: () => <i className="bi bi-fonts" />,
    onClick: (editor: Editor) => editor.chain().focus().run(),
    values: [
      {
        type: "item",
        name: "Noto Sans",
        isActive: (editor: Editor) =>
          editor.isActive("textStyle", Fonts.sans["Noto Sans"].style),
        disabled: undefined,
        description: "Change font family to Noto Sans",
        icon: () => undefined,
        onClick: (editor: Editor) => editor.chain().focus().run(),
      },
      {
        type: "item",
        name: "JetBrains Mono",
        isActive: (editor: Editor) =>
          editor.isActive("textStyle", Fonts.mono["JetBrains Mono"].style),
        disabled: undefined,
        description: "Change font family to JetBrains Mono",
        icon: () => undefined,
        onClick: (editor: Editor) => editor.chain().focus().run(),
      },
      {
        type: "item",
        name: "Fira Code",
        isActive: (editor: Editor) =>
          editor.isActive("textStyle", Fonts.mono["Fira Code"].style),
        disabled: undefined,
        description: "Change font family to Fira Code",
        icon: () => undefined,
        onClick: (editor: Editor) => editor.chain().focus().run(),
      },
    ],
  },
  {
    type: "dropdown",
    name: "Font size",
    isActive: undefined,
    disabled: undefined,
    description: "Change font size",
    icon: () => <i className="bi bi-fonts" />,
    onClick: (editor: Editor) => editor.chain().focus().run(),
    values: [],
  },
  {
    type: "item",
    name: "Bold",
    isActive: (editor: Editor) => editor.isActive("bold"),
    disabled: (editor: Editor) => !editor.can().toggleBold(),
    description: "Toggle bold",
    icon: () => <i className="bi bi-type-bold" />,
    onClick: (editor: Editor) => editor.chain().focus().toggleBold().run(),
  },
  {
    type: "item",
    name: "Italic",
    isActive: (editor: Editor) => editor.isActive("italic"),
    disabled: (editor: Editor) => !editor.can().toggleItalic(),
    description: "Toggle italic",
    icon: () => <i className="bi bi-type-italic" />,
    onClick: (editor: Editor) => editor.chain().focus().toggleItalic().run(),
  },
  {
    type: "item",
    name: "Underline",
    isActive: (editor: Editor) => editor.isActive("underline"),
    disabled: (editor: Editor) => !editor.can().toggleUnderline(),
    description: "Toggle underline",
    icon: () => <i className="bi bi-type-underline" />,
    onClick: (editor: Editor) => editor.chain().focus().toggleUnderline().run(),
  },
  {
    type: "item",
    name: "Strikethrough",
    isActive: (editor: Editor) => editor.isActive("strike"),
    disabled: (editor: Editor) => !editor.can().toggleStrike(),
    description: "Toggle strikethrough",
    icon: () => <i className="bi bi-type-strikethrough" />,
    onClick: (editor: Editor) => editor.chain().focus().toggleStrike().run(),
  },
  {
    type: "item",
    name: "Inline code",
    isActive: (editor: Editor) => editor.isActive("code"),
    disabled: (editor: Editor) => !editor.can().toggleCode(),
    description: "Toggle inline code",
    icon: () => <i className="bi bi-code" />,
    onClick: (editor: Editor) => editor.chain().focus().toggleCode().run(),
  },
  {
    type: "item",
    name: "Highlight",
    isActive: (editor: Editor) => editor.isActive("highlight"),
    disabled: (editor: Editor) => !editor.can().toggleHighlight(),
    description: "Toggle highlight",
    icon: () => <i className="bi bi-markdown" />,
    onClick: (editor: Editor) => editor.chain().focus().toggleHighlight().run(),
  },
  {
    type: "item",
    name: "Insert link",
    isActive: undefined,
    disabled: undefined,
    description: "Insert a link",
    icon: () => <i className="bi bi-link-45deg" />,
    onClick: (editor: Editor) =>
      editor
        .chain()
        .focus()
        .setLink({ href: "https://github.com/youzarsiph" })
        .run(),
  },
  {
    type: "item",
    name: "Insert image",
    isActive: undefined,
    disabled: undefined,
    description: "Insert a image",
    icon: () => <i className="bi bi-image" />,
    onClick: (editor: Editor) =>
      editor.chain().focus().setImage({ src: "../assets/img.png" }).run(),
  },
  {
    type: "dropdown",
    name: "Text align",
    isActive: undefined,
    disabled: undefined,
    description: "Change text alignment",
    icon: () => <i className="bi bi-text-left" />,
    onClick: (editor: Editor) => editor.chain().focus().run(),
    values: [
      {
        type: "item",
        name: "Text align left",
        isActive: (editor: Editor) => editor.isActive({ textAlign: "left" }),
        description: "Change text alignment to left",
        icon: () => <i className="bi bi-text-left text-xl" />,
        onClick: (editor: Editor) =>
          editor.chain().focus().setTextAlign("left").run(),
      },
      {
        type: "item",
        name: "Text align center",
        isActive: (editor: Editor) => editor.isActive({ textAlign: "center" }),
        description: "Change text alignment to center",
        icon: () => <i className="bi bi-text-center text-xl" />,
        onClick: (editor: Editor) =>
          editor.chain().focus().setTextAlign("center").run(),
      },
      {
        type: "item",
        name: "Text align right",
        isActive: (editor: Editor) => editor.isActive({ textAlign: "right" }),
        description: "Change text alignment to right",
        icon: () => <i className="bi bi-text-right text-xl" />,
        onClick: (editor: Editor) =>
          editor.chain().focus().setTextAlign("right").run(),
      },
      {
        type: "item",
        name: "Text align justify",
        isActive: (editor: Editor) => editor.isActive({ textAlign: "justify" }),
        description: "Change text alignment to justify",
        icon: () => <i className="bi bi-justify text-xl" />,
        onClick: (editor: Editor) =>
          editor.chain().focus().setTextAlign("justify").run(),
      },
    ],
  },
  {
    type: "item",
    name: "Task list",
    isActive: (editor: Editor) => editor.isActive("taskList"),
    disabled: (editor: Editor) => !editor.can().toggleTaskList(),
    description: "Add task list",
    icon: () => <i className="bi bi-list-check" />,
    onClick: (editor: Editor) => editor.chain().focus().toggleTaskList().run(),
  },
  {
    type: "item",
    name: "Bullet list",
    isActive: (editor: Editor) => editor.isActive("bulletList"),
    disabled: (editor: Editor) => !editor.can().toggleBulletList(),
    description: "Add bullet list",
    icon: () => <i className="bi bi-list-ul" />,
    onClick: (editor: Editor) =>
      editor.chain().focus().toggleBulletList().run(),
  },
  {
    type: "item",
    name: "Numbered list",
    isActive: (editor: Editor) => editor.isActive("orderedList"),
    disabled: (editor: Editor) => !editor.can().toggleOrderedList(),
    description: "Add numbered list",
    icon: () => <i className="bi bi-list-ol" />,
    onClick: (editor: Editor) =>
      editor.chain().focus().toggleOrderedList().run(),
  },
  {
    type: "item",
    name: "Increase indent",
    isActive: undefined,
    disabled: (editor: Editor) => !editor.can().sinkListItem("listItem"),
    description: "Add numbered list",
    icon: () => <i className="bi bi-indent" />,
    onClick: (editor: Editor) =>
      editor.chain().focus().sinkListItem("listItem").run(),
  },
  {
    type: "item",
    name: "Decrease indent",
    isActive: undefined,
    disabled: (editor: Editor) => !editor.can().liftListItem("listItem"),
    description: "Add numbered list",
    icon: () => <i className="bi bi-unindent" />,
    onClick: (editor: Editor) =>
      editor.chain().focus().liftListItem("listItem").run(),
  },
  // Reorder
  {
    type: "item",
    name: "Subscript",
    shortcut: "Ctrl + ,",
    isActive: (editor: Editor) => editor.isActive("subscript"),
    disabled: (editor: Editor) => !editor.can().toggleSubscript(),
    description: "Toggle subscript",
    icon: () => <i className="bi bi-subscript text-xl" />,
    onClick: (editor: Editor) => editor.chain().focus().toggleSubscript().run(),
  },
  {
    type: "item",
    name: "Superscript",
    shortcut: "Ctrl + .",
    isActive: (editor: Editor) => editor.isActive("superscript"),
    disabled: (editor: Editor) => !editor.can().toggleSuperscript(),
    description: "Toggle subscript",
    icon: () => <i className="bi bi-superscript text-xl" />,
    onClick: (editor: Editor) =>
      editor.chain().focus().toggleSuperscript().run(),
  },
  {
    type: "item",
    name: "Insert table",
    isActive: undefined,
    disabled: (editor: Editor) => !editor.can().insertTable(),
    description: "Insert a table",
    icon: () => <i className="bi bi-table" />,
    onClick: (editor: Editor) =>
      editor
        .chain()
        .focus()
        .insertTable({ rows: 1, cols: 3, withHeaderRow: true })
        .run(),
  },
  {
    type: "item",
    name: "Insert code block",
    isActive: (editor: Editor) => editor.isActive("codeBlock"),
    disabled: (editor: Editor) => !editor.can().toggleCodeBlock(),
    description: "Insert a code block",
    icon: () => <i className="bi bi-code-square" />,
    onClick: (editor: Editor) => editor.chain().focus().toggleCodeBlock().run(),
  },
  {
    type: "item",
    name: "Insert blockquote",
    isActive: (editor: Editor) => editor.isActive("blockquote"),
    disabled: (editor: Editor) => !editor.can().toggleBlockquote(),
    description: "Insert a blockquote",
    icon: () => <i className="bi bi-blockquote-left" />,
    onClick: (editor: Editor) =>
      editor.chain().focus().toggleBlockquote().run(),
  },
  {
    type: "item",
    name: "Insert horizontal rule",
    isActive: (editor: Editor) => editor.isActive("horizontalRule"),
    disabled: (editor: Editor) => !editor.can().setHorizontalRule(),
    description: "Insert a horizontal rule",
    icon: () => <i className="bi bi-hr" />,
    onClick: (editor: Editor) =>
      editor.chain().focus().setHorizontalRule().run(),
  },
  {
    type: "item",
    name: "Insert hard break",
    isActive: (editor: Editor) => editor.isActive("hardBreak"),
    disabled: (editor: Editor) => !editor.can().setHardBreak(),
    description: "Insert a hard break",
    icon: () => <i className="bi bi-file-earmark-break" />,
    onClick: (editor: Editor) => editor.chain().focus().setHardBreak().run(),
  },
  {
    type: "item",
    name: "Split list item",
    isActive: undefined,
    disabled: (editor: Editor) => !editor.can().splitListItem("listItem"),
    description: "Split list item",
    icon: () => <i className="bi bi-scissors" />,
    onClick: (editor: Editor) =>
      editor.chain().focus().splitListItem("listItem").run(),
  },
  // End reorder
  {
    type: "item",
    name: "Clear marks",
    isActive: undefined,
    disabled: (editor: Editor) => !editor.can().unsetAllMarks(),
    description: "Clear all marks",
    icon: () => <i className="bi bi-x-lg" />,
    onClick: (editor: Editor) => editor.chain().focus().unsetAllMarks().run(),
  },
  {
    type: "item",
    name: "Clear nodes",
    isActive: undefined,
    disabled: (editor: Editor) => !editor.can().clearNodes(),
    description: "Clear all nodes",
    icon: () => <i className="bi bi-x-square" />,
    onClick: (editor: Editor) => editor.chain().focus().clearNodes().run(),
  },
];

export default Actions;

// const btn = () => (
//   <>
//     <button
//       onClick={() =>
//         editor
//           .chain()
//           .focus()
//           .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
//           .run()
//       }
//     >
//       insertTable
//     </button>
//     <button
//       onClick={() =>
//         editor
//           .chain()
//           .focus()
//           .insertContent(tableHTML, {
//             parseOptions: {
//               preserveWhitespace: false,
//             },
//           })
//           .run()
//       }
//     >
//       insertHTMLTable
//     </button>
//     <button
//       onClick={() => editor.chain().focus().addColumnBefore().run()}
//       disabled={!editor.can().addColumnBefore()}
//     >
//       addColumnBefore
//     </button>
//     <button
//       onClick={() => editor.chain().focus().addColumnAfter().run()}
//       disabled={!editor.can().addColumnAfter()}
//     >
//       addColumnAfter
//     </button>
//     <button
//       onClick={() => editor.chain().focus().deleteColumn().run()}
//       disabled={!editor.can().deleteColumn()}
//     >
//       deleteColumn
//     </button>
//     <button
//       onClick={() => editor.chain().focus().addRowBefore().run()}
//       disabled={!editor.can().addRowBefore()}
//     >
//       addRowBefore
//     </button>
//     <button
//       onClick={() => editor.chain().focus().addRowAfter().run()}
//       disabled={!editor.can().addRowAfter()}
//     >
//       addRowAfter
//     </button>
//     <button
//       onClick={() => editor.chain().focus().deleteRow().run()}
//       disabled={!editor.can().deleteRow()}
//     >
//       deleteRow
//     </button>
//     <button
//       onClick={() => editor.chain().focus().deleteTable().run()}
//       disabled={!editor.can().deleteTable()}
//     >
//       deleteTable
//     </button>
//     <button
//       onClick={() => editor.chain().focus().mergeCells().run()}
//       disabled={!editor.can().mergeCells()}
//     >
//       mergeCells
//     </button>
//     <button
//       onClick={() => editor.chain().focus().splitCell().run()}
//       disabled={!editor.can().splitCell()}
//     >
//       splitCell
//     </button>
//     <button
//       onClick={() => editor.chain().focus().toggleHeaderColumn().run()}
//       disabled={!editor.can().toggleHeaderColumn()}
//     >
//       toggleHeaderColumn
//     </button>
//     <button
//       onClick={() => editor.chain().focus().toggleHeaderRow().run()}
//       disabled={!editor.can().toggleHeaderRow()}
//     >
//       toggleHeaderRow
//     </button>
//     <button
//       onClick={() => editor.chain().focus().toggleHeaderCell().run()}
//       disabled={!editor.can().toggleHeaderCell()}
//     >
//       toggleHeaderCell
//     </button>
//     <button
//       onClick={() => editor.chain().focus().mergeOrSplit().run()}
//       disabled={!editor.can().mergeOrSplit()}
//     >
//       mergeOrSplit
//     </button>
//     <button
//       onClick={() =>
//         editor
//           .chain()
//           .focus()
//           .setCellAttribute("backgroundColor", "#FAF594")
//           .run()
//       }
//       disabled={!editor.can().setCellAttribute("backgroundColor", "#FAF594")}
//     >
//       setCellAttribute
//     </button>
//     <button
//       onClick={() => editor.chain().focus().fixTables().run()}
//       disabled={!editor.can().fixTables()}
//     >
//       fixTables
//     </button>
//     <button
//       onClick={() => editor.chain().focus().goToNextCell().run()}
//       disabled={!editor.can().goToNextCell()}
//     >
//       goToNextCell
//     </button>
//     <button
//       onClick={() => editor.chain().focus().goToPreviousCell().run()}
//       disabled={!editor.can().goToPreviousCell()}
//     >
//       goToPreviousCell
//     </button>
//     <div>
//       <button
//         onClick={() => editor.chain().focus().setFontFamily("Inter").run()}
//         className={
//           editor.isActive("textStyle", { fontFamily: "Inter" })
//             ? "is-active"
//             : ""
//         }
//       >
//         Inter
//       </button>
//       <button
//         onClick={() =>
//           editor
//             .chain()
//             .focus()
//             .setFontFamily("Comic Sans MS, Comic Sans")
//             .run()
//         }
//         className={
//           editor.isActive("textStyle", {
//             fontFamily: "Comic Sans MS, Comic Sans",
//           })
//             ? "is-active"
//             : ""
//         }
//       >
//         Comic Sans
//       </button>
//       <button
//         onClick={() => editor.chain().focus().setFontFamily("serif").run()}
//         className={
//           editor.isActive("textStyle", { fontFamily: "serif" })
//             ? "is-active"
//             : ""
//         }
//       >
//         serif
//       </button>
//       <button
//         onClick={() => editor.chain().focus().setFontFamily("monospace").run()}
//         className={
//           editor.isActive("textStyle", { fontFamily: "monospace" })
//             ? "is-active"
//             : ""
//         }
//       >
//         monospace
//       </button>
//       <button
//         onClick={() => editor.chain().focus().setFontFamily("cursive").run()}
//         className={
//           editor.isActive("textStyle", { fontFamily: "cursive" })
//             ? "is-active"
//             : ""
//         }
//       >
//         cursive
//       </button>
//       <button onClick={() => editor.chain().focus().unsetFontFamily().run()}>
//         unsetFontFamily
//       </button>
//     </div>
//   </>
// );
