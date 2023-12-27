import { Avatar, Card, CardBody } from '@nextui-org/react'

const dataList = [{
  'avatar': 'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/d1640db1-a100-472c-9c9e-4de5b45f2000/width=1024,height=1024,fit=cover',
  'name': 'Alice',
  'time': '2023-12-27 10:03:12',
  'content': 'Can anyone help me with this issue?'
},
{
  'avatar': 'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover',
  'name': 'Charlie',
  'time': '2023-12-27 09:44:12',
  'content': "I'll take care of it."
},
{
  'avatar': 'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/f9fb774e-f31a-460f-96c1-19e5c605ef00/width=1024,height=1024,fit=cover',
  'name': 'Charlie',
  'time': '2023-12-27 09:37:12',
  'content': "That's a great idea!"
},
{
  'avatar': 'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/1c50def6-f007-466f-1c3c-dfb66fbee700/width=1024,height=1024,fit=cover',
  'name': 'Bob',
  'time': '2023-12-27 09:15:12',
  'content': "Let's schedule a meeting."
},
{
  'avatar': 'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/4ac4f1db-2459-4d31-85f2-8be024f73400/width=1024,height=1024,fit=cover',
  'name': 'Eve',
  'time': '2023-12-27 08:18:12',
  'content': "That's a great idea!"
}, {
  'avatar': '/avatar.jpg',
  'name': 'Clover',
  'time': '2023-12-27 08:20:32',
  'content': "No!🙅",
  'isMe': true
}]

export function ChatRoom() {
  const isMe = true
  return <>
    <div className="border-red-600 border-solid border-1">
      <div className="h-14 flex items-center p-2 border-red-600 border-solid border-1">
        Title
      </div>

      <div className="w-full">
        {
          dataList.map((it, index) => {
            return <div className={`chat-item ${it.isMe ? 'is-me' : ''}`} key={index}>
              <div className="avatar">
                <Avatar src={it.avatar} />
              </div>

              <div className="chat-item-box">
                <div className="chat-item-user-info">
                  <span>{it.name}</span>
                  <span className="text-gray-500">{it.time}</span>
                </div>

                <div className="relative w-fit">
                  <div className="chat-item-read-count" draggable>
                    {it.content}
                  </div>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  </>
}