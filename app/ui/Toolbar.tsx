import clsx from 'clsx'
import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Editor } from '@tiptap/react'
import { ActionMap } from '@/app//utils'
import { DropdownItem } from '@/app/types'

const Toolbar = (props: { editor: Editor }) => (
  <div className="flex flex-wrap items-center divide-x-2 divide-slate-900 rounded-xl bg-slate-200/50 ring-2 ring-white dark:bg-slate-800/50 dark:ring-slate-900">
    {Object.entries(ActionMap).map((actionList) => (
      <div key={actionList[0]} className="flex items-center gap-1 px-2 py-1">
        {actionList[1].map((action) => {
          const newAction = action as DropdownItem

          return newAction.type === 'item' ? (
            <button
              key={newAction.name}
              title={newAction.name}
              disabled={
                newAction.disabled !== undefined
                  ? newAction.disabled(props.editor)
                  : undefined
              }
              onClick={() =>
                newAction.onClick !== undefined
                  ? newAction.onClick(props.editor)
                  : undefined
              }
              className={clsx(
                'flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-transparent',
                'hover:bg-white/75 hover:text-white hover:ring-white dark:hover:bg-slate-800/75 dark:hover:ring-slate-900',
                {
                  'ring-4 ring-slate-900 dark:ring-white':
                    newAction.isActive !== undefined
                      ? newAction.isActive(props.editor)
                      : false,
                  'ring-1 ring-transparent':
                    newAction.isActive !== undefined
                      ? !newAction.isActive(props.editor)
                      : true,
                },
              )}
            >
              {newAction.icon()}
            </button>
          ) : (
            <div key={newAction.name}>
              <Menu as="div" className="relative">
                <div>
                  <Menu.Button
                    title={newAction.name}
                    className={clsx(
                      'flex items-center gap-2 rounded-md p-1 ring-1 ring-transparent',
                      'hover:bg-white/75 hover:text-white hover:ring-white dark:hover:bg-slate-800/75 dark:hover:ring-slate-900',
                    )}
                  >
                    {newAction.icon()}
                    <i className="bi bi-chevron-down" />
                  </Menu.Button>
                </div>

                <Transition
                  as={React.Fragment}
                  enter="transition ease-out duration-300"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute left-0 mt-2 min-w-80 origin-top-left rounded-md bg-white p-2 shadow-xl ring-1 ring-white focus:outline-none dark:bg-slate-800 dark:ring-slate-900">
                    <div className="grid gap-2">
                      {newAction.items?.map((item) => (
                        <div key={item.name}>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() =>
                                  newAction.onClick !== undefined
                                    ? newAction.onClick(props.editor)
                                    : undefined
                                }
                                className={clsx(
                                  'group flex w-full items-center justify-between gap-4 rounded-md px-2 py-1 ring-1 ring-transparent',
                                  {
                                    'bg-slate-100 ring-slate-200 dark:bg-slate-900 dark:ring-slate-950':
                                      active,
                                  },
                                )}
                              >
                                <span className="flex items-center gap-4">
                                  {item.icon()}
                                  {item.name}
                                </span>

                                <span className="ml-auto text-xs font-semibold">
                                  {item.shortcut}
                                </span>
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          )
        })}
      </div>
    ))}
  </div>
)

export default Toolbar
