import clsx from "clsx";
import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Colors } from "@/app/utils";

const ColorPicker = (props: {
  label: string;
  onCLick: (color: string) => void;
}) => (
  <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button className="rounded px-2 py-1 text-sm font-medium ring-1 ring-transparent hover:bg-white/75 hover:ring-white dark:hover:bg-slate-800/75 dark:hover:ring-slate-900">
        {props.label}
      </Menu.Button>
    </div>

    <Transition
      enter="transition ease-out duration-300"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute left-0 mt-2 max-h-96 min-w-80 origin-top-left overflow-auto rounded-md bg-white px-2 py-4 shadow-xl ring-1 ring-white focus:outline-none dark:bg-slate-800 dark:ring-slate-900">
        <div className="grid gap-2">
          {Colors.map((colors) => (
            <Menu.Item key={colors[0]}>
              <div className="flex w-full items-center justify-between gap-4 rounded-md px-2 py-1">
                <span className="w-20 first-letter:uppercase">{colors[0]}</span>

                {Object.entries(colors[1]).map((color) => (
                  <button
                    key={color[0]}
                    title={color[0]}
                    style={{ backgroundColor: color[1] as string }}
                    onClick={() => props.onCLick(color[1] as string)}
                    className={clsx(
                      "flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-transparent",
                      "hover:bg-white/75 hover:text-white hover:ring-white dark:hover:bg-slate-800/75 dark:hover:ring-slate-900",
                    )}
                  ></button>
                ))}
              </div>
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
);

export default ColorPicker;
