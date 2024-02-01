import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import React, { forwardRef } from "react";

export const AccordionItem = forwardRef<
  HTMLDivElement,
  { children: React.ReactElement; className: string; value: string } & Record<
    string,
    unknown
  >
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={classNames(
      "focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]",
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
));

AccordionItem.displayName = "AccordionItem";
