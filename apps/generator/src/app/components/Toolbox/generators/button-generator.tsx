import { useEditor } from "@craftjs/core";
import { Button as RadixButton } from "@radix-ui/themes";
import React from "react";
import { Button } from "../../user";

export function ButtonGenerator(): React.JSX.Element {
  const {
    connectors: { create },
  } = useEditor();

  return (
    <RadixButton
      ref={(ref) => ref && create(ref, <Button text="Dragged Button" />)}
    >
      Button
    </RadixButton>
  );
}
