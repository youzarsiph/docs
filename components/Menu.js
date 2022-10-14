import { Component } from "react";
import { FontDropdown, ColorDropdown, HeadingDropdown } from "./Dropdown";

export class Menu extends Component {
  render() {
    return (
      <section className="menu-container">
        <ul className="menu">{this.props.children}</ul>
      </section>
    );
  }
}

export class MenuItem extends Component {
  render() {
    return (
      <li className="menu-item group">
        {this.props.children}
        <span className="tooltip">{this.props.tooltip}</span>
      </li>
    );
  }
}

export const TextStylesMenu = ({ editor, fontDropdownID, colorDropdownID }) => {
  const font = [
    {
      label: "Bold",
      click: () => editor.chain().focus().toggleBold().run(),
      disabled: !editor.can().chain().focus().toggleBold().run(),
      className: editor.isActive("bold") ? "bg-slate-50" : "",
      icon: <i className="bi bi-type-bold"></i>,
    },
    {
      label: "Italic",
      click: () => editor.chain().focus().toggleItalic().run(),
      disabled: !editor.can().chain().focus().toggleItalic().run(),
      className: editor.isActive("italic") ? "bg-slate-50" : "",
      icon: <i className="bi bi-type-italic"></i>,
    },
    {
      label: "Underline",
      click: () => editor.chain().focus().toggleUnderline().run(),
      disabled: !editor.can().chain().focus().toggleUnderline().run(),
      className: editor.isActive("underline") ? "bg-slate-50" : "",
      icon: <i className="bi bi-type-underline"></i>,
    },
    {
      label: "Strikethrough",
      click: () => editor.chain().focus().toggleStrike().run(),
      disabled: !editor.can().chain().focus().toggleStrike().run(),
      className: editor.isActive("strike") ? "bg-slate-50" : "",
      icon: <i className="bi bi-type-strikethrough"></i>,
    },
    {
      label: "Superscript",
      click: () => editor.chain().focus().toggleSuperscript().run(),
      disabled: !editor.can().chain().focus().toggleSuperscript().run(),
      className: editor.isActive("superscript") ? "bg-slate-50" : "",
      icon: (
        <span>
          X<sup>2</sup>
        </span>
      ),
    },
    {
      label: "Subscript",
      click: () => editor.chain().focus().toggleSubscript().run(),
      disabled: !editor.can().chain().focus().toggleSubscript().run(),
      className: editor.isActive("subscript") ? "bg-slate-50" : "",
      icon: (
        <span>
          X<sub>2</sub>
        </span>
      ),
    },
    {
      label: "Highlight",
      click: () => editor.chain().focus().toggleHighlight().run(),
      disabled: false,
      className: editor.isActive("highlight") ? "bg-slate-50" : "",
      icon: <i className="bi bi-brush"></i>,
    },
    {
      label: "Inline Code",
      click: () => editor.chain().focus().toggleCode().run(),
      disabled: !editor.can().chain().focus().toggleCode().run(),
      className: editor.isActive("code") ? "bg-slate-50" : "",
      icon: <i className="bi bi-code-slash"></i>,
    },
  ];

  return (
    <>
      <MenuItem tooltip="Font Families">
        <FontDropdown editor={editor} id={fontDropdownID} />
      </MenuItem>

      {font.map((item) => {
        return (
          <MenuItem key={Math.random()} tooltip={item.label}>
            <button
              type="button"
              onClick={item.click}
              disabled={item.disabled}
              className={`rounded-lg border border-slate-200 px-2 py-1 hover:border-slate-50 hover:bg-slate-50 focus:border-slate-100 focus:text-slate-400 focus:outline-none ${item.className}`}
            >
              {item.icon}
            </button>
          </MenuItem>
        );
      })}
      <MenuItem tooltip="Colors">
        <ColorDropdown editor={editor} id={colorDropdownID} />
      </MenuItem>
      <MenuItem tooltip="Clear Color">
        <button
          onClick={() => editor.chain().focus().unsetColor().run()}
          className="rounded-lg border border-slate-200 px-2 py-1 hover:border-slate-50 hover:bg-slate-50 focus:border-slate-100 focus:text-slate-400 focus:outline-none"
        >
          <i className="bi bi-palette"></i>
        </button>
      </MenuItem>
    </>
  );
};

