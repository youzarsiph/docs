import { Fonts } from '@/app/styles'
import { Constants } from '@/app/utils'

type Font = keyof typeof Fonts

type Format = (typeof Constants.formats)[number]

type Padding = keyof typeof Constants.paddings

type Size = keyof typeof Constants.sizes

export type { Font, Format, Padding, Size }
