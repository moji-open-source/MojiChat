'use client'
/**
 * <p>
 * 登陆页面
 * </p>
*
* @version: v1.0
* @author: Clover
* @create: 2023-12-07 23:39
*/
import { EmailLoginRequest } from '@/ipc/user'
import { closeCurrentWindowIpc } from '@/ipc/window'
import { AppDispatch } from '@/store'
import { useUserStore } from '@/store/hooks'
import { emailLogin, getUserInfo } from '@/store/user'
import { EyeInvisibleOutlined, EyeOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Input, Link } from '@nextui-org/react'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

export default function Login() {
  const [isVisible, setIsSisible] = useState(false)
  const toggleVisibility = () => setIsSisible(!isVisible)
  const userStore = useUserStore()
  const dispatch = useDispatch<AppDispatch>()
  const form = useForm<EmailLoginRequest>()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(data: EmailLoginRequest) {
    try {
      setIsLoading(true)
      const result = await dispatch(emailLogin(data))
      const userInfo = await dispatch(getUserInfo())
      setIsLoading(false)
      await closeCurrentWindowIpc("login_win")
    } catch (e) {
      setIsLoading(false)
    }
  }

  return (
    <div data-tauri-drag-region className="bg-app w-full h-full">
      <div
        data-tauri-drag-region
        className="flex justify-center pt-14 flex-col items-center w-4/5 m-auto h-full">
        <Image
          src="/avatar.jpg"
          alt=""
          width="100"
          height="100"
          className="rounded-full mb-6"
        />

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              placeholder="请输入账号"
              labelPlacement="outside"
              color={form.formState.errors.email && 'danger'}
              {...form.register("email", { required: true })}
              startContent={
                <UserOutlined className="text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
            <Input
              type={isVisible ? "text" : "password"}
              placeholder="请输入密码"
              labelPlacement="outside"
              color={form.formState.errors.psd && 'danger'}
              {...form.register("psd", { required: true })}
              startContent={
                <LockOutlined className="text-default-400 pointer-events-none flex-shrink-0" />
              }
              endContent={
                <button
                  className="focus:outline-none inline-flex"
                  type="button"
                  onClick={toggleVisibility}>
                  {isVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                </button>
              }
            />
            <div className="flex space-x-2 justify-between">
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
      {/* <ViewVisible /> */}
    </div>
  )
}
