import React from "react";

const Button = (
  props: React.JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLButtonElement> &
    React.ButtonHTMLAttributes<HTMLButtonElement>,
) => (
  <button
    {...props}
    className="flex appearance-none items-center justify-center gap-4 rounded-full bg-transparent px-2 py-1 font-extralight ring-1 ring-white hover:bg-white/75 focus:ring-8 focus:ring-offset-2 dark:ring-slate-900 dark:hover:bg-slate-800/75"
  >
    {props.children}
  </button>
);

export default Button;
