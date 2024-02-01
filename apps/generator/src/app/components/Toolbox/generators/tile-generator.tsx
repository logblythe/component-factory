import { useEditor } from "@craftjs/core";
import { Box, Flex } from "@radix-ui/themes";
import cx from "classnames";
import isEqual from "lodash/isEqual";
import type { ReactElement } from "react";
import React from "react";
import {
  FourColumns,
  OneHalfColumns,
  OneHalfInverseColumns,
  SingleColumn,
  ThreeColumns,
  TwoColumns,
} from "../../user/columns";

const ONE_HALF_RATIO = ["1/3", "2/3"] as const;
const ONE_HALF_INVERSE_RATIO = ["2/3", "1/3"] as const;

interface TileGeneratorProps {
  columns: number;
  columnWidths?: typeof ONE_HALF_RATIO | typeof ONE_HALF_INVERSE_RATIO;
}

export function TileGenerator({
  columns,
  columnWidths,
}: TileGeneratorProps): React.JSX.Element {
  const getTwoColumns = (): React.JSX.Element => {
    if (isEqual(columnWidths, ONE_HALF_RATIO)) {
      return <OneHalfColumns />;
    }
    if (isEqual(columnWidths, ONE_HALF_INVERSE_RATIO)) {
      return <OneHalfInverseColumns />;
    }
    return <TwoColumns />;
  };

  const columnsRecord: Record<number, ReactElement> = {
    1: <SingleColumn />,
    2: getTwoColumns(),
    3: <ThreeColumns />,
    4: <FourColumns />,
  };

  const {
    connectors: { create },
  } = useEditor();

  return (
    <Flex
      gap="2"
      ref={(ref) => create(ref as HTMLElement, columnsRecord[columns])}
    >
      {Array.from({ length: columns }, (_, index) => {
        return (
          <Box
            className={cx("text-center bg-[#F2F2F2] rounded-sm py-2", {
              "w-full": !columnWidths,
              "w-1/3": isEqual(columnWidths, ONE_HALF_RATIO)
                ? index === 0
                : index === 1,
              "w-2/3": isEqual(columnWidths, ONE_HALF_RATIO)
                ? index === 1
                : index === 0,
            })}
            key={index}
          >
            {columnWidths ? `${columnWidths[index]}-col` : `${columns}-col`}
          </Box>
        );
      })}
    </Flex>
  );
}
