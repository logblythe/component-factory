import { Element } from "@craftjs/core";
import { Box } from "@radix-ui/themes";
import React from "react";
import { Container } from "../../index";

export function OneHalfColumns(): React.JSX.Element {
  return (
    <Container className="border p-2" direction="row" gap="4">
      <Box className="w-1/3">
        <Element
          canvas
          className="border"
          id="one-half-column-1"
          is={Container}
        />
      </Box>
      <Box className="w-2/3">
        <Element
          canvas
          className="border"
          id="one-half-column-2"
          is={Container}
        />
      </Box>
    </Container>
  );
}

OneHalfColumns.craft = {
  displayName: "One Half Columns",
};
