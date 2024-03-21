import clsx from "clsx";
import React from "react";
import { Transition } from "@headlessui/react";
import { Menus } from "@/app/utils";
import { NavProps } from "@/app/types";
import { Button, ColorPicker, Dropdown, Logo, Toolbar } from "@/app/ui";

const Nav = (props: NavProps) => {
  const [display, setDisplay] = React.useState(true);

  return (
    <nav className="relative z-20 w-full">
      <div className="relative flex w-full flex-row items-center justify-evenly gap-4 bg-white/80 px-4 py-2 backdrop-blur-3xl lg:justify-between dark:bg-slate-800/75 dark:text-slate-200">
        <div className="grid w-full gap-2">
          <Transition
            appear={true}
            show={display}
            enter="transform transition duration-[400ms]"
            enterFrom="opacity-0 hidden scale-y-0"
            enterTo="opacity-100 block scale-y-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="block scale-y-100 "
            leaveTo="hidden scale-y-0"
          >
            <div className="flex items-center gap-4">
              <Logo />
              <div className="grid gap-1">
                <h1 className="font-medium">
                  <input
                    type="text"
                    value={props.title}
                    className="bg-transparent outline-none"
                    onChange={(event) =>
                      props.onTitleChange(event.target.value)
                    }
                  />
                </h1>

                <div className="flex items-center gap-4">
                  {Menus.map((menu) => (
                    <Dropdown
                      editor={props.editor}
                      key={menu.label}
                      label={menu.label}
                      items={menu.items}
                    />
                  ))}

                  <ColorPicker
                    label="Color"
                    onCLick={(color) =>
                      props.editor.chain().focus().setColor(color).run()
                    }
                  />
                  <ColorPicker
                    label="Highlight"
                    onCLick={(color) =>
                      props.editor
                        .chain()
                        .focus()
                        .setHighlight({ color: color })
                        .run()
                    }
                  />
                </div>
              </div>
            </div>
          </Transition>

          <div className="flex w-full items-center justify-between gap-4">
            <Toolbar editor={props.editor} />

            <Button onClick={() => setDisplay(!display)}>
              <i
                className={clsx("bi text-xl", {
                  "bi-chevron-up": display,
                  "bi-chevron-down": !display,
                })}
              />
            </Button>
          </div>
        </div>

        <div className="hidden lg:block">
          <Button
            onClick={() =>
              props.onSettingsChange({
                ...props.settings,
                theme: !props.settings.theme,
              })
            }
          >
            <i
              className={clsx("bi text-xl", {
                "bi-sun": props.settings.theme,
                "bi-moon": !props.settings.theme,
              })}
            />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
