"use client";

import Accordion from "./components/Accordion";

export default function Examples() {
  return (
    <div>
      <h1>Examples</h1>
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
    </div>
  );
}
