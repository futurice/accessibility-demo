"use client";

import Link from "next/link";

export default function KeyboardNavigation() {
  return (
    <div>
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
        <div className="flex gap-4 items-start">
          <button popoverTarget="dialog-example">Open dialog</button>
          <Link href="/" className="underline">
            link to home
          </Link>
          <fieldset>
            <legend>Radio button group:</legend>

            <div>
              <input type="radio" id="button1" name="value" value="button1" />
              <label htmlFor="button1">Radio button 1</label>
            </div>

            <div>
              <input type="radio" id="button2" name="value" value="button2" />
              <label htmlFor="button2">Radio button 2</label>
            </div>

            <div>
              <input type="radio" id="button3" name="value" value="button3" />
              <label htmlFor="button3">Radio button 3</label>
            </div>

            <div>
              <input type="radio" id="button4" name="value" value="button4" />
              <label htmlFor="button4">Radio button 4</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Chexboxes:</legend>

            <div>
              <input type="checkbox" id="checkbox-1" name="checkbox-1" />
              <label htmlFor="checkbox-1">Checkbox 1</label>
            </div>

            <div>
              <input type="checkbox" id="checkbox-2" name="checkbox-2" />
              <label htmlFor="checkbox-2">Checkbox 2</label>
            </div>
          </fieldset>
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
          <p className="mb-4">This is an example dialog. Press Esc to close.</p>
          <button popoverTarget="dialog-example" popoverTargetAction="hide">
            Close
          </button>
        </div>
      </dialog>
    </div>
  );
}
