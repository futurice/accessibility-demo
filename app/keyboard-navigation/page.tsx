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
            <kbd>
              <kbd>Shift</kbd>+<kbd>Tab</kbd>
            </kbd>
          </dt>
          <dd>Move to previous interactive element</dd>

          <dt>
            <kbd>Enter</kbd>
          </dt>
          <dd>Activate an interactive element (buttons, links, ...)</dd>

          <dt>
            <kbd>Space</kbd>
          </dt>
          <dd>Toggle an interactive element (buttons, checkboxes, ...)</dd>

          <dt>
            <kbd>Up</kbd>/<kbd>Down</kbd>/<kbd>Left</kbd>/<kbd>Right</kbd>
          </dt>
          <dd>Navigate within components (e.g. radio buttons)</dd>

          <dt>
            <kbd>Esc</kbd>
          </dt>
          <dd>Close a dialogs</dd>
        </dl>
      </section>
    </div>
  );
}
