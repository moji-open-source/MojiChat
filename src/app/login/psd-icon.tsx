'use client'

import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import { event } from '@tauri-apps/api'
import { useEffect, useState } from 'react'

export function PassowrdVisibelIcon() {
  const [visible, setSisible] = useState(false)
  const toggleVisibility = () => setSisible(!visible)
  useEffect(() => {
    event.emit('show-window')
  }, [])
  return (
    <>
      <button
        className="focus:outline-none"
        type="button"
        onClick={toggleVisibility}>
        {visible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
      </button>
    </>
  )
}
