import { useNode } from "@craftjs/core";
import { Box, Flex, Select, Slider, Text, TextField } from "@radix-ui/themes";
import type { PropTypes } from "./index";

export function Settings(): React.JSX.Element {
  const {
    actions: { setProp },
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <Box>
      <Text>Font Size</Text>
      <Flex direction="column">
        <Slider
          defaultValue={[18]}
          onValueChange={(value) => {
            setProp((props: PropTypes) => (props.fontSize = String(value[0])));
          }}
        />
      </Flex>
      <Text>Text Color</Text>
      <TextField.Root>
        <TextField.Input
          onChange={(e) => {
            const value = e.target.value;
            setProp((props: PropTypes) => (props.textColor = value));
          }}
          placeholder="Text color"
          type="color"
        />
      </TextField.Root>
      <Text>Margin Top</Text>
      <TextField.Root>
        <TextField.Input
          onChange={(e) => {
            const value = e.target.value;
            setProp((props: PropTypes) => (props.marginTop = value));
          }}
          placeholder="Margin top"
          type="number"
        />
      </TextField.Root>
      <Text>Margin Right</Text>
      <TextField.Root>
        <TextField.Input
          onChange={(e) => {
            const value = e.target.value;
            setProp((props: PropTypes) => (props.marginRight = value));
          }}
          placeholder="Margin right"
          type="number"
        />
      </TextField.Root>
      <Text>Margin Bottom</Text>
      <TextField.Root>
        <TextField.Input
          onChange={(e) => {
            const value = e.target.value;
            setProp((props: PropTypes) => (props.marginBottom = value));
          }}
          placeholder="Margin bottom"
          type="number"
        />
      </TextField.Root>
      <Text>Margin Left</Text>
      <TextField.Root>
        <TextField.Input
          onChange={(e) => {
            const value = e.target.value;
            setProp((props: PropTypes) => (props.marginLeft = value));
          }}
          placeholder="Margin left"
          type="number"
        />
      </TextField.Root>
      <Select.Root
        defaultValue="400"
        onValueChange={(value) => {
          setProp((props: PropTypes) => (props.fontWeight = value));
        }}
      >
        <Select.Trigger />
        <Select.Content>
          <Select.Group>
            <Select.Item value="400">Default</Select.Item>
            <Select.Item value="500">Medium</Select.Item>
            <Select.Item value="600">Bold</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Box>
  );
}
