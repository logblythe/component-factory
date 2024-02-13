import { Element } from "@craftjs/core";
import React from "react";
import { Container } from "../../static-container";

export function OneHalfInverseColumns(): React.JSX.Element {
  return (
    <Element canvas className="space-x-2" id="two-column-parent" is={Container}>
      <div className="w-2/3">
        <Element canvas id="two-column-1" is={Container} />
      </div>
      <div className="w-1/3">
        <Element canvas id="two-column-2" is={Container} />
      </div>
    </Element>
  );
}

OneHalfInverseColumns.craft = {
  displayName: "One Half Inverse Columns",
};
