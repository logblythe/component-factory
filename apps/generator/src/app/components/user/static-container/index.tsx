import { useEditor, useNode } from "@craftjs/core";
import type { Responsive } from "@radix-ui/themes";
import cx from "classnames";
import { Settings } from "./settings";

interface PropType {
  className?: string;
  children?: React.ReactNode;
  direction?: "row" | "column";
  gap?: Responsive<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9">;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  display?: "flex" | "inline-flex";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "baseline";
}

const DEFAULT_CHILD = <button type="button">Add element</button>;

const defaultProps: Partial<PropType> = {
  display: "flex",
  children: DEFAULT_CHILD,
  alignItems: "center",
  justifyContent: "center",
};

export function Container(props: Partial<PropType>): React.JSX.Element {
  const allProps = {
    ...defaultProps,
    ...props,
  };

  const {
    children,
    className,
    flexDirection,
    alignItems,
    justifyContent,
    ...rest
  } = allProps;

  const {
    id,
    connectors: { connect, drag },
  } = useNode();

  const { childNodes, isTopLevelNode } = useEditor((_, query) => {
    return {
      childNodes: query.node(id).childNodes(),
      isTopLevelNode: query.node(id).isTopLevelNode(),
    };
  });

  return (
    <div
      className={cx("w-full min-h-10 p-4 gap-4 flex", className, {
        "bg-blue-100 border-2 border-blue-500": childNodes.length === 0,
        "border-2": isTopLevelNode,
      })}
      ref={(ref) => ref && connect(drag(ref))}
      style={{
        flexDirection,
        alignItems,
        justifyContent,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

Container.craft = {
  displayName: "Container",
  props: defaultProps,
  rules: {
    canDrag: () => true,
    // canMoveIn: (incomingNodes: Node[], currentNode: Node) => {
    //   if (currentNode.id !== "ROOT") {
    //     return incomingNodes.every(
    //       (node) => node.data.type === Button || node.data.type === Text
    //     );
    //   }
    //   return true;
    // },
  },
  related: {
    settings: Settings,
  },
};
