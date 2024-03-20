import clsx from "clsx";
import React from "react";
import {
  BubbleMenu,
  Editor,
  EditorContent,
  FloatingMenu,
  JSONContent,
} from "@tiptap/react";
import { Settings } from "@/app/types";
import { Constants } from "@/app/utils";
import { BubbleMenu as BMenu, FloatingMenu as FMenu } from "@/app/ui";

const Page = (props: {
  editor: Editor;
  settings: Settings;
  content: JSONContent;
  onContentChange: (content: JSONContent) => void;
}) => (
  <div className="p-1">
    <section
      style={{
        width: Constants.sizes[props.settings.size].width / 2,
        height: Constants.sizes[props.settings.size].height / 2,
      }}
      className={clsx(
        "relative grid h-full w-full flex-col gap-4 overflow-hidden rounded-lg rounded-tr-xl bg-white/90 ring-2 ring-white dark:bg-slate-800/90 dark:ring-slate-900",
        Constants.paddings[props.settings.padding],
      )}
    >
      <div className="absolute bottom-0 left-0 flex items-center gap-4 px-4 py-2">
        <small>{props.editor.storage.characterCount.characters()}</small>
        <small>{props.editor.storage.characterCount.words()}</small>
      </div>

      <div className="absolute inset-0 -z-10 backdrop-blur-3xl"></div>

      {/* Bubble Menu */}
      {props.editor && (
        <BubbleMenu editor={props.editor} tippyOptions={{ duration: 100 }}>
          <BMenu
            actions={[
              {
                name: "Bold",
                isActive: props.editor.isActive("bold"),
                description: "Toggle Bold",
                icon: () => <i className="bi bi-type-bold text-xl" />,
                onClick: () => props.editor.chain().focus().toggleBold().run(),
              },
              {
                name: "Italic",
                isActive: props.editor.isActive("italic"),
                description: "Toggle Italic",
                icon: () => <i className="bi bi-type-italic text-xl" />,
                onClick: () =>
                  props.editor.chain().focus().toggleItalic().run(),
              },
              {
                name: "Strike",
                isActive: props.editor.isActive("strike"),
                description: "Toggle Strike",
                icon: () => <i className="bi bi-type-strikethrough text-xl" />,
                onClick: () =>
                  props.editor.chain().focus().toggleStrike().run(),
              },
            ]}
          />
        </BubbleMenu>
      )}

      {/* Floating Menu */}
      {props.editor && (
        <FloatingMenu editor={props.editor} tippyOptions={{ duration: 100 }}>
          <FMenu
            actions={[
              {
                name: "H1",
                description: "Toggle Heading 1",
                icon: () => <i className="bi bi-type-h1" />,
                isActive: props.editor.isActive("heading", { level: 1 }),
                onClick: () =>
                  props.editor
                    .chain()
                    .focus()
                    .toggleHeading({ level: 1 })
                    .run(),
              },
              {
                name: "H2",
                description: "Toggle Heading 2",
                icon: () => <i className="bi bi-type-h2" />,
                isActive: props.editor.isActive("heading", { level: 2 }),
                onClick: () =>
                  props.editor
                    .chain()
                    .focus()
                    .toggleHeading({ level: 2 })
                    .run(),
              },
              {
                name: "Bullet list",
                description: "Toggle bullet list",
                icon: () => <i className="bi bi-list-ul" />,
                isActive: props.editor.isActive("bulletList"),
                onClick: () =>
                  props.editor.chain().focus().toggleBulletList().run(),
              },
              {
                name: "Number list",
                description: "Toggle number list",
                icon: () => <i className="bi bi-list-ol" />,
                isActive: props.editor.isActive("orderedList"),
                onClick: () =>
                  props.editor.chain().focus().toggleOrderedList().run(),
              },
              {
                name: "Check list",
                description: "Toggle check list",
                icon: () => <i className="bi bi-list-check" />,
                isActive: props.editor.isActive("checkList"),
                onClick: () =>
                  props.editor.chain().focus().toggleTaskList().run(),
              },
            ]}
          />
        </FloatingMenu>
      )}

      <EditorContent editor={props.editor} />
    </section>
  </div>
);

export default Page;
