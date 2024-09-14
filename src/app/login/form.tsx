'use client'

import { Button, Checkbox, Input, Link } from '@nextui-org/react'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { EmailLoginRequest } from '@/ipc/user'
import { closeCurrentWindowIpc } from '@/ipc/window'

export function LoginForm() {
  const [isVisible, setIsSisible] = useState(false)
  const toggleVisibility = () => setIsSisible(!isVisible)
  const form = useForm<EmailLoginRequest>()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(data: EmailLoginRequest) {
    try {
      setIsLoading(true)

      console.log('data', data)

      setIsLoading(false)
      await closeCurrentWindowIpc('login_win')
    } catch (e) {
      console.error(e)

      setIsLoading(false)
    }
  }

  return (
    <div data-tauri-drag-region className="flex justify-center flex-col items-center h-full">
      <Image src="/avatar.jpg" alt="" width="100" height="100" className="rounded-full mb-6 diable-select-text"
        data-tauri-drag-region />

      <form onSubmit={form.handleSubmit(onSubmit)} data-tauri-drag-region>
        <div className="space-y-4 diable-select-text" data-tauri-drag-region>
          <Input
            placeholder="请输入账号"
            labelPlacement="outside"
            color={form.formState.errors.email && 'danger'}
            {...form.register('email', { required: true })}
            startContent={
              <span className="icon-[ant-design--user-outlined] text-default-400 pointer-events-none flex-shrink-0"></span>
            }
          />

          <Input
            type={isVisible ? 'text' : 'password'}
            placeholder="请输入密码"
            labelPlacement="outside"
            color={form.formState.errors.psd && 'danger'}
            {...form.register('psd', { required: true })}
            startContent={
              <span className="icon-[ant-design--lock-outlined] text-default-400 pointer-events-none flex-shrink-0"></span>
            }
            endContent={
              <button
                className="focus:outline-none inline-flex"
                type="button"
                onClick={toggleVisibility}>
                <span style={{ fontSize: 18 }} className={`${isVisible ? 'icon-[ant-design--eye-invisible-outlined]' : 'icon-[ant-design--eye-outlined]'}`}></span>
              </button>
            }
          />
          <div className="flex space-x-2 justify-between" data-tauri-drag-region>
            <Checkbox defaultSelected size="sm">
              记住密码
            </Checkbox>
            <Link href="#" size="sm">
              忘记密码
            </Link>
          </div>

          <Button fullWidth color="primary" type="submit" isLoading={isLoading}>
            登录
          </Button>
        </div>
      </form>
    </div>
  )
}
