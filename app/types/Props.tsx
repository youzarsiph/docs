/**
 * Props types
 */

import { Editor } from "@tiptap/react";
import { Settings } from "@/app/types";

type DropdownItem = {
  type: string;
  name: string;
  shortcut?: string;
  description: string;
  items?: DropdownItem[];
  icon: () => React.ReactNode;
  disabled?: (editor: Editor) => boolean | boolean;
  onClick: ((editor: Editor) => boolean) | (() => void);
};

type DropdownProps = {
  label: string;
  items: DropdownItem[];
};

type NavProps = {
  title: string;
  editor: Editor;
  settings: Settings;
  exportCallback: () => void;
  onTitleChange: (title: string) => void;
  onSettingsChange: (settings: Settings) => void;
};

export type { DropdownProps, DropdownItem, NavProps };
