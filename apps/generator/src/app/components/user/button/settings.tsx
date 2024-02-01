import { useNode } from "@craftjs/core";
import { Box, Flex, Select, Slider, Text, TextField } from "@radix-ui/themes";
import type { PropTypes } from "./index";

export function Settings(): JSX.Element {
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
      <Text>Border Radius</Text>
      <TextField.Root>
        <TextField.Input
          onChange={(e) => {
            const value = e.target.value;
            setProp((props: PropTypes) => (props.borderRadius = value));
          }}
          placeholder="Border radius"
          type="number"
        />
      </TextField.Root>
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

      <Text>Background Color</Text>
      <TextField.Root>
        <TextField.Input
          onChange={(e) => {
            const value = e.target.value;
            setProp((props: PropTypes) => (props.backgroundColor = value));
          }}
          placeholder="Background color"
          type="color"
        />
      </TextField.Root>
      <Text>Border Color</Text>
      <TextField.Root>
        <TextField.Input
          onChange={(e) => {
            const value = e.target.value;
            setProp((props: PropTypes) => (props.borderColor = value));
          }}
          placeholder="Border color"
          type="color"
        />
      </TextField.Root>
      <Text>Padding x-axis</Text>
      <TextField.Root>
        <TextField.Input
          onChange={(e) => {
            const value = e.target.value;
            setProp((props: PropTypes) => (props.paddingX = value));
          }}
          placeholder="Padding top"
          type="number"
        />
      </TextField.Root>
      <Text>Padding y-axis</Text>
      <TextField.Root>
        <TextField.Input
          onChange={(e) => {
            const value = e.target.value;
            setProp((props: PropTypes) => (props.paddingY = value));
          }}
          placeholder="Padding right"
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
