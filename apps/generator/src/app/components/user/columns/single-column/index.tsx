import { Element } from "@craftjs/core";
import React from "react";
import { Container } from "../../static-container";

export function SingleColumn(): React.JSX.Element {
  return (
    <Element
      canvas
      className="p-2 border"
      direction="row"
      id="single-column-parent"
      is={Container}
    >
      <Element canvas id="single-column-child" is={Container} />
    </Element>
  );
}

SingleColumn.craft = {
  displayName: "Single Column",
};
