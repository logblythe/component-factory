import { useNode } from "@craftjs/core";
import { Box, Flex, Grid, RadioGroup, Text } from "@radix-ui/themes";
import type { ContainerProps } from ".";

export function Settings(): React.JSX.Element {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <Flex direction="column" gap="4">
      <Box>
        <Text>Flex-Direction</Text>
        <RadioGroup.Root
          defaultValue={props.flexDirection}
          onValueChange={(flexDirection) => {
            setProp(
              (containerProps: ContainerProps) =>
                (containerProps.flexDirection = flexDirection)
            );
          }}
        >
          <Grid columns="2" gap="2">
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="row" /> row
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="column" /> column
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="row-reverse" /> row-reverse
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="column-reverse" /> column-reverse
              </Flex>
            </Text>
          </Grid>
        </RadioGroup.Root>
      </Box>

      <Box>
        <Text>Align-items</Text>
        <RadioGroup.Root
          defaultValue={props.alignItems}
          onValueChange={(alignItems) => {
            setProp(
              (containerProps: ContainerProps) =>
                (containerProps.alignItems = alignItems)
            );
          }}
        >
          <Grid columns="2" gap="2">
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="flex-start" /> flex-start
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="flex-end" /> flex-end
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="center" /> center
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="stretch" /> stretch
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="baseline" /> baseline
              </Flex>
            </Text>
          </Grid>
        </RadioGroup.Root>
      </Box>

      <Box>
        <Text>Justify-Content</Text>
        <RadioGroup.Root
          defaultValue={props.justifyContent}
          onValueChange={(justifyContent) => {
            setProp(
              (containerProps: ContainerProps) =>
                (containerProps.justifyContent = justifyContent)
            );
          }}
        >
          <Grid columns="2" gap="2">
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="flex-start" /> flex-start
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="flex-end" /> flex-end
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="center" /> center
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="space-between" /> space-between
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="space-around" /> space-around
              </Flex>
            </Text>
            <Text as="label" size="2">
              <Flex gap="2">
                <RadioGroup.Item value="space-evenly" /> space-evenly
              </Flex>
            </Text>
          </Grid>
        </RadioGroup.Root>
      </Box>
    </Flex>
  );
}
