import { Element, Frame } from "@craftjs/core";
import React, { forwardRef } from "react";
import { Container } from "../components/user/static-container";

const CanvasRegion = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <Frame>
        <Element
          // background={{ r: 255, g: 255, b: 255, a: 1 }}
          // height="90vh"
          // padding={["40", "40", "40", "40"]}
          // width="auto"
          canvas
          className="bg-gray-50 flex flex-col h-[90vh]"
          custom={{ displayName: "App" }}
          is={Container}
        />
      </Frame>
    </div>
  );
});

CanvasRegion.displayName = "CanvasRegion";

export default CanvasRegion;
