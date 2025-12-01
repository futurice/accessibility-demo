"use client";

import Link from "next/link";
import { MouseEventHandler } from "react";

const InputAndLabelWrapper = ({
  children,
  orientation,
  gap = true,
}: {
  children: React.ReactNode;
  orientation: "horizontal" | "vertical";
  gap?: boolean;
}) => {
  const flexDirection =
    orientation === "horizontal" ? "flex-row flex-nowrap" : "flex-col";

  return (
    <div
      className={`flex ${flexDirection} ${gap ? "gap-2" : ""} items-baseline`}
    >
      {children}
    </div>
  );
};

export default function KeyboardNavigation() {
  const handleOpenDialog = (targetDialogId: string) => {
    const dialog = document.getElementById(targetDialogId) as HTMLDialogElement;
    if (!dialog) return;

    dialog.showModal();
  };

  const handleCloseDialog = (targetDialogId: string) => {
    const dialog = document.getElementById(targetDialogId) as HTMLDialogElement;
    if (!dialog) return;

    dialog.close();
  };

  return (
    <div className="flex flex-col h-full gap-8">
      <h1>Keyboard navigation</h1>
      <section>
        <h2>Basic controls:</h2>
        <dl className="grid grid-cols-[max-content_1fr] gap-x-6 gap-y-2 ">
          <dt>
            <kbd>Tab</kbd>
          </dt>
          <dd>Move to next interactive element</dd>

          <dt>
            <kbd>Shift</kbd> + <kbd>Tab</kbd>
          </dt>
          <dd>Move to previous interactive element</dd>

          <dt>
            <kbd>Enter</kbd>
          </dt>
          <dd>Activate an interactive element</dd>

          <dt>
            <kbd>Space</kbd>
          </dt>
          <dd>Toggle an interactive element</dd>

          <dt>
            <kbd>Up</kbd> / <kbd>Down</kbd> / <kbd>Left</kbd> / <kbd>Right</kbd>
          </dt>
          <dd>Navigate within components</dd>

          <dt>
            <kbd>Esc</kbd>
          </dt>
          <dd>Close a dialogs</dd>
        </dl>
      </section>
      <section>
        <h2>Play area</h2>
        <div className="flex flex-col gap-8 items-start p-2 border border-gray-400 rounded">
          <button
            onClick={() => handleOpenDialog("dialog-example")}
            popoverTarget="dialog-example"
          >
            Open dialog
          </button>
          <Link href="/" className="underline">
            link to home
          </Link>
          <fieldset>
            <legend>Radio button group:</legend>

            <InputAndLabelWrapper orientation="horizontal">
              <input type="radio" id="button1" name="value" value="button1" />
              <label htmlFor="button1">Radio button 1</label>
            </InputAndLabelWrapper>

            <InputAndLabelWrapper orientation="horizontal">
              <input type="radio" id="button2" name="value" value="button2" />
              <label htmlFor="button2">Radio button 2</label>
            </InputAndLabelWrapper>

            <InputAndLabelWrapper orientation="horizontal">
              <input type="radio" id="button3" name="value" value="button3" />
              <label htmlFor="button3">Radio button 3</label>
            </InputAndLabelWrapper>

            <InputAndLabelWrapper orientation="horizontal">
              <input type="radio" id="button4" name="value" value="button4" />
              <label htmlFor="button4">Radio button 4</label>
            </InputAndLabelWrapper>
          </fieldset>

          <fieldset>
            <legend>Chexboxes:</legend>

            <InputAndLabelWrapper orientation="horizontal">
              <input type="checkbox" id="checkbox-1" name="checkbox-1" />
              <label htmlFor="checkbox-1">Checkbox 1</label>
            </InputAndLabelWrapper>

            <InputAndLabelWrapper orientation="horizontal">
              <input type="checkbox" id="checkbox-2" name="checkbox-2" />
              <label htmlFor="checkbox-2">Checkbox 2</label>
            </InputAndLabelWrapper>
          </fieldset>
          <fieldset className="flex flex-col gap-2">
            <legend>Text fields</legend>

            <InputAndLabelWrapper orientation="vertical" gap={false}>
              <label htmlFor="text-field-1">Full name:</label>
              <input
                type="text"
                id="text-field-1"
                name="text-field-1"
                placeholder="John Doe"
              />
            </InputAndLabelWrapper>

            <InputAndLabelWrapper orientation="vertical" gap={false}>
              <label htmlFor="text-field-2">Email address:</label>
              <input
                type="email"
                id="text-field-2"
                name="text-field-2"
                placeholder="john.doe@example.com"
              />
            </InputAndLabelWrapper>

            <InputAndLabelWrapper orientation="vertical" gap={false}>
              <label htmlFor="date-field">Date of birth:</label>
              <input type="date" id="date-field" name="date-field" />
            </InputAndLabelWrapper>
          </fieldset>
          <details>
            <summary>Details summary</summary>
            <p className="pt-1.5">Details contents</p>
          </details>
        </div>
      </section>
      <dialog
        popover="auto"
        id="dialog-example"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-label"
        className="m-auto"
      >
        <div className="p-4 bg-white border rounded shadow-lg">
          <h3 id="dialog-label" className="text-lg font-bold mb-2">
            Dialog Title
          </h3>
          <p className="mb-4">This is an example dialog.</p>
          <button
            onClick={() => handleCloseDialog("dialog-example")}
            popoverTarget="dialog-example"
            popoverTargetAction="hide"
          >
            Close
          </button>
        </div>
      </dialog>
    </div>
  );
}
