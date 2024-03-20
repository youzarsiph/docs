import clsx from "clsx";
import React from "react";

const FloatingMenu = (props: {
  actions: {
    name: string;
    isActive: boolean;
    description: string;
    onClick: () => void;
    icon: () => React.ReactNode;
  }[];
}) => (
  <div className="relative flex h-full w-full items-center gap-4 rounded-lg p-1 shadow-xl ring-2 ring-white dark:ring-slate-900">
    <div className="absolute inset-0 -z-10 rounded-xl backdrop-blur-3xl"></div>

    {props.actions.map((action) => (
      <button
        key={action.name}
        title={action.description}
        onClick={() => action.onClick()}
        className={clsx(
          "flex h-8 w-8 items-center justify-center rounded-md ring-1 ring-transparent hover:ring-slate-900",
          { "ring-2": action.isActive },
        )}
      >
        <action.icon />
      </button>
    ))}
  </div>
);

export default FloatingMenu;
