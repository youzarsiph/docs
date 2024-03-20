import clsx from "clsx";
import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Editor } from "@tiptap/react";
import { Actions } from "@/app//utils";

const Toolbar = (props: { editor: Editor }) => (
  <div className="flex flex-wrap items-center gap-2 rounded-xl px-2 py-1 ring-2 ring-white dark:ring-slate-900">
    {Actions.map((action) =>
      action.type === "item" ? (
        <button
          key={action.name}
          title={action.name}
          disabled={
            action.disabled !== undefined
              ? action.disabled(props.editor)
              : undefined
          }
          onClick={
            action.onClick !== undefined
              ? () => action.onClick(props.editor)
              : undefined
          }
          className={clsx(
            "flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-transparent",
            "hover:bg-white/75 hover:text-white hover:ring-white dark:hover:bg-slate-800/75 dark:hover:ring-slate-900",
            {
              "bg-slate-800 text-slate-200 dark:bg-white dark:text-slate-900":
                action.isActive !== undefined
                  ? action.isActive(props.editor)
                  : false,
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
                  "flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-transparent",
                  "hover:bg-white/75 hover:text-white hover:ring-white dark:hover:bg-slate-800/75 dark:hover:ring-slate-900",
                )}
              >
                {action.icon()}
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
              <Menu.Items className="absolute left-0 mt-2 min-w-52 origin-top-left rounded-md bg-white p-2 shadow-xl ring-1 ring-white focus:outline-none dark:bg-slate-800 dark:ring-slate-900">
                <div className="grid gap-2">
                  {action.values?.map((item) => (
                    <div key={item.name}>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => item.onClick(props.editor)}
                            className={clsx(
                              "group flex w-full items-center justify-between gap-4 rounded-md px-2 py-1 text-sm ring-1 ring-transparent",
                              {
                                "bg-slate-100 ring-slate-200 dark:bg-slate-900 dark:ring-slate-950":
                                  active,
                              },
                            )}
                          >
                            <span className="flex items-center gap-4">
                              {item.icon()}
                              {item.name}
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
);

export default Toolbar;
