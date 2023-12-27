'use client'
import React from "react";
import { ListboxWrapper } from "./ListboxWtapper";
import { Avatar, Listbox, ListboxItem } from "@nextui-org/react";

function ChatList() {
  return <>
    <ListboxWrapper>
      <Listbox variant="flat" aria-label="Listbox menu with descriptions">
        <ListboxItem key="new">
          <div className="flex gap-2 items-center">
            <Avatar alt={'item.name'} className="flex-shrink-0" size="md" src={'/avatar.jpg'} />
            <div className="flex flex-col space-y-1 flex-grow overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-small text-ellipsis overflow-hidden flex-grou">Clover</span>
                <span className="text-[10px] text-default-400 flex-shrink-0">2023/12/19</span>
              </div>
              <span className="text-tiny text-default-400">InkTrail</span>
            </div>
          </div>
        </ListboxItem>

        <ListboxItem key="new">
          <div className="flex gap-2 items-center">
            <Avatar alt={'item.name'} className="flex-shrink-0" size="md" src={'/avatar.jpg'} />
            <div className="flex flex-col space-y-1 flex-grow overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-small text-ellipsis overflow-hidden flex-grou">Clover</span>
                <span className="text-[10px] text-default-400 flex-shrink-0">2023/12/19</span>
              </div>
              <span className="text-tiny text-default-400">InkTrail</span>
            </div>
          </div>
        </ListboxItem>
      </Listbox>
    </ListboxWrapper>
  </>
}

export default React.memo(ChatList)