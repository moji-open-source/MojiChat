import { Avatar, Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react'

const dataList = [
  {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/d1640db1-a100-472c-9c9e-4de5b45f2000/width=1024,height=1024,fit=cover",
    "name": "Alice",
    "time": "2023-12-28 03:45:02",
    "content": "I'm planning a trip next month, any suggestions?",
    "isMe": false
  },
  {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/d1640db1-a100-472c-9c9e-4de5b45f2000/width=1024,height=1024,fit=cover",
    "name": "Alice",
    "time": "2023-12-28 03:45:02",
    "content": "Who's up for a game night this Friday?",
    "isMe": false
  }
  , {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover",
    "name": "Charlit",
    "time": "2023-12-28 03:45:02",
    "content": "Hey everyone, how's it going?",
    "isMe": false
  }
  ,
  {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/d1640db1-a100-472c-9c9e-4de5b45f2000/width=1024,height=1024,fit=cover",
    "name": "Alice",
    "time": "2023-12-28 03:45:02",
    "content": "Does anyone want to meet up for coffee?",
    "isMe": false
  }

  , {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/4ac4f1db-2459-4d31-85f2-8be024f73400/width=1024,height=1024,fit=cover",
    "name": "Eve",
    "time": "2023-12-28 03:45:02",
    "content": "I just got a new job offer!",
    "isMe": false
  }
  ,
  {
    "avatar": "/avatar.jpg",
    "name": "Clover",
    "time": "2023-12-28 03:45:02",
    "content": "I need some advice on a project I'm working on.",
    "isMe": true
  }
  ,
  {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/4ac4f1db-2459-4d31-85f2-8be024f73400/width=1024,height=1024,fit=cover",
    "name": "Eve",
    "time": "2023-12-28 03:45:02",
    "content": "Has anyone been to the new restaurant downtown?",
    "isMe": false
  }
  ,
  {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover",
    "name": "Charlit",
    "time": "2023-12-28 03:45:02",
    "content": "Just finished a great book, highly recommend it!",
    "isMe": false
  }
  ,
  {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/1c50def6-f007-466f-1c3c-dfb66fbee700/width=1024,height=1024,fit=cover",
    "name": "Bob",
    "time": "2023-12-28 03:45:02",
    "content": "Who's up for a game night this Friday?",
    "isMe": false
  }
  ,
  {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/d1640db1-a100-472c-9c9e-4de5b45f2000/width=1024,height=1024,fit=cover",
    "name": "Alice",
    "time": "2023-12-28 03:45:02",
    "content": "I can't believe it's already the weekend!",
    "isMe": false
  }
  ,

  {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover",
    "name": "Charlit",
    "time": "2023-12-28 03:45:02",
    "content": "I can't believe it's already the weekend!",
    "isMe": false
  }
  ,
  {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/4ac4f1db-2459-4d31-85f2-8be024f73400/width=1024,height=1024,fit=cover",
    "name": "Eve",
    "time": "2023-12-28 03:45:02",
    "content": "Did anyone see the latest movie release?",
    "isMe": false
  }
  ,
  {
    "avatar": "/avatar.jpg",
    "name": "Clover",
    "time": "2023-12-28 03:45:02",
    "content": "Does anyone want to meet up for coffee?",
    "isMe": true
  }
  ,
  {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/1c50def6-f007-466f-1c3c-dfb66fbee700/width=1024,height=1024,fit=cover",
    "name": "Bob",
    "time": "2023-12-28 03:45:02",
    "content": "I'm planning a trip next month, any suggestions?",
    "isMe": false
  }
  ,
  {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover",
    "name": "Charlit",
    "time": "2023-12-28 03:45:02",
    "content": "I just got a new job offer!",
    "isMe": false
  }
  ,
  {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/1c50def6-f007-466f-1c3c-dfb66fbee700/width=1024,height=1024,fit=cover",
    "name": "Bob",
    "time": "2023-12-28 03:45:02",
    "content": "Hey everyone, how's it going?",
    "isMe": false
  }
  ,
  {
    "avatar": "/avatar.jpg",
    "name": "Clover",
    "time": "2023-12-28 03:45:02",
    "content": "I can't believe it's already the weekend!",
    "isMe": true
  }
  ,
  {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/4ac4f1db-2459-4d31-85f2-8be024f73400/width=1024,height=1024,fit=cover",
    "name": "Eve",
    "time": "2023-12-28 03:45:02",
    "content": "Who's up for a game night this Friday?",
    "isMe": false
  }
  ,
  {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/d1640db1-a100-472c-9c9e-4de5b45f2000/width=1024,height=1024,fit=cover",
    "name": "Alice",
    "time": "2023-12-28 03:45:02",
    "content": "I need some advice on a project I'm working on.",
    "isMe": false
  }
  ,
  {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover",
    "name": "Charlit",
    "time": "2023-12-28 03:45:02",
    "content": "Has anyone been to the new restaurant downtown?",
    "isMe": false
  }
  ,
  {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/1c50def6-f007-466f-1c3c-dfb66fbee700/width=1024,height=1024,fit=cover",
    "name": "Bob",
    "time": "2023-12-28 03:45:02",
    "content": "Just finished a great book, highly recommend it!",
    "isMe": false
  }
  ,
  {
    "avatar": "/avatar.jpg",
    "name": "Clover",
    "time": "2023-12-28 03:45:02",
    "content": "Did anyone see the latest movie release?",
    "isMe": true
  }
  ,
  {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover",
    "name": "Charlit",
    "time": "2023-12-28 03:45:02",
    "content": "Does anyone want to meet up for coffee?",
    "isMe": false
  }
  ,
  {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/1c50def6-f007-466f-1c3c-dfb66fbee700/width=1024,height=1024,fit=cover",
    "name": "Bob",
    "time": "2023-12-28 03:45:02",
    "content": "I just got a new job offer!",
    "isMe": false
  }
  ,
  {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/d1640db1-a100-472c-9c9e-4de5b45f2000/width=1024,height=1024,fit=cover",
    "name": "Alice",
    "time": "2023-12-28 03:45:02",
    "content": "Hey everyone, how's it going?",
    "isMe": false
  }
  ,
  {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/4ac4f1db-2459-4d31-85f2-8be024f73400/width=1024,height=1024,fit=cover",
    "name": "Eve",
    "time": "2023-12-28 03:45:02",
    "content": "I'm planning a trip next month, any suggestions?",
    "isMe": false
  },
  {
    "avatar": "/avatar.jpg",
    "name": "Clover",
    "time": "2023-12-28 03:45:02",
    "content": "Has anyone been to the new restaurant downtown?",
    "isMe": true
  }
  ,
  {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover",
    "name": "Charlit",
    "time": "2023-12-28 03:45:02",
    "content": "I can't believe it's already the weekend!",
    "isMe": false
  }
  ,
  {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/1c50def6-f007-466f-1c3c-dfb66fbee700/width=1024,height=1024,fit=cover",
    "name": "Bob",
    "time": "2023-12-28 03:45:02",
    "content": "Who's up for a game night this Friday?",
    "isMe": false
  }
  ,
  {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/d1640db1-a100-472c-9c9e-4de5b45f2000/width=1024,height=1024,fit=cover",
    "name": "Alice",
    "time": "2023-12-28 03:45:02",
    "content": "Just finished a great book, highly recommend it!",
    "isMe": false
  }
  ,
  {
    "avatar": "https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/4ac4f1db-2459-4d31-85f2-8be024f73400/width=1024,height=1024,fit=cover",
    "name": "Eve",
    "time": "2023-12-28 03:45:02",
    "content": "I need some advice on a project I'm working on.",
    "isMe": false
  }




]

export function ChatRoom() {
  const isMe = true
  return <>
    <div className="border-solid border-1 flex flex-col h-screen">
      <Card
        isFooterBlurred
        shadow="none"
        className="border-none flex-grow"
      >
        <CardHeader>
          Moji Internal group
        </CardHeader>
        <CardBody>
          <div className="w-full">
            {
              dataList.map((it, index) => {
                return <div className={`chat-item ${it.isMe ? 'is-me' : ''}`} key={index}>
                  <div className="avatar">
                    <Avatar src={it.avatar} className="w-full h-full" />
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
        </CardBody>

        <CardFooter className="gap-2 flex-shrink-0 sticky items-center justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1  before:rounded-xl rounded-large bottom-2 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">


          <div className="flex items-center pl-1 pr-2 py-2 mx-1 flex-grow text-sm focus:border-solid relative overflow-hidden">
            <div
              contentEditable
              data-placeholder="Say something~"
              className="
              cursor-text
              max-h-36 overflow-auto w-full text-wrap outline-none rounded-lg px-1
               empty:before:content-[attr(data-placeholder)] 
               before:text-slate-400 
               focus:after:content-[''] 
               focus:after:border-blue-500 
               focus:after:border-solid 
               focus:after:border-1
               focus:after:rounded-lg
               focus:after:absolute 
               focus:after:w-full 
               focus:after:h-full 
               focus:after:left-0 
               focus:after:top-0 
               scrollbar-hide"
            ></div>

            <div className="cursor-pointer text-gray-400">
              <i className="fi fi-rr-waveform-path align-middle leading-[0.5] cursor-pointer"></i>
            </div>
          </div>

          <Button
            isIconOnly
            variant="bordered"
            size="sm"
            radius="full"
            className="text-2xl border-none text-default-500"
            disableRipple
          >
            <i className="fi fi-rr-grin-beam  align-middle leading-[0.5]"></i>
          </Button>

          <Button
            startContent={
              <i className="fi fi-rr-paper-plane align-middle leading-[0.5]"></i>
            }
            className="text-tiny text-white bg-black/20 bg-primary"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            Send
          </Button>

        </CardFooter>
      </Card>
    </div>
  </>
}