export default function ScreenReader() {
  return (
    <div className="flex flex-col h-full gap-8">
      <div>
        <h1>VoiceOver controls</h1>
        <p className="italic text-sm">
          Note: VoiceOver is a macOS / iOS screen reader utility. For Windows,
          see <a href="https://www.nvaccess.org/">NVDA</a>.
        </p>
      </div>
      <section>
        <h2>Basic controls:</h2>
        <dl className="grid grid-cols-[max-content_1fr] gap-x-6 gap-y-2 ">
          <dt>
            <kbd>Command</kbd> + <kbd>F5</kbd>
          </dt>
          <dd>Toggle VoiceOver on/off</dd>
          <dt>
            <kbd>Ctrl</kbd> + <kbd>Option</kbd> + <kbd>Right</kbd>
          </dt>
          <dd>Move to next item</dd>

          <dt>
            <kbd>Ctrl</kbd> + <kbd>Option</kbd> + <kbd>Left</kbd>
          </dt>
          <dd>Move to previous item</dd>

          <dt>
            <kbd>Ctrl</kbd> + <kbd>Option</kbd> + <kbd>Space</kbd>
          </dt>
          <dd>Activate an interactive item</dd>

          <dt>
            <kbd>Ctrl</kbd> + <kbd>Option</kbd> + <kbd>Shift</kbd> +{" "}
            <kbd>Down</kbd>
          </dt>
          <dd>Enter an area or group</dd>

          <dt>
            <kbd>Ctrl</kbd> + <kbd>Option</kbd> + <kbd>Shift</kbd> +{" "}
            <kbd>Up</kbd>
          </dt>
          <dd>Exit an area or group</dd>

          <dt>
            <kbd>Ctrl</kbd> + <kbd>Option</kbd> + <kbd>U</kbd>
          </dt>
          <dd>
            Activate rotor. Rotor allows navigation to specific items, e.g.
            headings.
          </dd>
        </dl>
      </section>
      <section>
        <h2>Play area</h2>
        <div className="flex flex-col gap-8 items-start p-2 border border-gray-400 rounded">
          <div>
            <h3>Heading level 3</h3>
            <p>Some text content here</p>
          </div>
          <button>Example button</button>
          <table>
            <caption>Example table</caption>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">City</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John Doe</td>
                <td>30</td>
                <td>New York</td>
              </tr>
              <tr>
                <td>Jane Smith</td>
                <td>25</td>
                <td>Los Angeles</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
