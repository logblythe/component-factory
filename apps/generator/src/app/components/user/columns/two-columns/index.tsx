import { Element } from "@craftjs/core";
import React from "react";
import { Container } from "../../static-container";

export function TwoColumns(): React.JSX.Element {
  return (
    <Element
      canvas
      className="space-x-2 "
      id="two-column-parent"
      is={Container}
    >
      <Element canvas id="two-column-1" is={Container} />
      <Element canvas id="two-column-2" is={Container} />
    </Element>
  );
}

TwoColumns.craft = {
  displayName: "Two Columns",
};
