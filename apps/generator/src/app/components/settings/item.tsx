/* eslint-disable @typescript-eslint/no-unsafe-return -- FIGURE IT OUT*/
/* eslint-disable @typescript-eslint/no-explicit-any -- FIGURE IT OUT*/
import { useNode } from "@craftjs/core";
import {
  Box,
  Flex,
  Grid,
  Select,
  Slider,
  Text,
  TextField,
  RadioGroup,
} from "@radix-ui/themes";
import React, { useState } from "react";
import type { SettingType, InputType } from "../../types/setting-prop-key";

export interface PropTypes {
  propKey: SettingType;
  inputType: InputType;
  label?: string;
  defaultValue?: any;
  options?: any[];
  prefix?: string;
  index?: number;
  children?: React.ReactNode;
  onChange?: (value: any) => any;
}

export function SettingItem({
  propKey,
  label,
  inputType,
  defaultValue,
  options,
}: PropTypes): React.ReactElement {
  const {
    actions: { setProp },
  } = useNode((node) => ({
    propValue: node.data.props,
  }));

  const [initialValue, setInitialValue] = useState(
    defaultValue ?? (options?.length ? options[0].value : "")
  );

  const RADIO_VIEW = (
    <RadioGroup.Root
      defaultValue={initialValue}
      onValueChange={(value) => {
        setInitialValue(value);
        setProp((props: any) => (props[propKey] = value));
      }}
    >
      <Grid columns="2" gap="2">
        {options?.map((item) => (
          <Text as="label" key={item.value} size="2">
            <Flex gap="2">
              <RadioGroup.Item value={item.value} /> {item.label}
            </Flex>
          </Text>
        ))}
      </Grid>
    </RadioGroup.Root>
  );

  const SELECT_VIEW = (
    <Box style={{ width: "100%" }}>
      <Select.Root
        defaultValue={initialValue}
        onValueChange={(value) => {
          setInitialValue(value);
          setProp((props: any) => (props[propKey] = value));
        }}
      >
        <Select.Trigger />
        <Select.Content style={{ width: "100%" }}>
          <Select.Group style={{ width: "100%" }}>
            {options?.map((item) => (
              <Select.Item key={item.value} value={item.value}>
                {item.label}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Box>
  );

  const SLIDER_VIEW = (
    <Flex className="mt-1" direction="column" style={{ height: 15 }}>
      <Slider
        defaultValue={[initialValue ?? 18]}
        onValueChange={(value) => {
          const updatedValue = String(value[0]);
          setInitialValue(updatedValue);
          setProp((props: any) => (props[propKey] = updatedValue));
        }}
        title={initialValue}
      />
    </Flex>
  );

  const NUMBER_VIEW = (
    <TextField.Root>
      <TextField.Input
        className="px-2 input-border"
        onChange={(e) => {
          const newValue = [...initialValue];
          newValue[0] = e.target.value;
          setInitialValue(newValue);
          setProp((props: any) => (props[propKey] = newValue));
        }}
        placeholder="T"
        type="number"
        value={initialValue[0]}
      />
      <TextField.Input
        className="px-2 input-border"
        onChange={(e) => {
          const newValue = [...initialValue];
          newValue[1] = e.target.value;
          setInitialValue(newValue);
          setProp((props: any) => (props[propKey] = newValue));
        }}
        placeholder="L"
        type="number"
        value={initialValue[1]}
      />
      <TextField.Input
        className="px-2 input-border"
        onChange={(e) => {
          const newValue = [...initialValue];
          newValue[2] = e.target.value;
          setInitialValue(newValue);
          setProp((props: any) => (props[propKey] = newValue));
        }}
        placeholder="B"
        type="number"
        value={initialValue[2]}
      />
      <TextField.Input
        className="px-2 input-border"
        onChange={(e) => {
          const newValue = [...initialValue];
          newValue[3] = e.target.value;
          setInitialValue(newValue);
          setProp((props: any) => (props[propKey] = newValue));
        }}
        placeholder="R"
        type="number"
        value={initialValue[3]}
      />
    </TextField.Root>
  );

  const COLOR_VIEW = (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Text>{label}</Text>
      <TextField.Root>
        <TextField.Input
          className="color-picker"
          onChange={(e) => {
            const value = e.target.value;
            setInitialValue(value);
            setProp((props: any) => (props[propKey] = value));
          }}
          radius="none"
          size="1"
          style={{ width: 20 }}
          type="color"
          value={initialValue ?? ""}
        />
      </TextField.Root>
    </div>
  );

  const TEXT_VIEW = (
    <TextField.Root>
      <TextField.Input
        onChange={(e) => {
          const value = e.target.value;
          setInitialValue(value);
          setProp((props: any) => (props[propKey] = value));
        }}
        placeholder={label ?? ""}
        type={inputType}
        value={initialValue ?? ""}
      />
    </TextField.Root>
  );

  const VIEW_MAPPERS: { [k in typeof inputType]: React.JSX.Element } = {
    radio: RADIO_VIEW,
    select: SELECT_VIEW,
    slider: SLIDER_VIEW,
    numbers: NUMBER_VIEW,
    color: COLOR_VIEW,
    text: TEXT_VIEW,
    number: TEXT_VIEW,
  };

  return (
    <Box className="mb-3">
      <Text>{label}</Text>
      {VIEW_MAPPERS[inputType]}
    </Box>
  );
}
