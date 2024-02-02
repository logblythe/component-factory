import { Element } from "@craftjs/core";
import React from "react";
import { Container } from "../../static-container";

export function ThreeColumns(): React.JSX.Element {
  return (
    <Element
      canvas
      className="border p-2"
      direction="row"
      gap="4"
      id="three-column-parent"
      is={Container}
    >
      <Element canvas className="border" id="three-column-1" is={Container} />
      <Element canvas className="border" id="three-column-2" is={Container} />
      <Element canvas className="border" id="three-column-3" is={Container} />
    </Element>
  );
}

ThreeColumns.craft = {
  displayName: "Three Columns",
};
