import { Layers } from "@craftjs/layers";
import { GearIcon, LayersIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import React from "react";
import { Tab } from "../../components/primitives/tabs";
import { SettingsPanel } from "../../components/settings-panel";
import { Toolbox } from "../../components/Toolbox";

const tabs = [
  {
    title: "Toolbox",
    icon: <PlusCircledIcon height="20" width="20" />,
    content: <Toolbox />,
  },
  {
    title: "Settings Panel",
    icon: <GearIcon height="20" width="20" />,
    content: <SettingsPanel />,
  },
  {
    title: "Layers Panel",
    icon: <LayersIcon height="20" width="20" />,
    content: <Layers />,
  },
];

function SidePanel({
  isSidebarVisible,
}: {
  isSidebarVisible: boolean;
}): React.JSX.Element {
  return (
    <Tab
      className={isSidebarVisible ? "opacity-100" : "opacity-0"}
      defaultValue={tabs[0].title}
      tabs={tabs}
    />
  );
}

export default SidePanel;
