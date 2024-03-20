"use client";

import clsx from "clsx";
import * as Y from "yjs";
import React from "react";
import "highlight.js/styles/github-dark.css";
import { WebrtcProvider } from "y-webrtc";
import { useEditor } from "@tiptap/react";
import { createConfig } from "@/app/utils";
import { Doc, Settings } from "@/app/types";
import { Background, Nav, Page } from "@/app/ui";

const doc = new Y.Doc();
const provider = new WebrtcProvider("example-document", doc);

const Home = () => {
  const [settings, setSettings] = React.useState<Settings>({
    theme: true,
    format: "pdf",
    size: "Letter",
    padding: "64px",
    orientation: true,
  });

  const [document, setDocument] = React.useState<Doc>({
    id: 0,
    title: "My Doc",
    pages: [{}],
  });
  const [active, setActive] = React.useState(0);

  const editor = useEditor({
    ...createConfig(doc, provider),
    onUpdate: ({ editor }) =>
      setDocument({
        ...document,
        pages: document.pages.map((page, i) => {
          if (i === active) {
            page = editor.getJSON();
          }

          return page;
        }),
      }),
  });

  if (!editor) {
    return "Loading";
  }

  return (
    <div className={clsx({ dark: settings.theme }, "block h-screen w-screen")}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@latest/font/bootstrap-icons.min.css"
      />

      <Background />

      <div className="flex h-full w-full overflow-hidden">
        <main className="relative grid h-full w-full">
          <Nav
            editor={editor}
            settings={settings}
            title={document.title}
            exportCallback={() => {}}
            onSettingsChange={(s) => setSettings(s)}
            onTitleChange={(t) => setDocument({ ...document, title: t })}
          />

          <div className="relative flex h-full w-full items-center justify-center overflow-auto">
            <div className="absolute right-4 top-4 z-10 grid gap-4 rounded p-4 shadow-xl backdrop-blur-3xl">
              {document.pages.map((page, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="relative flex h-24 w-12 items-center justify-center rounded bg-gradient-to-t ring-1"
                >
                  <span className="absolute -right-2 -top-2 flex h-4 w-4">
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-white dark:bg-slate-900">
                      <span
                        className="flex h-4 w-4 items-center justify-center"
                        onClick={() =>
                          setDocument({
                            ...document,
                            pages: document.pages.filter(
                              (page, index) => index !== active,
                            ),
                          })
                        }
                      >
                        <i className="bi bi-x-lg" />
                      </span>
                    </span>
                  </span>
                  {i}
                </button>
              ))}

              <button
                onClick={() =>
                  setDocument({ ...document, pages: [...document.pages, {}] })
                }
                className="flex h-12 w-24 items-center justify-center gap-4 rounded ring-1 ring-white hover:bg-white/75 focus:ring-8 focus:ring-offset-2 active:scale-90 dark:ring-slate-900 dark:hover:bg-slate-800/75"
              >
                <i className="bi bi-plus-lg text-xl" />
                <span>Add</span>
              </button>
            </div>

            <div className="relative flex h-full w-full flex-col items-center gap-4 overflow-auto py-4">
              {document.pages.map((page) => (
                <Page
                  key={page.text}
                  editor={editor}
                  settings={settings}
                  content={page}
                  onContentChange={(content) =>
                    setDocument({
                      ...document,
                      pages: document.pages.map((p) => {
                        if (p === page) {
                          p = content;
                        }

                        return p;
                      }),
                    })
                  }
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
