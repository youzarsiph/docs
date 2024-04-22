import React from 'react'

const Background = () => (
  <>
    <div className="fixed inset-0 -z-20 dark:bg-slate-950">
      <div className="relative h-full w-full animate-pulse">
        <div className="absolute -top-20 left-44 h-[40rem] w-48 rotate-45 rounded-full bg-gradient-to-t from-purple-500 to-indigo-500 blur-3xl filter"></div>
        <div className="absolute -bottom-20 left-44 h-[40rem] w-48 rotate-45 rounded-full bg-gradient-to-t from-teal-400 to-cyan-400 blur-3xl filter"></div>
        <div className="absolute -bottom-96 left-44 h-[40rem] w-48 rotate-45 rounded-full bg-gradient-to-t from-orange-400 to-pink-600 blur-3xl filter"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-screen w-80 rounded-full bg-gradient-to-t from-green-400 to-cyan-500 blur-3xl filter"></div>
        </div>

        <div className="absolute -top-96 right-44 h-[40rem] w-48 -rotate-45 rounded-full bg-gradient-to-t from-sky-400 to-blue-600 blur-3xl filter"></div>
        <div className="absolute -top-20 right-44 h-[40rem] w-48 -rotate-45 rounded-full bg-gradient-to-t from-fuchsia-500 to-purple-600 blur-3xl filter"></div>
        <div className="absolute -bottom-20 right-44 h-[40rem] w-48 -rotate-45 rounded-full bg-gradient-to-t from-amber-300 to-orange-500 blur-3xl filter"></div>
      </div>
    </div>
  </>
)

export default Background
