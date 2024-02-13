import { Box } from "@radix-ui/themes";
import { SettingItem } from "../../settings/item";

export function Settings(): React.ReactElement {
  return (
    <Box>
      <SettingItem
        defaultValue={16}
        inputType="slider"
        label="Font Size"
        propKey="fontSize"
      />
      <SettingItem inputType="color" label="Text Color" propKey="textColor" />
      <SettingItem
        defaultValue={["0", "0", "0", "0"]}
        inputType="numbers"
        label="Padding"
        propKey="padding"
      />
      <SettingItem
        defaultValue={["0", "0", "0", "0"]}
        inputType="numbers"
        label="Margin"
        propKey="margin"
      />
      <SettingItem
        defaultValue={400}
        inputType="radio"
        label="Font Weight"
        options={[
          { value: 400, label: "Default" },
          { value: 500, label: "Medium" },
          { value: 600, label: "Bold" },
        ]}
        propKey="fontWeight"
      />
    </Box>
  );
}
