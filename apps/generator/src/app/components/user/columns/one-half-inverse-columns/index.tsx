import { Element } from "@craftjs/core";
import { Box } from "@radix-ui/themes";
import React from "react";
import { Container } from "../../static-container";

export function OneHalfInverseColumns(): React.JSX.Element {
  return (
    <Container className="border p-2" direction="row" gap="4">
      <Box className="w-2/3">
        <Element
          canvas
          className="border"
          id="one-half-inverse-column-1"
          is={Container}
        />
      </Box>
      <Box className="w-1/3">
        <Element
          canvas
          className="border"
          id="one-half-inverse-column-2"
          is={Container}
        />
      </Box>
    </Container>
  );
}

OneHalfInverseColumns.craft = {
  displayName: "One Half Inverse Columns",
};
