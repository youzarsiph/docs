import React from 'react'

const Button = (
  props: React.JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLButtonElement> &
    React.ButtonHTMLAttributes<HTMLButtonElement>,
) => (
  <button
    {...props}
    className="flex items-center justify-center gap-4 rounded-lg border border-white bg-transparent px-4 py-2 font-semibold ring-1 ring-white hover:border-teal-600 hover:bg-teal-500/75 hover:text-white focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-400 focus:ring-offset-2 active:scale-95 dark:border-slate-900 dark:ring-slate-900 dark:hover:bg-teal-600/75"
  >
    {props.children}
  </button>
)

export default Button
