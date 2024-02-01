import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import React, { forwardRef } from "react";

export const AccordionContent = forwardRef<
  HTMLDivElement,
  { children: React.ReactElement; className: string; value: string } & Record<
    string,
    unknown
  >
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames(
      "text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="py-[15px] px-5">{children}</div>
  </Accordion.Content>
));

AccordionContent.displayName = "AccordionContent";
