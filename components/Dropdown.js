import { Component, useState } from "react";

export class Dropdown extends Component {
  render() {
    const directions = { col: "flex-col", row: "flex-row" };
    return (
      <div className="relative">
        <button type="button" className="btn p-0" onClick={this.props.click}>
          <label
            htmlFor={this.props.id}
            className="inline-block cursor-pointer px-2 py-1"
          >
            {this.props.label}
          </label>
        </button>
        <input type="checkbox" id={this.props.id} className="peer sr-only" />
        <label
          htmlFor={this.props.id}
          className="hidden peer-checked:fixed peer-checked:inset-0 peer-checked:block"
          onClick={this.props.click}
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
  let [state, setState] = useState({ isOpened: false });

  const fontFamilies = ["Arial"];

  return (
    <Dropdown
      id={id}
      direction="col"
      label={
        <>
          <i className="bi bi-fonts mr-5"></i>
          {state.isOpened ? (
            <i className="bi bi-chevron-contract"></i>
          ) : (
            <i className="bi bi-chevron-expand"></i>
          )}
        </>
      }
      click={() => {
        setState({ isOpened: !state.isOpened });
      }}
    >
      <DropdownItem>
        <button
          type="button"
          onClick={() => {
            editor.chain().focus().unsetFontFamily().run();
          }}
          className={`dropdown-btn`}
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
              className={`dropdown-btn
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
  let [state, setState] = useState({ isOpened: false });

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
    {
      value: "rgb(163, 230, 53)",
      bg: "bg-lime-400",
    },
    {
      value: "rgb(82, 82, 82)",
      bg: "bg-neutral-400",
    },
    {
      value: "rgb(71, 85, 105)",
      bg: "bg-slate-600",
    },
    {
      value: "rgb(234, 88, 12)",
      bg: "bg-orange-600",
    },
    {
      value: "rgb(245, 158, 11)",
      bg: "bg-amber-500",
    },
    {
      value: "rgb(5, 150, 105)",
      bg: "bg-emerald-600",
    },
    {
      value: "rgb(192, 38, 211)",
      bg: "bg-fuchsia-600",
    },
  ];

  return (
    <Dropdown
      id={id}
      direction="row"
      className="flex-wrap"
      label={
        <>
          <i className="bi bi-palette2 mr-5"></i>
          {state.isOpened ? (
            <i className="bi bi-chevron-contract"></i>
          ) : (
            <i className="bi bi-chevron-expand"></i>
          )}
        </>
      }
      click={() => {
        setState({ isOpened: !state.isOpened });
      }}
    >
      <li>
        <label
          role="button"
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
  let [state, setState] = useState({ isOpened: false });

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
          <i className="bi bi-type-h1 mr-5"></i>
          {state.isOpened ? (
            <i className="bi bi-chevron-contract"></i>
          ) : (
            <i className="bi bi-chevron-expand"></i>
          )}
        </>
      }
      click={() => {
        setState({ isOpened: !state.isOpened });
      }}
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
              className={`dropdown-btn
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

export const AlignmentDropdown = ({ editor, id }) => {
  let [state, setState] = useState({ isOpened: false });

  const alignments = [
    {
      label: "Left",
      value: "left",
      icon: <i className="bi bi-text-left"></i>,
    },
    {
      label: "Center",
      value: "center",
      icon: <i className="bi bi-text-center"></i>,
    },
    {
      label: "Right",
      value: "right",
      icon: <i className="bi bi-text-right"></i>,
    },
    {
      label: "Justify",
      value: "justify",
      icon: <i className="bi bi-justify"></i>,
    },
  ];

  return (
    <Dropdown
      id={id}
      direction="col"
      label={
        <>
          <i className="bi bi-text-left mr-5"></i>
          {state.isOpened ? (
            <i className="bi bi-chevron-contract"></i>
          ) : (
            <i className="bi bi-chevron-expand"></i>
          )}
        </>
      }
      click={() => {
        setState({ isOpened: !state.isOpened });
      }}
    >
      {alignments.map((item) => {
        return (
          <DropdownItem key={Math.random()}>
            <button
              type="button"
              onClick={() => {
                editor.chain().focus().setTextAlign(item.value).run();
              }}
              className={`dropdown-btn
                    ${
                      editor.isActive({ textAlign: item.value })
                        ? "after:bg-lime-400"
                        : ""
                    }
                  `}
            >
              {item.icon} {item.label}
            </button>
          </DropdownItem>
        );
      })}
    </Dropdown>
  );
};
