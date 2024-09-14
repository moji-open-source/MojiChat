'use client'

import React from 'react'
import * as ResizablePanelsPrimitive from 'react-resizable-panels'

export function ResizableHandle() {
  return <ResizablePanelsPrimitive.PanelResizeHandle className="w-[1px] border-border" />
}

type Direction = 'horizontal' | 'vertical'

interface ResizablePanelGroupProps {
  children?: React.ReactNode[]
  direction: Direction
}

export function ResizablePanelGroup({ children, direction }: ResizablePanelGroupProps) {
  return (
    <ResizablePanelsPrimitive.PanelGroup direction={direction}>
      {children}
    </ResizablePanelsPrimitive.PanelGroup>
  )
}

interface ResizablePanelProps extends React.PropsWithChildren {
  defaultSize?: number | undefined;
  maxSize?: number | undefined;
  minSize?: number | undefined;
}
export function ResizablePanel({ children, defaultSize, maxSize, minSize }: ResizablePanelProps) {
  return (
    <ResizablePanelsPrimitive.Panel defaultSize={defaultSize} maxSize={maxSize} minSize={minSize}>
      {children}
    </ResizablePanelsPrimitive.Panel>
  )
}
