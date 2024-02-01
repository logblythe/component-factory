import { Element, Frame } from "@craftjs/core";
import React, { forwardRef } from "react";
import { ResizableContainer } from "../components/user";

const CanvasRegion = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <Frame>
        <Element
          background={{ r: 255, g: 255, b: 255, a: 1 }}
          canvas
          custom={{ displayName: "App" }}
          height="100%"
          is={ResizableContainer}
          padding={["40", "40", "40", "40"]}
          width="auto"
        />
      </Frame>
    </div>
  );
});

CanvasRegion.displayName = "CanvasRegion";

export default CanvasRegion;
