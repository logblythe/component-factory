import { Element } from "@craftjs/core";
import React from "react";
import { Container } from "../../index";

export function TwoColumns(): React.JSX.Element {
  return (
    <Element
      canvas
      className="p-2 border"
      direction="row"
      gap="4"
      id="two-column-parent"
      is={Container}
    >
      <Element canvas className="border" id="two-column-1" is={Container} />
      <Element canvas className="border" id="two-column-2" is={Container} />
    </Element>
  );
}

TwoColumns.craft = {
  displayName: "Two Columns",
};
