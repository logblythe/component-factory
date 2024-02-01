import { Flex, Grid } from "@radix-ui/themes";
import {
  ButtonGenerator,
  ContainerGenerator,
  TextGenerator,
  TileGenerator,
} from "./generators";

export const ACCORDION_ITEMS = [
  {
    title: "Tiles",
    value: "Tiles",
    content: (
      <Flex direction="column" gap="4">
        <TileGenerator columns={1} />
        <TileGenerator columns={2} />
        <TileGenerator columns={3} />
        <TileGenerator columns={4} />
        <TileGenerator columnWidths={["1/3", "2/3"]} columns={2} />
        <TileGenerator columnWidths={["2/3", "1/3"]} columns={2} />
      </Flex>
    ),
  },
  {
    title: "Elements",
    value: "Elements",
    content: (
      <Grid gap="4">
        {/* <ResizableContainerGenerator /> */}
        <ButtonGenerator />
        <TextGenerator />
        <ContainerGenerator />
      </Grid>
    ),
  },
];
