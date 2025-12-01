import React from "react";

/**
 * Accordion header component that toggles the accordion content visibility.
 */
const AccordionTrigger = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <div className="p-4 font-semibold" onClick={onClick}>
      {children}
    </div>
  );
};

/**
 * Content displayed within the accordion when it is expanded.
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

  const toggleAccordion = (currentState: boolean) => {
    console.log("toggling accordion");
    setIsOpen(!currentState);
  };

  return (
    <div
      className={`border bg-dawn-rose rounded w-full flex ${
        contentPosition === "top" ? "flex-col-reverse" : "flex-col"
      }`}
    >
      <AccordionTrigger onClick={() => toggleAccordion(isOpen)}>
        {accordionTitle}
      </AccordionTrigger>
      {isOpen && <div className="border-t border-spruce-green" />}
      <div className={`${isOpen ? "block" : "hidden"}`}>
        <AccordionContent>{children}</AccordionContent>
      </div>
    </div>
  );
};

export default Accordion;
