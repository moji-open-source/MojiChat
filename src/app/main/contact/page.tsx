"use client"

import { Listbox, ListboxItem, User } from "@nextui-org/react";
import React from "react";

export default function Page() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set<string | number>());

  const items = [] as number[];
  for (let i = 0; i < 100; i++) {
    items.push(i)
  }

  return <>
    <div className="w-full h-screen diable-select-text">
      <div className="w-[320px] h-full border-r-[var(--border-color)] border-r-solid border-r-1 overflow-y-auto">
        <Listbox shouldHighlightOnFocus hideSelectedIcon selectionBehavior="toggle"
          aria-label="contact list"
          variant="flat"
          selectionMode="single"
          disallowEmptySelection
          itemClasses={{
            base: "aria-[selected=true]:bg-[hsl(var(--nextui-default)/0.4)]"
          }}
          selectedKeys={selectedKeys}
          onSelectionChange={(keys) => {
            if (keys instanceof Set) {
              setSelectedKeys(keys)
            }
          }}
        >
          {items.map(id => {
            return <ListboxItem key={id} textValue=" ">
              <User
                name="Clover You"
                description="Product Designer"
                avatarProps={{
                  src: "/avatar.jpg"
                }} />
            </ListboxItem>
          })}
        </Listbox>
      </div>
    </div>
  </>
}
