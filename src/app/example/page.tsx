'use client'
import { ChatList } from "@/components/list/chat";
import {
  Listbox,
  ListboxSection,
  ListboxItem
} from "@nextui-org/react";
import { useRef, useState } from "react";

export default function ExamplePage() {
  const ref = useRef<HTMLDivElement>(null);

  return <>
    <ChatList />
  </>
}