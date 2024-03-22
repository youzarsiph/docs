"use client";

import clsx from "clsx";
import * as Y from "yjs";
import React from "react";
import "highlight.js/styles/github-dark.css";
import { WebrtcProvider } from "y-webrtc";
import { useEditor } from "@tiptap/react";
import { createConfig } from "@/app/utils";
import { Doc, Settings } from "@/app/types";
import { Background, Button, Nav, Page } from "@/app/ui";

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
  const [active, setActive] = React.useState(document.pages[0]);

  const editor = useEditor({
    content: active,
    ...createConfig(doc, provider),
    onUpdate: ({ editor }) =>
      setDocument({
        ...document,
        pages: document.pages.map((page) => {
          if (page === active) {
            page = editor.getJSON();
          }

          return page;
        }),
      }),
  });

  if (!editor) {
    return (
      <div
        className={clsx(
          { dark: settings.theme },
          "relative flex h-screen w-screen flex-col items-center justify-center gap-8 bg-white/50 dark:bg-slate-800/50",
        )}
      >
        <Background />

        <div className="relative flex h-32 w-32 items-center justify-center">
          <div className="h-full w-full animate-spin rounded-full border-8 border-x-white/80 border-y-slate-800/80"></div>
        </div>
        <h1 className="text-2xl">Loading...</h1>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        { dark: settings.theme },
        "relative block h-screen w-screen",
      )}
    >
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
            <div className="absolute left-4 top-4 z-10 grid max-w-32 gap-4 rounded-xl bg-white/50 p-4 shadow-xl ring-white backdrop-blur-3xl dark:bg-slate-800/50 dark:ring-slate-900">
              {document.pages.map((page, i) => (
                <Button key={i} onClick={() => setActive(page)}>
                  <span className="absolute -right-2 -top-2 flex h-4 w-4">
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-white dark:bg-slate-900">
                      <span
                        className="flex h-4 w-4 items-center justify-center"
                        onClick={() =>
                          setDocument({
                            ...document,
                            pages: document.pages.filter(
                              (page) => page !== active,
                            ),
                          })
                        }
                      >
                        <i className="bi bi-x-lg" />
                      </span>
                    </span>
                  </span>
                  Page {i + 1}
                </Button>
              ))}

              <Button
                onClick={() =>
                  setDocument({ ...document, pages: [...document.pages, {}] })
                }
              >
                <i className="bi bi-plus-lg text-xl" />
                <span>Add</span>
              </Button>
            </div>

            <div className="relative flex h-full w-full flex-col items-center gap-4 overflow-auto py-4">
              <Page
                editor={editor}
                content={active}
                settings={settings}
                onContentChange={(content) =>
                  setDocument({
                    ...document,
                    pages: document.pages.map((p) => {
                      if (p === active) {
                        p = content;
                      }

                      return p;
                    }),
                  })
                }
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
