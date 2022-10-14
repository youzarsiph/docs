import { Component } from "react";

export class Dropdown extends Component {
  render() {
    const directions = { col: "flex-col", row: "flex-row" };
    return (
      <div className="relative">
        <button
          type="button"
          className="rounded-lg border border-slate-200 hover:bg-slate-50"
        >
          <label htmlFor={this.props.id} className="inline-block px-2 py-1">
            {this.props.label}
          </label>
        </button>
        <input type="checkbox" id={this.props.id} className="peer sr-only" />
        <label
          htmlFor={this.props.id}
          className="hidden peer-checked:fixed peer-checked:inset-0 peer-checked:block"
        ></label>
        <ul
          className={`dropdown ${this.props.className} ${
            directions[this.props.direction]
          }`}
        >
          {this.props.children}
        </ul>
      </div>
    );
  }
}

export class DropdownItem extends Component {
  render() {
    return <li className="dropdown-item">{this.props.children}</li>;
  }
}

export const FontDropdown = ({ editor, id }) => {
  const fontFamilies = ["Arial"];

  return (
    <Dropdown
      id={id}
      direction="col"
      label={
        <>
          <i className="bi bi-fonts mr-4"></i>
          <i className="bi bi-chevron-expand"></i>
        </>
      }
    >
      <DropdownItem>
        <button
          type="button"
          onClick={() => {
            editor.chain().focus().unsetFontFamily().run();
          }}
          className={`flex w-full items-center justify-between gap-4 after:inline-block after:h-4 after:w-4 after:rounded-full`}
        >
          Clear fonts
        </button>
      </DropdownItem>
      {fontFamilies.map((item) => {
        return (
          <DropdownItem key={Math.random()}>
            <button
              type="button"
              onClick={() => {
                editor.chain().focus().setFontFamily(item).run();
              }}
              className={`flex w-full items-center justify-between gap-4 after:inline-block after:h-4 after:w-4 after:rounded-full
                    ${
                      editor.isActive("textStyle", { fontFamily: item })
                        ? "after:bg-lime-400"
                        : ""
                    }
                  `}
            >
              {item}
            </button>
          </DropdownItem>
        );
      })}
    </Dropdown>
  );
};

export const ColorDropdown = ({ editor, id }) => {
  const colors = [
    {
      value: "rgb(96, 165, 250)",
      bg: "bg-blue-400",
    },
    {
      value: "rgb(56, 189, 248)",
      bg: "bg-sky-400",
    },
    {
      value: "rgb(248, 113, 113)",
      bg: "bg-red-400",
    },
    {
      value: "rgb(74, 222, 128)",
      bg: "bg-green-400",
    },
    {
      value: "rgb(250, 204, 21)",
      bg: "bg-yellow-400",
    },
    {
      value: "rgb(79, 70, 229)",
      bg: "bg-indigo-600",
    },
    {
      value: "rgb(34, 211, 238)",
      bg: "bg-cyan-400",
    },
    {
      value: "rgb(20, 184, 166)",
      bg: "bg-teal-400",
    },
  ];

  return (
    <Dropdown
      id={id}
      direction="row"
      className="flex-wrap"
      label={
        <>
          <i className="bi bi-palette2 mr-4"></i>
          <i className="bi bi-chevron-expand"></i>
        </>
      }
    >
      <li>
        <label
          type="button"
          className="relative inline-block aspect-square h-8 w-8 overflow-hidden rounded-full"
        >
          <input
            type="color"
            className="absolute -left-2 -top-2 inline-block aspect-square h-12 w-12 rounded-full"
            onInput={(event) => {
              editor.chain().focus().setColor(event.target.value).run();
            }}
            value={editor.getAttributes("textStyle").color}
          />
        </label>
      </li>
      {colors.map((color) => {
        return (
          <li key={Math.random()}>
            <button
              onClick={() => {
                editor.chain().focus().setColor(color.value).run();
              }}
              className={`flex items-center justify-center rounded-full
                  ${
                    editor.isActive("textStyle", { color: color.value })
                      ? "ring ring-lime-400 ring-offset-2"
                      : ""
                  }`}
            >
              <span
                className={`inline-block aspect-square h-8 w-8 rounded-full ${color.bg}`}
              ></span>
            </button>
          </li>
        );
      })}
    </Dropdown>
  );
};

export const HeadingDropdown = ({ editor, id }) => {
  const headings = [
    {
      level: 1,
      icon: <i className="bi bi-type-h1"></i>,
    },
    {
      level: 2,
      icon: <i className="bi bi-type-h2"></i>,
    },
    {
      level: 3,
      icon: <i className="bi bi-type-h3"></i>,
    },
    {
      level: 4,
      icon: <span>H4</span>,
    },
    {
      level: 5,
      icon: <span>H5</span>,
    },
    {
      level: 6,
      icon: <span>H6</span>,
    },
  ];

  return (
    <Dropdown
      id={id}
      direction="col"
      label={
        <>
          <i className="bi bi-type-h1 mr-4"></i>
          <i className="bi bi-chevron-expand"></i>
        </>
      }
    >
      {headings.map((heading) => {
        return (
          <DropdownItem key={Math.random()}>
            <button
              type="button"
              onClick={() => {
                editor
                  .chain()
                  .focus()
                  .toggleHeading({ level: heading.level })
                  .run();
              }}
              className={`flex w-full items-center justify-between gap-4 after:inline-block after:h-4 after:w-4 after:rounded-full
                    ${
                      editor.isActive("heading", { level: heading.level })
                        ? "after:bg-lime-400"
                        : ""
                    }
                  `}
            >
              {heading.icon}
            </button>
          </DropdownItem>
        );
      })}
    </Dropdown>
  );
};
