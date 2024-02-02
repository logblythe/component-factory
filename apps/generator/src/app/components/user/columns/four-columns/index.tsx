import { Element } from "@craftjs/core";
import React from "react";
import { Container } from "../../static-container";

export function FourColumns(): React.JSX.Element {
  return (
    <Element
      canvas
      className="border p-2"
      direction="row"
      gap="4"
      id="four-column-parent"
      is={Container}
    >
      <Element canvas className="border" id="four-column-1" is={Container} />
      <Element canvas className="border" id="four-column-2" is={Container} />
      <Element canvas className="border" id="four-column-3" is={Container} />
      <Element canvas className="border" id="four-column-4" is={Container} />
    </Element>
  );
}

FourColumns.craft = {
  displayName: "Four Columns",
};
