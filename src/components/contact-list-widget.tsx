"use client"
import { Listbox, ListboxItem, User } from "@nextui-org/react";
import React from "react";

export function ContactListWidget() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set<string | number>());

  const items = [] as number[];

  for (let i = 0; i < 100; i++)
    items.push(i)

  return <Listbox shouldHighlightOnFocus hideSelectedIcon selectionBehavior="toggle"
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
}

