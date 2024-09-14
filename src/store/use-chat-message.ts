import { atom, useAtom } from 'jotai'

const msgAtom = atom([
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/d1640db1-a100-472c-9c9e-4de5b45f2000/width=1024,height=1024,fit=cover',
    name: 'Alice',
    time: '2023-12-28 03:45:02',
    content: 'I\'m planning a trip next month, any suggestions?',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/d1640db1-a100-472c-9c9e-4de5b45f2000/width=1024,height=1024,fit=cover',
    name: 'Alice',
    time: '2023-12-28 03:45:02',
    content: 'Who\'s up for a game night this Friday?',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover',
    name: 'Charlit',
    time: '2023-12-28 03:45:02',
    content: 'Hey everyone, how\'s it going?',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/d1640db1-a100-472c-9c9e-4de5b45f2000/width=1024,height=1024,fit=cover',
    name: 'Alice',
    time: '2023-12-28 03:45:02',
    content: 'Does anyone want to meet up for coffee?',
    isMe: false
  },

  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/4ac4f1db-2459-4d31-85f2-8be024f73400/width=1024,height=1024,fit=cover',
    name: 'Eve',
    time: '2023-12-28 03:45:02',
    content: 'I just got a new job offer!',
    isMe: false
  },
  {
    avatar: '/avatar.jpg',
    name: 'Clover',
    time: '2023-12-28 03:45:02',
    content: 'I need some advice on a project I\'m working on.',
    isMe: true
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/4ac4f1db-2459-4d31-85f2-8be024f73400/width=1024,height=1024,fit=cover',
    name: 'Eve',
    time: '2023-12-28 03:45:02',
    content: 'Has anyone been to the new restaurant downtown?',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover',
    name: 'Charlit',
    time: '2023-12-28 03:45:02',
    content: 'Just finished a great book, highly recommend it!',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/1c50def6-f007-466f-1c3c-dfb66fbee700/width=1024,height=1024,fit=cover',
    name: 'Bob',
    time: '2023-12-28 03:45:02',
    content: 'Who\'s up for a game night this Friday?',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/d1640db1-a100-472c-9c9e-4de5b45f2000/width=1024,height=1024,fit=cover',
    name: 'Alice',
    time: '2023-12-28 03:45:02',
    content: 'I can\'t believe it\'s already the weekend!',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover',
    name: 'Charlit',
    time: '2023-12-28 03:45:02',
    content: 'I can\'t believe it\'s already the weekend!',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/4ac4f1db-2459-4d31-85f2-8be024f73400/width=1024,height=1024,fit=cover',
    name: 'Eve',
    time: '2023-12-28 03:45:02',
    content: 'Did anyone see the latest movie release?',
    isMe: false
  },
  {
    avatar: '/avatar.jpg',
    name: 'Clover',
    time: '2023-12-28 03:45:02',
    content: 'Does anyone want to meet up for coffee?',
    isMe: true
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/1c50def6-f007-466f-1c3c-dfb66fbee700/width=1024,height=1024,fit=cover',
    name: 'Bob',
    time: '2023-12-28 03:45:02',
    content: 'I\'m planning a trip next month, any suggestions?',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover',
    name: 'Charlit',
    time: '2023-12-28 03:45:02',
    content: 'I just got a new job offer!',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/1c50def6-f007-466f-1c3c-dfb66fbee700/width=1024,height=1024,fit=cover',
    name: 'Bob',
    time: '2023-12-28 03:45:02',
    content: 'Hey everyone, how\'s it going?',
    isMe: false
  },
  {
    avatar: '/avatar.jpg',
    name: 'Clover',
    time: '2023-12-28 03:45:02',
    content: 'I can\'t believe it\'s already the weekend!',
    isMe: true
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/4ac4f1db-2459-4d31-85f2-8be024f73400/width=1024,height=1024,fit=cover',
    name: 'Eve',
    time: '2023-12-28 03:45:02',
    content: 'Who\'s up for a game night this Friday?',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/d1640db1-a100-472c-9c9e-4de5b45f2000/width=1024,height=1024,fit=cover',
    name: 'Alice',
    time: '2023-12-28 03:45:02',
    content: 'I need some advice on a project I\'m working on.',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover',
    name: 'Charlit',
    time: '2023-12-28 03:45:02',
    content: 'Has anyone been to the new restaurant downtown?',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/1c50def6-f007-466f-1c3c-dfb66fbee700/width=1024,height=1024,fit=cover',
    name: 'Bob',
    time: '2023-12-28 03:45:02',
    content: 'Just finished a great book, highly recommend it!',
    isMe: false
  },
  {
    avatar: '/avatar.jpg',
    name: 'Clover',
    time: '2023-12-28 03:45:02',
    content: 'Did anyone see the latest movie release?',
    isMe: true
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover',
    name: 'Charlit',
    time: '2023-12-28 03:45:02',
    content: 'Does anyone want to meet up for coffee?',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/1c50def6-f007-466f-1c3c-dfb66fbee700/width=1024,height=1024,fit=cover',
    name: 'Bob',
    time: '2023-12-28 03:45:02',
    content: 'I just got a new job offer!',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/d1640db1-a100-472c-9c9e-4de5b45f2000/width=1024,height=1024,fit=cover',
    name: 'Alice',
    time: '2023-12-28 03:45:02',
    content: 'Hey everyone, how\'s it going?',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/4ac4f1db-2459-4d31-85f2-8be024f73400/width=1024,height=1024,fit=cover',
    name: 'Eve',
    time: '2023-12-28 03:45:02',
    content: 'I\'m planning a trip next month, any suggestions?',
    isMe: false
  },
  {
    avatar: '/avatar.jpg',
    name: 'Clover',
    time: '2023-12-28 03:45:02',
    content: 'Has anyone been to the new restaurant downtown?',
    isMe: true
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/0060ddc8-e40b-4f47-e249-3fcee9f9de00/width=1024,height=1024,fit=cover',
    name: 'Charlit',
    time: '2023-12-28 03:45:02',
    content: 'I can\'t believe it\'s already the weekend!',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/1c50def6-f007-466f-1c3c-dfb66fbee700/width=1024,height=1024,fit=cover',
    name: 'Bob',
    time: '2023-12-28 03:45:02',
    content: 'Who\'s up for a game night this Friday?',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/d1640db1-a100-472c-9c9e-4de5b45f2000/width=1024,height=1024,fit=cover',
    name: 'Alice',
    time: '2023-12-28 03:45:02',
    content: 'Just finished a great book, highly recommend it!',
    isMe: false
  },
  {
    avatar:
      'https://imagedelivery.net/NuIlS-icgS-GBz54pfagaw/4ac4f1db-2459-4d31-85f2-8be024f73400/width=1024,height=1024,fit=cover',
    name: 'Eve',
    time: '2023-12-28 03:45:02',
    content: 'I need some advice on a project I\'m working on.',
    isMe: false
  }
])

export function useChatMsg() {
  return useAtom(msgAtom)
}
