import * as RadixAccordion from "@radix-ui/react-accordion";
import React from "react";
import { AccordionContent } from "./accordion-content";
import { AccordionItem } from "./accordion-item";
import { AccordionTrigger } from "./accordion-trigger";

interface AccordionProps {
  defaultValue: string;
  items: { value: string; title: string; content: unknown }[];
}

export function Accordion({
  items,
  defaultValue,
}: AccordionProps): React.JSX.Element {
  return (
    <RadixAccordion.Root
      className="bg-mauve6 rounded-md shadow-[0_2px_10px] shadow-black/5 w-full"
      collapsible
      defaultValue={defaultValue}
      type="single"
    >
      {items.map(({ title, value, content }) => (
        <AccordionItem key={value} value={value}>
          <AccordionTrigger>{title}</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </RadixAccordion.Root>
  );
}
