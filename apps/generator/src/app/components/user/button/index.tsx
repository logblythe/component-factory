import { useNode } from "@craftjs/core";
import { Button as RadixButton } from "@radix-ui/themes";
import React from "react";
import { Text } from "../text";
import type { StyleProps } from "../types";
import { Settings } from "./settings";

export type PropTypes = React.ComponentProps<typeof RadixButton> &
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
    textColor,
    backgroundColor,
    paddingX,
    paddingY,
    borderRadius,
    borderColor,
    ...otherProps
  } = rest;

  return (
    <RadixButton
      ref={(ref) => connect(drag(ref as HTMLElement))}
      style={{
        borderRadius: `${borderRadius}px`,
        border: `2px solid ${borderColor}`,
        paddingTop: `${paddingY}px`,
        paddingRight: `${paddingX}px`,
        paddingBottom: `${paddingY}px`,
        paddingLeft: `${paddingX}px`,
        color: `${textColor}`,
        backgroundColor: `${backgroundColor}`,
        fontSize: `${fontSize}px`,
        fontWeight,
        maxWidth: "max-content",
      }}
      {...otherProps}
    >
      <Text text={text} />
    </RadixButton>
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
