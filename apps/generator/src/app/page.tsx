"use client";

import { Editor } from "@craftjs/core";
import { Box, Button as RadixButton, Flex } from "@radix-ui/themes";
import { useRef, useState } from "react";
import { Button, Container, ResizableContainer, Text } from "./components/user";
import {
  FourColumns,
  OneHalfColumns,
  OneHalfInverseColumns,
  SingleColumn,
  ThreeColumns,
  TwoColumns,
} from "./components/user/columns";
import CanvasRegion from "./editor/canvas-region";
import { Header } from "./editor/header";
import { RenderNode } from "./editor/render-node";
import SidePanel from "./editor/SidePanel";
import { SidePanelToggler } from "./editor/SidePanel/side-panel-toggler";

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
      <div
        dangerouslySetInnerHTML={{
          __html: `<div class="m-auto flex component-selected" style="position: relative; user-select: auto; justify-content: flex-start; flex-direction: column; align-items: flex-start; background: rgb(255, 255, 255); color: rgb(0, 0, 0); padding: 40px; margin: 0px; box-shadow: none; border-radius: 0px; flex-grow: unset; flex-shrink: 0; flex-basis: unset; width: auto; height: 100%; box-sizing: border-box;"><h2 contenteditable="true" class="">Simple Text</h2><button data-accent-color="[object Object]" background="[object Object]" buttonstyle="full" margin="5,0,5,0" textcomponent="[object Object]" class="rt-reset rt-BaseButton rt-Button rt-r-size-2 rt-variant-solid" draggable="true" style="max-width: max-content;"><h2 contenteditable="true">Dragged Button</h2></button><div class="rt-Flex w-full min-h-10 border flex flex-row p-4 gap-4 rt-r-display-flex rt-r-fd-column rt-r-jc-start" draggable="true"><div class="rt-Flex w-full min-h-10 border p-2 rt-r-display-flex rt-r-fd-row rt-r-jc-start rt-r-gap-4" draggable="true"><div class="rt-Box w-2/3"><div class="rt-Flex w-full min-h-10 border rt-r-display-flex rt-r-fd-column rt-r-jc-start"></div></div><div class="rt-Box w-1/3"><div class="rt-Flex w-full min-h-10 border rt-r-display-flex rt-r-fd-column rt-r-jc-start"></div></div></div></div><div class="sc-beySPh hULLPS"><span></span><span></span><span></span><span></span></div><div><div class="" style="position: absolute; user-select: none; width: 100%; height: 10px; top: -5px; left: 0px; cursor: row-resize;"></div><div class="" style="position: absolute; user-select: none; width: 10px; height: 100%; top: 0px; left: -5px; cursor: col-resize;"></div><div class="" style="position: absolute; user-select: none; width: 100%; height: 10px; left: 0px; cursor: row-resize; bottom: -5px;"></div><div class="" style="position: absolute; user-select: none; width: 10px; height: 100%; top: 0px; cursor: col-resize; right: -5px;"></div><div class="" style="position: absolute; user-select: none; width: 20px; height: 20px; left: -10px; top: -10px; cursor: nw-resize;"></div><div class="" style="position: absolute; user-select: none; width: 20px; height: 20px; right: -10px; top: -10px; cursor: ne-resize;"></div><div class="" style="position: absolute; user-select: none; width: 20px; height: 20px; left: -10px; bottom: -10px; cursor: sw-resize;"></div><div class="" style="position: absolute; user-select: none; width: 20px; height: 20px; right: -10px; bottom: -10px; cursor: se-resize;"></div></div></div>`,
        }}
      />
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
