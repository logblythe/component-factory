import { useEditor } from "@craftjs/core";
import { ResetIcon } from "@radix-ui/react-icons";
import {
  Button,
  Flex,
  HoverCard,
  IconButton,
  Switch,
  Text,
} from "@radix-ui/themes";
import { compress, encodeBase64, decompress, decodeBase64 } from "lzutf8";

interface PropsType {
  isEditingEnabled: boolean;
  onEnableEditingChange: (enabled: boolean) => void;
  renderSaveHtml: () => JSX.Element;
}

export function Header({
  isEditingEnabled,
  onEnableEditingChange,
  renderSaveHtml,
}: PropsType): React.JSX.Element {
  const { enabled, canUndo, canRedo, actions, query } = useEditor(
    (state, _query) => ({
      enabled: state.options.enabled,
      canUndo: _query.history.canUndo(),
      canRedo: _query.history.canRedo(),
    })
  );

  const handleSave = (): void => {
    const json = query.serialize();
    const encoded = encodeBase64(compress(json) as Uint8Array);
    localStorage.setItem("craftjs-demo", encoded);
  };

  const handleLoad = (): void => {
    const encoded = localStorage.getItem("craftjs-demo") ?? "";
    const decoded = decompress(decodeBase64(encoded));
    actions.deserialize(decoded as string);
  };

  return (
    <Flex className="py-2" gap="4">
      <Text as="label" size="2">
        <Flex gap="2">
          <Switch
            defaultChecked={isEditingEnabled}
            onCheckedChange={(isChecked) => {
              onEnableEditingChange(isChecked);
              actions.setOptions((options) => (options.enabled = isChecked));
            }}
          />
          Enable Editing
        </Flex>
      </Text>
      <IconButton
        className={`border rounded-full p-2 ${
          isEditingEnabled ? "cursor-pointer" : "cursor-not-allowed"
        }`}
        disabled={!canUndo || !enabled}
        onClick={() => {
          actions.history.undo();
        }}
      >
        <HoverCard.Root>
          <HoverCard.Trigger>
            <ResetIcon height="16" width="16" />
          </HoverCard.Trigger>
          <HoverCard.Content size="1">Undo</HoverCard.Content>
        </HoverCard.Root>
      </IconButton>
      <IconButton
        className={`border rounded-full p-2 ${
          isEditingEnabled ? "cursor-pointer" : "cursor-not-allowed"
        }`}
        disabled={!canRedo || !enabled}
        onClick={() => {
          actions.history.redo();
        }}
      >
        <HoverCard.Root>
          <HoverCard.Trigger>
            <ResetIcon className="rotate-180" height="16" width="16" />
          </HoverCard.Trigger>
          <HoverCard.Content size="1">Redo</HoverCard.Content>
        </HoverCard.Root>
      </IconButton>
      <Button className="border rounded-full p-2" onClick={handleSave}>
        Save
      </Button>
      <Button className="border rounded-full p-2" onClick={handleLoad}>
        Load
      </Button>
      {renderSaveHtml()}
    </Flex>
  );
}
