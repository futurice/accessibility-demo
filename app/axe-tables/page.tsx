export default function AxeTablesPage() {
  return (
    <div className="flex flex-col h-full gap-10">
      <div className="flex flex-col gap-2">
        <h1>Tables</h1>
        <p>
          The first three tables below each contain a violation axe catches. The
          last three pass axe — but are still inaccessible.
        </p>
      </div>

      <section className="flex flex-col gap-8">
        <h2>Violations axe catches</h2>

        <div className="flex flex-col gap-3">
          <h3>1. Empty table header</h3>
          <p>
            The first <code>{"<th>"}</code> has no text content. Axe rule:{" "}
            <code>empty-table-header</code>.
          </p>
          <table className="border-collapse">
            <thead>
              <tr>
                {/* Violation: empty th */}
                <th className="border border-gray-400 p-2 bg-spruce-green text-snow-white"></th>
                <th className="border border-gray-400 p-2 bg-spruce-green text-snow-white">
                  HP
                </th>
                <th className="border border-gray-400 p-2 bg-spruce-green text-snow-white">
                  AC
                </th>
                <th className="border border-gray-400 p-2 bg-spruce-green text-snow-white">
                  Level
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 p-2">Frodo Baggins</td>
                <td className="border border-gray-400 p-2">14</td>
                <td className="border border-gray-400 p-2">11</td>
                <td className="border border-gray-400 p-2">5</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">Gandalf</td>
                <td className="border border-gray-400 p-2">18</td>
                <td className="border border-gray-400 p-2">15</td>
                <td className="border border-gray-400 p-2">20</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-3">
          <h3>2. scope attribute on a data cell</h3>
          <p>
            <code>scope</code> is used on <code>{"<td>"}</code> elements. It is
            only valid on <code>{"<th>"}</code>. Axe rule:{" "}
            <code>scope-attr-valid</code>.
          </p>
          <table className="border-collapse">
            <thead>
              <tr>
                {/* Violation: scope on td instead of th */}
                <td
                  scope="col"
                  className="border border-gray-400 p-2 font-bold bg-spruce-green text-snow-white"
                >
                  Name
                </td>
                <td
                  scope="col"
                  className="border border-gray-400 p-2 font-bold bg-spruce-green text-snow-white"
                >
                  Race
                </td>
                <td
                  scope="col"
                  className="border border-gray-400 p-2 font-bold bg-spruce-green text-snow-white"
                >
                  Class
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 p-2">Aragorn</td>
                <td className="border border-gray-400 p-2">Human</td>
                <td className="border border-gray-400 p-2">Ranger</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">Legolas</td>
                <td className="border border-gray-400 p-2">Elf</td>
                <td className="border border-gray-400 p-2">Ranger</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-3">
          <h3>3. headers attribute referencing a nonexistent ID</h3>
          <p>
            The name cells use <code>{'headers="wrong-id"'}</code>, which does
            not match any cell&apos;s <code>id</code> in this table. Axe rule:{" "}
            <code>td-headers-attr</code>.
          </p>
          <table className="border-collapse">
            <thead>
              <tr>
                <th
                  id="h-name"
                  className="border border-gray-400 p-2 bg-spruce-green text-snow-white"
                >
                  Name
                </th>
                <th
                  id="h-spell"
                  className="border border-gray-400 p-2 bg-spruce-green text-snow-white"
                >
                  Signature spell
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* Violation: headers points to "wrong-id" which doesn't exist */}
                <td headers="wrong-id" className="border border-gray-400 p-2">
                  Gandalf
                </td>
                <td headers="h-spell" className="border border-gray-400 p-2">
                  Fireworks
                </td>
              </tr>
              <tr>
                <td headers="wrong-id" className="border border-gray-400 p-2">
                  Saruman
                </td>
                <td headers="h-spell" className="border border-gray-400 p-2">
                  Voice of Command
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <h2>Violations axe misses</h2>

        <div className="flex flex-col gap-3">
          <h3>4. No semantic headers — only styled data cells</h3>
          <p>
            The header row uses <code>{"<td>"}</code> elements styled bold.
            There are no <code>{"<th>"}</code> elements, so screen readers
            announce every cell as plain data with no column context. Axe passes
            this table because it only validates <code>{"<th>"}</code> elements
            when they exist.
          </p>
          <table className="border-collapse">
            <thead>
              <tr>
                {/* No th at all — just styled tds */}
                <td className="border border-gray-400 p-2 font-bold">Name</td>
                <td className="border border-gray-400 p-2 font-bold">Race</td>
                <td className="border border-gray-400 p-2 font-bold">Class</td>
                <td className="border border-gray-400 p-2 font-bold">
                  Alignment
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 p-2">Frodo</td>
                <td className="border border-gray-400 p-2">Hobbit</td>
                <td className="border border-gray-400 p-2">Rogue</td>
                <td className="border border-gray-400 p-2">Neutral Good</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">Sauron</td>
                <td className="border border-gray-400 p-2">Maia</td>
                <td className="border border-gray-400 p-2">Sorcerer</td>
                <td className="border border-gray-400 p-2">Lawful Evil</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-3">
          <h3>5. Non-descriptive header text</h3>
          <p>
            The table has proper <code>{"<th>"}</code> elements, so axe is
            satisfied. But headers labeled &ldquo;Col 1&rdquo;, &ldquo;Col
            2&rdquo; give a screen reader user no information about the data.
            Axe cannot judge the quality of text content.
          </p>
          <table className="border-collapse">
            <thead>
              <tr>
                {/* Technically valid th, but meaningless text */}
                <th className="border border-gray-400 p-2 bg-spruce-green text-snow-white">
                  Col 1
                </th>
                <th className="border border-gray-400 p-2 bg-spruce-green text-snow-white">
                  Col 2
                </th>
                <th className="border border-gray-400 p-2 bg-spruce-green text-snow-white">
                  Col 3
                </th>
                <th className="border border-gray-400 p-2 bg-spruce-green text-snow-white">
                  Col 4
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 p-2">Gandalf</td>
                <td className="border border-gray-400 p-2">Istar</td>
                <td className="border border-gray-400 p-2">24000</td>
                <td className="border border-gray-400 p-2">Neutral Good</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">Saruman</td>
                <td className="border border-gray-400 p-2">Istar</td>
                <td className="border border-gray-400 p-2">24000</td>
                <td className="border border-gray-400 p-2">Lawful Evil</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-3">
          <h3>7. Two-way table without scope</h3>
          <p>
            This table has both column headers and row headers, but neither has
            a <code>scope</code> attribute. Without{" "}
            <code>scope=&quot;col&quot;</code> and{" "}
            <code>scope=&quot;row&quot;</code>, screen readers may not correctly
            associate a cell with both its row and column header. Axe does not
            require <code>scope</code> — it only flags invalid values.
          </p>
          <table className="border-collapse">
            <thead>
              <tr>
                {/* No scope on any th */}
                <th className="border border-gray-400 p-2 bg-spruce-green text-snow-white">
                  <span className="sr-only">Class</span>
                </th>
                <th className="border border-gray-400 p-2 bg-spruce-green text-snow-white">
                  STR
                </th>
                <th className="border border-gray-400 p-2 bg-spruce-green text-snow-white">
                  DEX
                </th>
                <th className="border border-gray-400 p-2 bg-spruce-green text-snow-white">
                  CON
                </th>
                <th className="border border-gray-400 p-2 bg-spruce-green text-snow-white">
                  INT
                </th>
                <th className="border border-gray-400 p-2 bg-spruce-green text-snow-white">
                  WIS
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border border-gray-400 p-2 bg-spruce-green text-snow-white">
                  Barbarian
                </th>
                <td className="border border-gray-400 p-2">16</td>
                <td className="border border-gray-400 p-2">13</td>
                <td className="border border-gray-400 p-2">15</td>
                <td className="border border-gray-400 p-2">8</td>
                <td className="border border-gray-400 p-2">11</td>
              </tr>
              <tr>
                <th className="border border-gray-400 p-2 bg-spruce-green text-snow-white">
                  Ranger
                </th>
                <td className="border border-gray-400 p-2">13</td>
                <td className="border border-gray-400 p-2">16</td>
                <td className="border border-gray-400 p-2">14</td>
                <td className="border border-gray-400 p-2">12</td>
                <td className="border border-gray-400 p-2">14</td>
              </tr>
              <tr>
                <th className="border border-gray-400 p-2 bg-spruce-green text-snow-white">
                  Wizard
                </th>
                <td className="border border-gray-400 p-2">8</td>
                <td className="border border-gray-400 p-2">14</td>
                <td className="border border-gray-400 p-2">12</td>
                <td className="border border-gray-400 p-2">17</td>
                <td className="border border-gray-400 p-2">13</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
