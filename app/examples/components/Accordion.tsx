import React from "react";

/**
 * Handler function for manually defining the onClick event for enter and space keys.
 */
const handleKeyUp = (
  event: React.KeyboardEvent<HTMLDivElement>,
  onClick: () => void
) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    onClick();
  }
};

/**
 * Accordion header component that toggles the accordion content visibility.
 *
 * Accessibility improvement part 1.1 (keyboard interaction):
 * 1. Add tabindex="0" to make the div focusable via keyboard.
 * 2. Add onKeyUp handler for enabling keyboard interaction.
 *
 * Accessibility improvement part 1.2 (screen readers):
 * 1. Add role "button" so that screen readers can identify it as an interactive element.
 * 2. Add aria-expanded attribute to indicate the current state of the accordion (expanded/collapsed).
 * 3. Bonus: In theory, we could also add an aria-label to provide context on what happens from the button.
 *           However, if the trigger text is descriptive enough, overriding it with aria-label would be unnecessary.
 */
const AccordionTrigger = ({
  children,
  setIsOpen,
  isAccordionOpen,
}: {
  children: React.ReactNode;
  setIsOpen: (isOpen: boolean) => void;
  isAccordionOpen: boolean;
}) => {
  const handleOnClick = () => {
    setIsOpen(!isAccordionOpen);
  };

  return (
    <div
      className="p-4 font-semibold"
      onClick={handleOnClick}
      // tabIndex={0}
      // onKeyUp={(e) => handleKeyUp(e, handleOnClick)}
      // role="button"
      // aria-label="Toggle accordion"
      // aria-expanded={isAccordionOpen}
    >
      {children}
    </div>
  );
};

/**
 * Content displayed within the accordion when it is expanded.
 *
 * Accessibility improvement part 2 (logical tab order):
 * 1. Remove flex-col-reverse class (and related divide-* styles).
 * 2. Use flex-col only
 * 3. Conditionally render the content based on isOpen state.
 */
const AccordionContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-4">{children}</div>;
};

export const Accordion = ({
  accordionTitle,
  contentPosition = "bottom",
  children,
}: {
  accordionTitle: string;
  contentPosition?: "top" | "bottom";
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className={`border bg-dawn-rose rounded w-full flex ${
        contentPosition === "top"
          ? `flex-col-reverse ${
              isOpen ? "divide-y divide-y-reverse divide-spruce-green" : ""
            }`
          : `flex-col ${isOpen ? "divide-y divide-spruce-green" : ""}`
      }`}
    >
      <AccordionTrigger setIsOpen={setIsOpen} isAccordionOpen={isOpen}>
        {accordionTitle}
      </AccordionTrigger>
      <div className={`${isOpen ? "block" : "hidden"}`}>
        <AccordionContent>{children}</AccordionContent>
      </div>
    </div>
  );
};

export default Accordion;
