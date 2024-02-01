import { useEditor } from "@craftjs/core";
import { Button, Flex, Text } from "@radix-ui/themes";
import React, { createElement } from "react";

export function SettingsPanel(): React.JSX.Element | null {
  const { actions, selected } = useEditor((state, query) => {
    const [currentNodeId] = state.events.selected;
    let selection = null;

    if (currentNodeId) {
      selection = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings: state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected: selection,
    };
  });

  return selected ? (
    <Flex direction="column">
      <Text>Settings</Text>
      {createElement(selected.settings)}
      {selected.isDeletable ? (
        <Button
          onClick={() => {
            actions.delete(selected.id);
          }}
        >
          Delete
        </Button>
      ) : null}
    </Flex>
  ) : null;
}
