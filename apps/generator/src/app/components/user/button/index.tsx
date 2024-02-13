import { useNode } from "@craftjs/core";
import React from "react";
import { Text } from "../text";
import type { StyleProps } from "../types";
import { Settings } from "./settings";

export type PropTypes = React.ComponentProps<"button"> &
  StyleProps & {
    text: string;
  };

export function Button({ text, ...rest }: PropTypes): React.JSX.Element {
  const {
    connectors: { connect, drag },
  } = useNode();

  const {
    fontSize,
    fontWeight,
    // padding,
    // margin,
    textColor,
    backgroundColor,
    borderRadius,
    borderColor,
    ...otherProps
  } = rest;

  return (
    <button
      ref={(ref) => connect(drag(ref as HTMLElement))}
      style={{
        // padding: padding?.map((value) => `${value}px`).join(" ") ?? "0 10px",
        // margin: margin?.map((value) => `${value}px`).join(" ") ?? "5px 0",
        borderRadius: `${borderRadius}px`,
        border: `2px solid ${borderColor}`,
        color: `${textColor}`,
        backgroundColor: `${backgroundColor}`,
        fontSize: `${fontSize}px`,
        fontWeight,
        maxWidth: "max-content",
      }}
      type="button"
      {...otherProps}
    >
      <Text text={text} />
    </button>
  );
}

Button.craft = {
  displayName: "Button",
  props: {
    background: { r: 255, g: 255, b: 255, a: 0.5 },
    color: { r: 92, g: 90, b: 90, a: 1 },
    buttonStyle: "full",
    text: "Button",
    margin: ["5", "0", "5", "0"],
    textComponent: {
      // ...Text.craft.props,
      textAlign: "center",
    },
  },
  related: {
    settings: Settings,
  },
};
