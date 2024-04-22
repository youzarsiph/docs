/**
 * Loading UI
 */

import clsx from 'clsx'
import React from 'react'
import { Background } from '@/app/ui'

const Loading = (props: { theme: boolean }) => (
  <div
    className={clsx(
      { dark: props.theme },
      'relative flex h-screen w-screen flex-col items-center justify-center gap-8 bg-white/50 dark:bg-slate-800/50',
    )}
  >
    <Background />

    <div className="relative flex h-16 w-16 items-center justify-center">
      <div className="h-full w-full animate-spin rounded-full border-4 border-slate-800/80 border-t-white/80"></div>
    </div>
    <h1 className="text-xl">Loading...</h1>
  </div>
)

export default Loading
