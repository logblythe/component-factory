import * as Tabs from "@radix-ui/react-tabs";
import { HoverCard } from "@radix-ui/themes";
import cx from "classnames";
import React from "react";
import type { TabContent } from "./types";

interface TabProps {
  tabs: TabContent;
  defaultValue: string;
  className: string;
}

export function Tab({
  tabs,
  defaultValue,
  className,
}: TabProps): React.JSX.Element {
  return (
    <Tabs.Root
      className={cx(
        "flex flex-col w-[300px] shadow-[0_2px_10px] shadow-blackA2",
        className
      )}
      defaultValue={defaultValue}
    >
      <Tabs.List
        aria-label="Manage your account"
        className="shrink-0 flex border-b border-mauve6"
      >
        {tabs.map(({ title, icon }) => {
          return (
            <Tabs.Trigger
              className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
              key={title}
              value={title}
            >
              {icon ? (
                <HoverCard.Root>
                  <HoverCard.Trigger>{icon}</HoverCard.Trigger>
                  <HoverCard.Content size="1">{title}</HoverCard.Content>
                </HoverCard.Root>
              ) : (
                title
              )}
            </Tabs.Trigger>
          );
        })}
      </Tabs.List>
      {tabs.map(({ title, content }) => {
        return (
          <Tabs.Content
            className="grow bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
            key={title}
            value={title}
          >
            {content}
          </Tabs.Content>
        );
      })}
    </Tabs.Root>
  );
}
