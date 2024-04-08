"use client";

import clsx from "clsx";
import * as Y from "yjs";
import React from "react";
import "highlight.js/styles/github-dark.css";
import { WebrtcProvider } from "y-webrtc";
import { useEditor } from "@tiptap/react";
import { Colors, Constants, createConfig } from "@/app/utils";
import { Doc, Padding, Settings, Size } from "@/app/types";
import {
  Background,
  Button,
  ColorPicker,
  Input,
  Loading,
  Modal,
  Nav,
  Page,
  Select,
} from "@/app/ui";

const doc = new Y.Doc();
const provider = new WebrtcProvider("example-document", doc);

const Home = () => {
  // Display modals
  const [modals, setModals] = React.useState({ page: false, user: false });

  // User
  const [user, setUser] = React.useState({
    name: "Your name",
    color: Colors[0][1],
  });

  // Settings
  const [settings, setSettings] = React.useState<Settings>({
    theme: true,
    format: "pdf",
    size: "Letter",
    padding: "64px",
    orientation: true,
  });

  // Docs
  const [document, setDocument] = React.useState<Doc>({
    id: 0,
    title: "My Doc",
    pages: [{}],
  });
  const [active, setActive] = React.useState(document.pages[0]);

  const editor = useEditor({
    content: active,
    ...createConfig(doc, provider, user),
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
    return <Loading theme={settings.theme} />;
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

            <div className="absolute right-8 top-4 z-10 grid max-w-64 gap-4 rounded-xl bg-white/50 p-4 shadow-xl ring-white backdrop-blur-3xl dark:bg-slate-800/50 dark:ring-slate-900">
              <Button
                onClick={() => setModals({ ...modals, user: !modals.user })}
              >
                <i className="bi bi-person text-xl" />
                <span>User</span>
              </Button>
              <Button
                onClick={() => setModals({ ...modals, page: !modals.page })}
              >
                <i className="bi bi-file-earmark text-xl" />
                <span>Page Setup</span>
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

      <Modal
        title="Page Setup"
        show={modals.page}
        theme={settings.theme}
        onClose={() => setModals({ ...modals, page: false })}
      >
        <Select
          label="Size"
          value={settings.size}
          data={Object.keys(Constants.sizes)}
          onChange={(v) => setSettings({ ...settings, size: v as Size })}
        />

        <Select
          label="Margin"
          value={settings.padding}
          data={Object.keys(Constants.paddings)}
          onChange={(v) => setSettings({ ...settings, padding: v as Padding })}
        />
      </Modal>

      <Modal
        title="User"
        show={modals.user}
        theme={settings.theme}
        onClose={() => setModals({ ...modals, user: false })}
      >
        <Input
          label="Name"
          value={user.name}
          onChange={(event) => setUser({ ...user, name: event.target.value })}
        />

        <div className="flex items-center justify-between gap-4">
          <ColorPicker
            label="Change"
            onCLick={(c) => setUser({ ...user, color: c })}
          />
          <div
            className="h-8 w-8 rounded"
            style={{ backgroundColor: user.color }}
          ></div>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
