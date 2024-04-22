/**
 * Document type
 */

import { JSONContent } from '@tiptap/react'

type Doc = {
  id: number
  title: string
  pages: JSONContent[]
}

export default Doc
