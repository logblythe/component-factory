import { Element, useEditor } from "@craftjs/core";
import { Button as RadixButton } from "@radix-ui/themes";
import React from "react";
import { Container } from "../../user/static-container";

export function ContainerGenerator(): React.JSX.Element {
  const {
    connectors: { create },
  } = useEditor();

  return (
    <RadixButton
      ref={(ref) =>
        create(
          ref as HTMLElement,
          <Element
            canvas
            className="border flex flex-row p-4 gap-4"
            is={Container}
          />
        )
      }
    >
      Container
    </RadixButton>
  );
}
