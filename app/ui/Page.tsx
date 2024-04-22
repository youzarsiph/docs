import clsx from 'clsx'
import React from 'react'
import {
  BubbleMenu,
  Editor,
  EditorContent,
  FloatingMenu,
  JSONContent,
} from '@tiptap/react'
import { Settings } from '@/app/types'
import { ActionMap, Constants } from '@/app/utils'
import { BubbleMenu as BMenu, FloatingMenu as FMenu } from '@/app/ui'

const Page = (props: {
  editor: Editor
  settings: Settings
  content: JSONContent
  onContentChange: (content: JSONContent) => void
}) => (
  <div className="p-1">
    <section
      style={{
        width: Constants.sizes[props.settings.size].width / 2,
        height: Constants.sizes[props.settings.size].height / 2,
      }}
      className={clsx(
        'relative grid h-full w-full flex-col gap-4 overflow-hidden rounded-lg rounded-tr-xl bg-white/60 ring-2 ring-white dark:bg-slate-800/60 dark:ring-slate-900',
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
            editor={props.editor}
            items={[
              ActionMap.text[0],
              ActionMap.text.filter((i) => i.type !== 'menu'),
            ].flat()}
          />
        </BubbleMenu>
      )}

      {/* Floating Menu */}
      {props.editor && (
        <FloatingMenu editor={props.editor} tippyOptions={{ duration: 100 }}>
          <FMenu
            editor={props.editor}
            items={[ActionMap.text[0], ActionMap.lists].flat()}
          />
        </FloatingMenu>
      )}

      <EditorContent editor={props.editor} />
    </section>
  </div>
)

export default Page
