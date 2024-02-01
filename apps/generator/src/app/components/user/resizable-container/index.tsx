import type { Node } from "@craftjs/core";
import React from "react";
import { Button } from "../button";
import { Resizer } from "../resizer";
import { Text } from "../text";
import { Settings } from "./settings";

export interface ContainerProps {
  background: Record<"r" | "g" | "b" | "a", number>;
  color: Record<"r" | "g" | "b" | "a", number>;
  flexDirection: string;
  alignItems: string;
  justifyContent: string;
  fillSpace: string;
  width: string;
  height: string;
  padding: string[];
  margin: string[];
  marginTop: number;
  marginLeft: number;
  marginBottom: number;
  marginRight: number;
  shadow: number;
  children: React.ReactNode;
  radius: number;
}

const defaultProps = {
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  fillSpace: "no",
  padding: ["0", "0", "0", "0"],
  margin: ["0", "0", "0", "0"],
  background: { r: 255, g: 255, b: 255, a: 1 },
  color: { r: 0, g: 0, b: 0, a: 1 },
  shadow: 0,
  radius: 0,
  width: "100%",
  height: "auto",
};

export function ResizableContainer(
  props: Partial<ContainerProps>
): React.JSX.Element {
  const allProps = {
    ...defaultProps,
    ...props,
  };
  const {
    flexDirection,
    alignItems,
    justifyContent,
    fillSpace,
    // background,
    // color,
    padding,
    margin,
    shadow,
    radius,
    children,
  } = allProps;
  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      style={{
        justifyContent,
        flexDirection,
        alignItems,
        // background: background
        //   ? `rgba(${Object.values(background)})`
        //   : undefined,
        // color: color ? `rgba(${Object.values(color)})` : undefined,
        padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        boxShadow:
          shadow === 0
            ? "none"
            : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
        borderRadius: `${radius}px`,
        flex: fillSpace === "yes" ? 1 : "unset",
      }}
    >
      {children}
    </Resizer>
  );
}

ResizableContainer.craft = {
  displayName: "Container",
  props: defaultProps,
  rules: {
    canDrag: () => true,
    canMoveIn: (incomingNodes: Node[], currentNode: Node) => {
      if (currentNode.id !== "ROOT") {
        return incomingNodes.every(
          (node) => node.data.type === Button || node.data.type === Text
        );
      }
      return true;
    },
  },
  related: {
    settings: Settings,
  },
};
