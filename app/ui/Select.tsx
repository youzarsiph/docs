import clsx from "clsx";
import React from "react";
import { Listbox, Transition } from "@headlessui/react";

const Select = (props: {
  label: string;
  data: string[];
  value: string;
  onChange: (value: string) => void;
}) => (
  <div className="grid gap-2">
    <span>{props.label}</span>
    <Listbox value={props.value} onChange={props.onChange}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full cursor-default rounded-xl bg-transparent py-2 pl-4 pr-10 text-left ring-1 ring-white focus:ring-4 focus:ring-offset-2 sm:text-sm">
          <span className="block truncate">{props.value}</span>

          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <i className="bi bi-chevron-expand text-xl" />
          </span>
        </Listbox.Button>

        <Transition
          as={React.Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-xl bg-white/75 text-base shadow-lg ring-2 ring-white focus:outline-none sm:text-sm dark:bg-slate-800/75">
            <div className="relative h-full w-full py-2">
              <div className="absolute inset-0 -z-10 rounded-xl backdrop-blur-3xl backdrop-filter"></div>

              {props.data.map((item, index) => (
                <Listbox.Option
                  key={index}
                  value={item}
                  className={({ active }) =>
                    clsx(
                      "relative cursor-default select-none py-2 pl-10 pr-4",
                      { "bg-slate-800/75 dark:bg-white/75": active },
                    )
                  }
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={clsx("block truncate", {
                          "font-medium": selected,
                          "font-normal": !selected,
                        })}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <i className="bi bi-check-lg text-xl" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </div>
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  </div>
);

export default Select;
