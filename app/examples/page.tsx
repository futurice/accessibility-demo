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
            <Accordion
              accordionTitle="Fill your character details"
              contentPosition="top"
            >
              <form>
                <fieldset className="flex flex-col gap-4">
                  <legend className="font-semibold">Character details</legend>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name-field">Name:</label>
                    <input
                      type="text"
                      id="name-field"
                      name="name-field"
                      className="border border-spruce-green rounded p-1"
                      placeholder="Drizzt Do'Urden"
                    />
                  </div>
                  <fieldset className="flex flex-col gap-2">
                    <legend>Class:</legend>
                    <div className="flex flex-row flex-nowrap gap-2">
                      <input
                        type="radio"
                        id="barbarian"
                        name="character-class"
                        value="barbarian"
                      />
                      <label htmlFor="barbarian">Barbarian</label>
                    </div>
                    <div className="flex flex-row flex-nowrap gap-2">
                      <input
                        type="radio"
                        id="cleric"
                        name="character-class"
                        value="cleric"
                      />
                      <label htmlFor="cleric">Cleric</label>
                    </div>
                    <div className="flex flex-row flex-nowrap gap-2">
                      <input
                        type="radio"
                        id="sorcerer"
                        name="character-class"
                        value="sorcerer"
                      />
                      <label htmlFor="sorcerer">Sorcerer</label>
                    </div>
                    <div className="flex flex-row flex-nowrap gap-2">
                      <input
                        type="radio"
                        id="ranger"
                        name="character-class"
                        value="ranger"
                      />
                      <label htmlFor="ranger">Ranger</label>
                    </div>
                  </fieldset>
                </fieldset>
              </form>
            </Accordion>
            <Accordion accordionTitle="Class information">
              <dl className="flex flex-col gap-4">
                <div>
                  <dt className="font-bold">Barbarian</dt>
                  <dd>A fierce warrior of primal rage.</dd>
                </div>

                <div>
                  <dt className="font-bold">Cleric</dt>
                  <dd>A miraculous priest of divine power.</dd>
                </div>
                <div>
                  <dt className="font-bold">Sorcerer</dt>
                  <dd>A dazzling mage with innate magic.</dd>
                </div>
                <div>
                  <dt className="font-bold">Ranger</dt>
                  <dd>A wondering warrior impued with primal magic.</dd>
                </div>
              </dl>
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
            Help
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
              Help - Character Creation
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
          <p className="mb-4">
            Fill your character name and choose a class to create your
            character.
          </p>
        </div>
      </dialog>
    </div>
  );
}