export const ParagraphMenu = ({ editor, headingDropdownID }) => {
  const paragraph = [
    {
      label: "Paragraph",
      click: () => editor.chain().focus().setParagraph().run(),
      disabled: false,
      className: editor.isActive("paragraph") ? "bg-slate-50" : "",
      icon: <i className="bi bi-paragraph"></i>,
    },
    {
      label: "Unordered List",
      click: () => editor.chain().focus().toggleBulletList().run(),
      disabled: false,
      className: editor.isActive("bulletList") ? "bg-slate-50" : "",
      icon: <i className="bi bi-list-ul"></i>,
    },
    {
      label: "Ordered List",
      click: () => editor.chain().focus().toggleOrderedList().run(),
      disabled: false,
      className: editor.isActive("orderedList") ? "bg-slate-50" : "",
      icon: <i className="bi bi-list-ol"></i>,
    },
    {
      label: "Block Quote",
      click: () => editor.chain().focus().toggleBlockquote().run(),
      disabled: false,
      className: editor.isActive("blockquote") ? "bg-slate-50" : "",
      icon: <i className="bi bi-blockquote-left"></i>,
    },
    {
      label: "Code Block",
      click: () => editor.chain().focus().toggleCodeBlock().run(),
      disabled: false,
      className: editor.isActive("codeBlock") ? "bg-slate-50" : "",
      icon: <i className="bi bi-code-square"></i>,
    },
    {
      label: "Horizontal Rule",
      click: () => editor.chain().focus().setHorizontalRule().run(),
      disabled: false,
      className: "",
      icon: <i className="bi bi-hr"></i>,
    },
    {
      label: "Hard Break",
      click: () => editor.chain().focus().setHardBreak().run(),
      disabled: false,
      className: "",
      icon: <i className="bi bi-arrow-return-left"></i>,
    },
    {
      label: "Align Left",
      click: () => editor.chain().focus().setTextAlign("left").run(),
      disabled: false,
      className: editor.isActive({ textAlign: "left" }) ? "bg-slate-50" : "",
      icon: <i className="bi bi-text-left"></i>,
    },
    {
      label: "Align Center",
      click: () => editor.chain().focus().setTextAlign("center").run(),
      disabled: false,
      className: editor.isActive({ textAlign: "center" }) ? "bg-slate-50" : "",
      icon: <i className="bi bi-text-center"></i>,
    },
    {
      label: "Align Right",
      click: () => editor.chain().focus().setTextAlign("right").run(),
      disabled: false,
      className: editor.isActive({ textAlign: "right" }) ? "bg-slate-50" : "",
      icon: <i className="bi bi-text-right"></i>,
    },
    {
      label: "Justify",
      click: () => editor.chain().focus().setTextAlign("justify").run(),
      disabled: false,
      className: editor.isActive({ textAlign: "justify" }) ? "bg-slate-50" : "",
      icon: <i className="bi bi-justify"></i>,
    },
  ];

  return (
    <>
      <MenuItem tooltip="Headings">
        <HeadingDropdown editor={editor} id={headingDropdownID} />
      </MenuItem>
      {paragraph.map((item) => {
        return (
          <MenuItem key={Math.random()} tooltip={item.label}>
            <button
              type="button"
              onClick={item.click}
              disabled={item.disabled}
              className={`rounded-lg border border-slate-200 px-2 py-1 hover:border-slate-50 hover:bg-slate-50 focus:border-slate-100 focus:text-slate-400 focus:outline-none ${item.className}`}
            >
              {item.icon}
            </button>
          </MenuItem>
        );
      })}
    </>
  );
};

const ActionMenu = ({ editor }) => {
  const actions = [
    {
      label: "Undo",
      click: () => editor.chain().focus().undo().run(),
      disabled: !editor.can().chain().focus().undo().run(),
      className: "",
      icon: <i className="bi bi-arrow-counterclockwise"></i>,
    },
    {
      label: "Redo",
      click: () => editor.chain().focus().redo().run(),
      disabled: !editor.can().chain().focus().redo().run(),
      className: "",
      icon: <i className="bi bi-arrow-clockwise"></i>,
    },
  ];

  return (
    <>
      {actions.map((item) => {
        return (
          <MenuItem key={Math.random()} tooltip={item.label}>
            <button
              onClick={item.click}
              disabled={item.disabled}
              className={`btn ${item.className}`}
            >
              {item.icon}
            </button>
          </MenuItem>
        );
      })}
    </>
  );
};

export const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <Menu>
      <TextStylesMenu
        editor={editor}
        fontDropdownID="fonts"
        colorDropdownID="colors"
      />

      <li className="seperator"></li>

      <ParagraphMenu editor={editor} headingDropdownID="headings" />

      <li className="seperator"></li>

      <ActionMenu editor={editor} />
    </Menu>
  );
};

export const BottomBar = ({ editor }) => {
  return (
    <Menu>
      <MenuItem tooltip="# of characters">
        <span className="mr-8 text-sm">
          {/* {editor.storage.characterCount.characters()} Characters */}
        </span>
      </MenuItem>
      <MenuItem tooltip="# of words">
        <span className="text-sm ">
          {/* {editor.storage.characterCount.words()} Words */}
        </span>
      </MenuItem>
    </Menu>
  );
};
