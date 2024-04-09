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
    base: 'aria-[selected=true]:bg-[hsl(var(--nextui-default)/0.4)]'
  }

  return <>
    <div className="h-16 w-full" data-tauri-drag-region></div>
    <Listbox shouldHighlightOnFocus hideSelectedIcon selectionBehavior="toggle"
      selectionMode="single" disallowEmptySelection variant="flat" itemClasses={itemClasses}
      aria-label="Example with disabled actions"
    >
      {chats.map(chat => {
        return (
          <ListboxItem key={chat.id}>
            <ChatListItem {...chat} key={chat.id} />
          </ListboxItem>
        )
      })}
    </Listbox>
  </>
}

function ChatListItem(props: Chat) {
  return <>
    <div className="grid grid-cols-[40px_auto] w-full gap-2 pt-1.5 pb-1.5 pl-1 pr-1">
      <Badge content={5} color="danger" size="sm">
        <Avatar src={props.avatar} radius="sm" />
      </Badge>
      <div className="flex-1 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <span className="capitalize">{props.title}</span>
          <span className="text-tiny text-slate-500">
            {dayjs(props.lastTime).format('YYYY-MM-DD')}
          </span>
        </div>
        <span className="text-tiny text-slate-500">{props.lastMsg}</span>
      </div>
    </div>
  </>
}