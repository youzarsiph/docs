import clsx from "clsx";
import React from "react";
import { Editor } from "@tiptap/react";
import { Menu, Transition } from "@headlessui/react";
import { DropdownProps } from "@/app/types";

const Dropdown = (props: DropdownProps & { editor: Editor }) => (
  <Menu as="div" className="relative text-left">
    <div>
      <Menu.Button className="rounded px-2 py-1 text-sm font-medium ring-1 ring-transparent hover:bg-white/75 hover:ring-white dark:hover:bg-slate-800/75 dark:hover:ring-slate-900">
        {props.label}
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
      <Menu.Items className="absolute left-0 z-10 mt-2 min-w-80 origin-top-left rounded-md bg-white shadow-xl ring-1 ring-white focus:outline-none dark:bg-slate-800 dark:ring-slate-900">
        {props.items.map((item) => (
          <div key={item.name} className="relative p-1">
            {item.type === "item" ? (
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => item.onClick(props.editor)}
                    className={clsx(
                      "group flex w-full items-center justify-between gap-4 rounded-md px-2 py-1 ring-1 ring-transparent",
                      {
                        "bg-slate-100 ring-slate-200 dark:bg-slate-900 dark:ring-slate-950":
                          active,
                      },
                    )}
                  >
                    <span className="flex items-center gap-4">
                      <item.icon />
                      {item.name}
                    </span>
                    <span className="ml-auto text-xs font-semibold">
                      {item.shortcut}
                    </span>
                  </button>
                )}
              </Menu.Item>
            ) : (
              <Menu as="div" className="relative text-left">
                <div>
                  <Menu.Button
                    className={clsx(
                      "group flex w-full items-center justify-between gap-4 rounded-md px-2 py-1 ring-1 ring-transparent",
                      "hover:bg-slate-100 hover:ring-slate-200 dark:hover:bg-slate-900 dark:hover:ring-slate-950",
                    )}
                  >
                    <span className="flex items-center gap-4">
                      <item.icon />
                      {item.name}
                    </span>

                    <i className="bi bi-chevron-right" />
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
                  <Menu.Items className="absolute left-full top-0 z-10 mt-2 min-w-80 rounded-md bg-white shadow-xl ring-1 ring-white focus:outline-none dark:bg-slate-800 dark:ring-slate-900">
                    {item.items?.map((item) => (
                      <div key={item.name} className="relative p-1">
                        <Menu.Item>
                          {() => (
                            <button
                              onClick={() => item.onClick(props.editor)}
                              className={clsx(
                                "group flex w-full items-center justify-between gap-4 rounded-md px-2 py-1 ring-1 ring-transparent",
                                "hover:bg-slate-100 hover:ring-slate-200 dark:hover:bg-slate-900 dark:hover:ring-slate-950",
                              )}
                            >
                              <span className="flex items-center gap-4">
                                <item.icon />
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
                  </Menu.Items>
                </Transition>
              </Menu>
            )}
          </div>
        ))}
      </Menu.Items>
    </Transition>
  </Menu>
);

export default Dropdown;
