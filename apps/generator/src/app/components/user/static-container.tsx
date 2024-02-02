import { useNode } from "@craftjs/core";
import type { Responsive } from "@radix-ui/themes";
import { Flex as RadixFlex } from "@radix-ui/themes";
import cx from "classnames";

interface PropType {
  className?: string;
  children?: React.ReactNode;
  direction?: "row" | "column";
  gap?: Responsive<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9">;
}

const defaultProps: Partial<PropType> = {
  direction: "column",
};

export function Container(props: Partial<PropType>): React.JSX.Element {
  const allProps = {
    ...defaultProps,
    ...props,
  };

  const { children, className, ...rest } = allProps;

  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <RadixFlex
      className={cx("w-full min-h-10", className)}
      ref={(ref) => ref && connect(drag(ref))}
      {...rest}
    >
      {children}
    </RadixFlex>
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
  // related: {
  //   settings: Settings,
  // },
};
