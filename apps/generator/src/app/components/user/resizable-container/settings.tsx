import { Box, Flex } from "@radix-ui/themes";
import { SettingItem } from "../../settings/item";

export function Settings(): React.ReactElement {
  return (
    <Flex direction="column" gap="4">
      <Box>
        <SettingItem
          defaultValue="row"
          inputType="radio"
          label="Flex-Direction"
          options={[
            { value: "row", label: "row" },
            { value: "column", label: "column" },
            { value: "row-reverse", label: "row-reverse" },
            { value: "column-reverse", label: "column-reverse" },
          ]}
          propKey="flexDirection"
        />

        <SettingItem
          inputType="radio"
          label="Align-items"
          options={[
            { value: "flex-start", label: "flex-start" },
            { value: "flex-end", label: "flex-end" },
            { value: "center", label: "center" },
            { value: "stretch", label: "stretch" },
            { value: "baseline", label: "baseline" },
          ]}
          propKey="alignItems"
        />

        <SettingItem
          inputType="radio"
          label="Justify-Content"
          options={[
            { value: "flex-start", label: "flex-start" },
            { value: "flex-end", label: "flex-end" },
            { value: "center", label: "center" },
            { value: "space-between", label: "space-between" },
            { value: "space-around", label: "space-around" },
            { value: "space-evenly", label: "space-evenly" },
            { value: "baseline", label: "baseline" },
          ]}
          propKey="justifyContent"
        />
      </Box>
    </Flex>
  );
}
