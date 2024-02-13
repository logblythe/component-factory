import { useEditor, useNode } from "@craftjs/core";
import React from "react";
import ContentEditable from "react-contenteditable";
import type { StyleProps } from "../types";
import { Settings } from "./settings";

export type PropTypes = React.ComponentProps<"div"> &
  StyleProps & {
    text: string;
  };

export function Text({ text, ...rest }: PropTypes): React.JSX.Element {
  const {
    connectors: { connect },
    setProp,
  } = useNode();

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  const {
    padding,
    margin,
    textColor,
    fontWeight,
    fontSize,
    // textAlign,
  } = rest;

  return (
    <ContentEditable
      disabled={!enabled}
      html={text} // innerHTML of the editable div
      innerRef={connect}
      onChange={(e) => {
        setProp((prop) => (prop.text = e.target.value), 500);
      }} // use true to disable editing
      style={{
        padding: padding?.map((value) => `${value}px`).join(" ") ?? 0,
        margin: margin?.map((value) => `${value}px`).join(" ") ?? 0,
        color: `${textColor}`,
        fontSize: `${fontSize}px`,
        fontWeight,
      }}
      tagName="h2" // Use a custom HTML tag (uses a div by default)
    />
  );
}

Text.craft = {
  displayName: "Text",
  props: {
    text: "Text",
  },
  related: {
    settings: Settings,
  },
};
