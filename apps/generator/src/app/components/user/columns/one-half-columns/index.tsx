import { Element } from "@craftjs/core";
import React from "react";
import { Container } from "../../static-container";

export function OneHalfColumns(): React.JSX.Element {
  return (
    <Element canvas className="space-x-2" id="two-column-parent" is={Container}>
      <div className="w-1/3">
        <Element canvas id="two-column-1" is={Container} />
      </div>
      <div className="w-2/3">
        <Element canvas id="two-column-2" is={Container} />
      </div>
    </Element>
  );
}

OneHalfColumns.craft = {
  displayName: "One Half Columns",
};
