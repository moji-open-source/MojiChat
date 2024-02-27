'use client'

import { Chat } from "@/store/chat";
import { useChatStore } from "@/store/hooks";
import {
  Listbox,
  ListboxItem,
  Avatar,
  Badge
} from "@nextui-org/react";
import dayjs from "dayjs";

export function ChatList() {
  const { chats } = useChatStore()
  const itemClasses = {
    base: 'list-item-selected'
  }

  return <>
    <Listbox shouldHighlightOnFocus hideSelectedIcon selectionBehavior="toggle"
      selectionMode="single" disallowEmptySelection variant="flat" itemClasses={itemClasses}
      aria-label="Example with disabled actions"
    >
      {chats.map((chat, index) => {
        return (
          <ListboxItem key={chat.id}>
            <ChatListItem {...chat} key={chat.id} />
          </ListboxItem>
        )
      })}
    </Listbox >
  </>
}

function ChatListItem(props: Chat) {
  return <>
    <div className="flex w-full gap-2 pt-1.5 pb-1.5 pl-1 pr-1">
      <div className="avatar">
        <Badge content={5} color="danger" size="sm">
          <Avatar src={props.avatar} radius="sm" />
        </Badge>
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <span className="capitalize">{props.title}</span>
          <span className="text-tiny text-slate-500">{dayjs(props.lastTime).format('YYYY-MM-DD')}</span>
        </div>
        <span className="text-tiny text-slate-500">{props.lastMsg}</span>
      </div>
    </div>
  </>
}