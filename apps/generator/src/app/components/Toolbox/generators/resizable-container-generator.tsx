import { Element, useEditor } from "@craftjs/core";
import { Button as RadixButton } from "@radix-ui/themes";
import React from "react";
import { ResizableContainer } from "../../user";

export function ResizableContainerGenerator(): React.JSX.Element {
  const {
    connectors: { create },
  } = useEditor();

  return (
    <RadixButton
      ref={(ref) =>
        create(
          ref as HTMLElement,
          <Element
            background={{ r: 78, g: 78, b: 78, a: 1 }}
            canvas
            flexDirection="row"
            is={ResizableContainer}
            padding={["20", "20", "20", "20"]}
          />
        )
      }
    >
      Resizable Container
    </RadixButton>
  );
}
