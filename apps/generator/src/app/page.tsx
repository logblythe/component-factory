"use client";

import { Editor } from "@craftjs/core";
import { Box, Button as RadixButton, Flex } from "@radix-ui/themes";
import { useRef, useState } from "react";
import { Button, ResizableContainer, Text } from "./components/user";
import {
  FourColumns,
  OneHalfColumns,
  OneHalfInverseColumns,
  SingleColumn,
  ThreeColumns,
  TwoColumns,
} from "./components/user/columns";
import CanvasRegion from "./editor/canvas-region";
import { RenderNode } from "./editor/render-node";
import SidePanel from "./editor/SidePanel";
import { SidePanelToggler } from "./editor/SidePanel/side-panel-toggler";
import { Container } from "./components/user/static-container";
import { Header } from "./editor/static-header";

export default function Page(): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);

  const [state, setState] = useState({
    isSidebarVisible: true,
    isEditingEnabled: true,
  });

  const { isSidebarVisible, isEditingEnabled } = state;

  const handleSaveHtml = (): void => {
    const html = ref.current?.innerHTML ?? "";
    const encoded = localStorage.getItem("html") ?? "";
    const decoded = encoded ? JSON.parse(encoded) : {};
    const { components = [] } = decoded;
    const newComponents = [...components, html];
    const newDecoded = { components: newComponents };
    localStorage.setItem("html", JSON.stringify(newDecoded));
  };

  return (
    <main className="min-h-screen page-container">
      <Editor
        onRender={RenderNode}
        resolver={{
          Button,
          Text,
          ResizableContainer,
          SingleColumn,
          TwoColumns,
          ThreeColumns,
          FourColumns,
          OneHalfColumns,
          OneHalfInverseColumns,
          Container,
          Box,
        }}
      >
        <Flex className="min-h-screen p-0 bg-white">
          <Flex
            className={`pt-1 transition-width duration-300 ease-out space-y-2 ${
              isSidebarVisible ? "w-[300px]" : "w-8"
            }`}
            direction="column"
          >
            <SidePanelToggler setState={setState} state={state} />
            <SidePanel isSidebarVisible={isSidebarVisible} />
          </Flex>

          <Box className="bg-[#F2F2F2] w-full px-12">
            <Header
              isEditingEnabled={isEditingEnabled}
              onEnableEditingChange={(editingEnabled) => {
                setState({
                  isSidebarVisible: editingEnabled,
                  isEditingEnabled: editingEnabled,
                });
              }}
              renderSaveHtml={() => {
                return (
                  <RadixButton
                    className="border rounded-full p-2"
                    onClick={handleSaveHtml}
                  >
                    Save as html
                  </RadixButton>
                );
              }}
            />
            <CanvasRegion ref={ref} />
          </Box>
        </Flex>
      </Editor>
    </main>
  );
}
