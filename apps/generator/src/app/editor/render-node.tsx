import { useEditor, useNode } from "@craftjs/core";
import { ROOT_NODE } from "@craftjs/utils";
import { ArrowUpIcon, MinusCircledIcon, MoveIcon } from "@radix-ui/react-icons";
import React, { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Styled from "styled-components";

const IndicatorDiv = Styled.div`
  height: 30px;
  margin-top: -29px;
  font-size: 12px;
  line-height: 12px;

  svg {
    fill: #fff;
    width: 15px;
    height: 15px;
  }
`;

const AnchorButton = Styled.a`
  padding: 0 0px;
  opacity: 0.9;
  display: flex;
  align-items: center;
  > div {
    position: relative;
    top: -50%;
    left: -50%;
  }
`;

export function RenderNode({
  render,
}: {
  render: React.ReactElement;
}): React.JSX.Element {
  const { id } = useNode();
  const { actions, query, isActive } = useEditor((_, _query) => ({
    isActive: _query.getEvent("selected").contains(id),
  }));

  const {
    isHover,
    dom,
    name,
    moveable,
    deletable,
    connectors: { drag },
    parent,
  } = useNode((node) => ({
    isHover: node.events.hovered,
    dom: node.dom,
    name: node.data.custom.displayName || node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
    props: node.data.props,
  }));

  const currentRef = useRef<HTMLDivElement | null>(null);

  const isRootNode = id === "ROOT";

  useEffect(() => {
    if (dom) {
      if (isActive || isHover) {
        dom.classList.add("component-selected");
      } else {
        dom.classList.remove("component-selected");
      }
    }
  }, [dom, isActive, isHover]);

  const getPos = useCallback((htmlElement?: HTMLElement) => {
    const { top, left, bottom } = htmlElement
      ? htmlElement.getBoundingClientRect()
      : { top: 0, left: 0, bottom: 0 };
    return {
      top: `${top > 0 ? top : bottom}px`,
      left: `${left}px`,
    };
  }, []);

  const scroll = useCallback(() => {
    const { current: currentDOM } = currentRef;

    if (!currentDOM) return;
    if (!dom) return;
    const { top, left } = getPos(dom);
    currentDOM.style.top = top;
    currentDOM.style.left = left;
  }, [dom, getPos]);

  useEffect(() => {
    document
      .querySelector(".craftjs-renderer")
      ?.addEventListener("scroll", scroll);

    return () => {
      document
        .querySelector(".craftjs-renderer")
        ?.removeEventListener("scroll", scroll);
    };
  }, [scroll]);

  if (isRootNode) {
    return render;
  }

  return (
    <>
      {isHover || isActive
        ? createPortal(
            <IndicatorDiv
              className="px-2 py-2 text-white bg-blue-400 fixed flex items-center"
              ref={currentRef}
              style={{
                left: dom ? getPos(dom).left : undefined,
                top: dom ? getPos(dom).top : undefined,
                zIndex: 9999,
              }}
            >
              <h2 className="flex-1 mr-4">{name}</h2>
              {moveable ? (
                <AnchorButton
                  className="mr-2 cursor-move"
                  ref={drag as React.LegacyRef<HTMLAnchorElement>}
                >
                  <MoveIcon />
                </AnchorButton>
              ) : null}
              {id !== ROOT_NODE && (
                <AnchorButton
                  className="mr-2 cursor-pointer"
                  onClick={() => {
                    parent && actions.selectNode(parent);
                  }}
                >
                  <ArrowUpIcon />
                </AnchorButton>
              )}
              {deletable ? (
                <AnchorButton
                  className="cursor-pointer"
                  onMouseDown={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    actions.delete(id);
                  }}
                >
                  <MinusCircledIcon />
                </AnchorButton>
              ) : null}
            </IndicatorDiv>,
            document.querySelector(".page-container") ??
              document.createDocumentFragment()
          )
        : null}
      {render}
    </>
  );
}
