"use client"

import {
  Avatar,
  Button
} from '@nextui-org/react'
import React from 'react'

enum Followed {
  Added,
  Pending,
  None
}

interface QueryUserResult {
  followed: Followed
  name: string
  avatar: string
  id: number
}

export default function QueryUsersPage() {
  const [dataSources, setDataSources] = React.useState<QueryUserResult[]>([
    { id: 1, followed: Followed.Added, name: 'John Doe', avatar: 'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover' },
    { id: 2, followed: Followed.None, name: 'Clover You', avatar: '/avatar.jpg' },
    { id: 3, followed: Followed.Pending, name: 'Jane Smith', avatar: 'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/d1640db1-a100-472c-9c9e-4de5b45f2000/width=1024,height=1024,fit=cover' },
    { id: 4, followed: Followed.Added, name: 'Alice Johnson', avatar: 'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover' },
  ])

  function onPress(index: number) {
    dataSources[index].followed = Followed.Pending
    setDataSources([...dataSources])
  }

  const listItems = dataSources.map((item, index) =>
    <UserItem avatar={item.avatar} followed={item.followed} id={item.id} name={item.name}
      key={item.id + ""} onPress={() => onPress(index)} />
  )

  return <>
    <div className="p-2">
      {listItems}
    </div>
  </>
}

type UserItemProps = QueryUserResult & {
  onPress: () => void
}

function UserItem(props: UserItemProps) {

  const SendMsgBtn = <Button color="primary" radius="full" size="sm" variant="solid">Send Msg</Button>

  return <>
    <div className="justify-between flex mb-4">
      <div className="flex gap-5">
        <Avatar isBordered radius="full" size="md" src={props.avatar} />
        <div className="flex flex-col gap-1 items-start justify-center">
          <h4 className="text-small font-semibold leading-none text-default-600">
            {props.name}
          </h4>
          <h5 className="text-small tracking-tight text-default-400">@cloveryou</h5>
        </div>
      </div>
      {props.followed === Followed.Added ? SendMsgBtn :
        <Button
          className={props.followed === Followed.Pending ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={props.followed === Followed.Pending ? "bordered" : "solid"}
          onPress={props.onPress}
        >
          {props.followed === Followed.Pending ? "Pending" : "Add"}
        </Button>
      }
    </div>
  </>
}