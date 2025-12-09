"use client";

import Accordion from "./components/Accordion";

export default function Examples() {
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
      <h1>Examples</h1>
      <section>
        <h2>Accordion</h2>
        <div className="flex flex-row flex-wrap gap-8 justify-between">
          <div className="w-2/5 grow min-w-2xs flex flex-col gap-4">
            <Accordion accordionTitle="Example Accordion">
              <p>This is an example of accordion content.</p>
            </Accordion>
            <Accordion
              accordionTitle="Accordion with content on top"
              contentPosition="top"
            >
              <form>
                <fieldset className="flex flex-col gap-4">
                  <legend className="font-semibold">Example form</legend>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name-field">Name:</label>
                    <input
                      type="text"
                      id="name-field"
                      name="name-field"
                      className="border border-spruce-green rounded p-1"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email-field">Email:</label>
                    <input
                      type="email"
                      id="email-field"
                      name="email-field"
                      className="border border-spruce-green rounded p-1"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                </fieldset>
              </form>
            </Accordion>
          </div>
          <p className="w-2/5 grow min-w-2xs">
            Use mouse to click the accordion header to toggle the content
            visibility.
          </p>
        </div>
      </section>
      <section>
        <h2>Dialog</h2>
        <div className="flex flex-row flex-wrap gap-8 justify-between">
          <button
            onClick={() => handleOpenDialog("dialog-example")}
            popoverTarget="dialog-example"
            className="h-fit"
          >
            Open dialog
          </button>
          <p className="w-2/5 min-w-2xs">
            Use mouse or keyboard to click the button to open a dialog.
          </p>
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
          <div className="flex flex-row nowrap justify-between items-baseline">
            <h3 id="dialog-label" className="text-lg font-bold mb-2">
              Dialog Title
            </h3>
            {/* Accessibility improvement part 3 (screen readers):
             * When button's text is not descriptive, add a meaningful aria-label
             */}
            <button
              className="font-bold border border-transparent bg-transparent shadow-none hover:border-stone-400"
              onClick={() => handleCloseDialog("dialog-example")}
              // aria-label="Close dialog"
            >
              X
            </button>
          </div>
          <p className="mb-4">This is an example dialog.</p>
        </div>
      </dialog>
    </div>
  );
}
