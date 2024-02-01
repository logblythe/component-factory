import { ChevronRightIcon } from "@radix-ui/react-icons";
import { HoverCard, IconButton } from "@radix-ui/themes";
import type { Dispatch, SetStateAction } from "react";
import type { StateType } from "../type";

export function SidePanelToggler({
  state: { isSidebarVisible, isEditingEnabled },
  setState,
}: {
  state: StateType;
  setState: Dispatch<
    SetStateAction<{
      isSidebarVisible: boolean;
      isEditingEnabled: boolean;
    }>
  >;
}): React.JSX.Element {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger>
        <IconButton
          className={isEditingEnabled ? "cursor-pointer" : "cursor-not-allowed"}
          disabled={!isEditingEnabled}
          onClick={() => {
            setState((state) => ({
              ...state,
              isSidebarVisible: !state.isSidebarVisible,
            }));
          }}
        >
          <ChevronRightIcon
            className={`transition-transform transform ${
              isSidebarVisible ? "rotate-180" : "rotate-0"
            }`}
            height="20"
            width="20"
          />
        </IconButton>
      </HoverCard.Trigger>
      <HoverCard.Content size="1">Toggle Panel</HoverCard.Content>
    </HoverCard.Root>
  );
}
