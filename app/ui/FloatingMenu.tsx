import clsx from 'clsx'
import React from 'react'
import { Editor } from '@tiptap/react'
import { Menu, Transition } from '@headlessui/react'
import { DropdownItem } from '@/app/types'

const FloatingMenu = (props: { editor: Editor; items: DropdownItem[] }) => (
  <div className="relative flex h-full w-full items-center gap-4 rounded-lg p-1 shadow-xl ring-2 ring-white dark:ring-slate-900">
    <div className="absolute inset-0 -z-10 rounded backdrop-blur-3xl"></div>

    {props.items.map((action) =>
      action.type === 'item' ? (
        <button
          key={action.name}
          title={action.name}
          disabled={
            action.disabled !== undefined
              ? action.disabled(props.editor)
              : undefined
          }
          onClick={() =>
            action.onClick !== undefined
              ? action.onClick(props.editor)
              : undefined
          }
          className={clsx(
            'flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-transparent',
            'hover:bg-white/75 hover:text-white hover:ring-white dark:hover:bg-slate-800/75 dark:hover:ring-slate-900',
            {
              'ring-4 ring-slate-900 dark:ring-white':
                action.isActive !== undefined
                  ? action.isActive(props.editor)
                  : false,
              'ring-1 ring-transparent':
                action.isActive !== undefined
                  ? !action.isActive(props.editor)
                  : true,
            },
          )}
        >
          {action.icon()}
        </button>
      ) : (
        <div key={action.name}>
          <Menu as="div" className="relative">
            <div>
              <Menu.Button
                title={action.name}
                className={clsx(
                  'flex items-center gap-2 rounded-md p-1 ring-1 ring-transparent',
                  'hover:bg-white/75 hover:text-white hover:ring-white dark:hover:bg-slate-800/75 dark:hover:ring-slate-900',
                )}
              >
                {action.icon()}
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
                  {action.items?.map((item) => (
                    <div key={item.name}>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() =>
                              action.onClick !== undefined
                                ? action.onClick(props.editor)
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
      ),
    )}
  </div>
)

export default FloatingMenu
