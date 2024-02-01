import { useEditor } from "@craftjs/core";
import { Button as RadixButton } from "@radix-ui/themes";
import React from "react";
import { Text } from "../../user";

export function TextGenerator(): React.JSX.Element {
  const {
    connectors: { create },
  } = useEditor();

  return (
    <RadixButton
      ref={(ref) => create(ref as HTMLSpanElement, <Text text="Simple Text" />)}
    >
      Text
    </RadixButton>
  );
}
