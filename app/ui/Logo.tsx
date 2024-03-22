import React from "react";

const Logo = () => (
  <div className="relative h-12 w-10 rounded rounded-tr-xl border-4 border-transparent bg-gradient-to-tr from-sky-400 to-fuchsia-500 bg-clip-border p-px ring-1 ring-white dark:from-sky-500 dark:to-fuchsia-600 dark:ring-slate-900">
    <div className="absolute inset-0 -z-10 backdrop-blur-3xl backdrop-filter"></div>

    <div className="flex h-full w-full flex-col items-start justify-center gap-1 rounded-sm rounded-tr bg-white/50 p-1 dark:bg-slate-800/50">
      <div className="h-0.5 w-full rounded-full bg-slate-900 dark:bg-white"></div>
      <div className="h-0.5 w-full rounded-full bg-slate-900 dark:bg-white"></div>
      <div className="h-0.5 w-1/2 rounded-full bg-slate-900 dark:bg-white"></div>
    </div>
  </div>
);

export default Logo;
