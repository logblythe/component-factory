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
      <SettingItem
        inputType="number"
        label="Border Radius"
        propKey="borderRadius"
      />
      <SettingItem
        inputType="number"
        label="Line Height"
        propKey="lineHeight"
      />
      <SettingItem inputType="color" label="Text color" propKey="textColor" />
      <SettingItem
        inputType="color"
        label="Background Color"
        propKey="backgroundColor"
      />
      <SettingItem
        inputType="color"
        label="Border Color"
        propKey="borderColor"
      />
      <SettingItem
        defaultValue={["0", "10", "0", "10"]}
        inputType="numbers"
        label="Padding"
        propKey="padding"
      />
      <SettingItem
        defaultValue={["5", "0", "5", "0"]}
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
