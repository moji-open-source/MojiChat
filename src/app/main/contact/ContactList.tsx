
'use client'
import { Accordion, Listbox, ListboxItem, Avatar, AccordionItem } from "@nextui-org/react";

function ListItem() {
  const nodes = []

  for (let i = 0; i < 10; i++) {
    const node = <ListboxItem key={i + 1} startContent={
      <Avatar src="/avatar.jpg" radius="sm" />
    }>
      <div className="flex flex-col gap-1.5 pt-1 pb-1">
        <span className="text-small text-ellipsis overflow-hidden">Clover (尤)</span>
        <div className="text-tiny text-default-400 overflow-hidden text-ellipsis">
          <span>看这个世界 充满太多嘲讽,想要这个梦想 应该怎么形容</span>
        </div>
      </div>
    </ListboxItem>

    nodes.push(node)
  }
  return nodes
}

export default function ContactList() {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-10 flex items-center",
    indicator: "text-medium",
  }

  return (
    <Accordion showDivider={false} itemClasses={itemClasses}
      className="p-2 flex flex-col gap-1 w-[300px] bg-none" fullWidth
    >
      <AccordionItem key="1" aria-label="Connected devices"
        title={
          <div className="flex justify-between items-center">
            <span className="text-small text-ellipsis overflow-hidden flex-grou">认识</span>
            <span className="text-tiny text-default-400 flex-shrink">3/6</span>
          </div>
        }
      >
        <Listbox>
          {ListItem()}
        </Listbox>
      </AccordionItem>
    </Accordion>
  )
}
