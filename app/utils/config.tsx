/**
 * Editor configuration
 */

import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import CharacterCount from "@tiptap/extension-character-count";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import Color from "@tiptap/extension-color";
import Focus from "@tiptap/extension-focus";
import FontFamily from "@tiptap/extension-font-family";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Typography from "@tiptap/extension-typography";
import Underline from "@tiptap/extension-underline";
import Youtube from "@tiptap/extension-youtube";
import StarterKit from "@tiptap/starter-kit";
import { createLowlight, all } from "lowlight";
import { Fonts } from "@/app/styles";

const lowlight = createLowlight(all);

function createConfig(doc: Y.Doc, provider: WebrtcProvider) {
  return {
    injectCSS: true,
    editorProps: {
      attributes: {
        class:
          "prose prose-slate h-full min-h-full w-full min-w-full outline-none md:prose-lg lg:prose-xl xl:prose-2xl dark:prose-invert focus:outline-none",
      },
    },
    extensions: [
      CharacterCount,
      CodeBlockLowlight.configure({
        lowlight,
        HTMLAttributes: { class: Fonts.mono["Fira Code"].className },
      }),
      Collaboration.configure({ field: "title", document: doc }),
      CollaborationCursor.configure({
        provider,
        user: { name: "youzarsiph", color: "#f783ac" },
      }),
      Color,
      Focus.configure({
        mode: "shallowest",
        className:
          "border-1 border-dashed border-slate-800/75 dark:border-white/75 rounded",
      }),
      FontFamily,
      Highlight.configure({
        multicolor: true,
        HTMLAttributes: { class: "px-2 py-0.5 rounded-xl" },
      }),
      Image,
      Link,
      Placeholder,
      Subscript,
      Superscript,
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      TaskList.configure({
        HTMLAttributes: { class: "grid gap-2 list-none not-prose" },
      }),
      TaskItem.configure({
        HTMLAttributes: { class: "flex items-center gap-4" },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      TextStyle,
      Typography,
      Underline,
      Youtube,
      StarterKit.configure({
        history: false,
        codeBlock: {
          HTMLAttributes: { class: Fonts.mono["Fira Code"].className },
        },
      }),
    ],
  };
}

export default createConfig;
