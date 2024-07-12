/**
 * <p>
 * 登陆页面
 * </p>
*
* @version: v1.0
* @author: Clover
* @create: 2023-12-07 23:39
*/

import { WindowDisplayController } from '@/components/helper/WindowDisplayController'
import { LoginForm } from './form'

export default function Login() {
  return (
    <div data-tauri-drag-region className="h-screen">
      <WindowDisplayController />

      <div data-tauri-drag-region className="pt-14 w-4/5 m-auto">
        <LoginForm />
      </div>
    </div>
  )
}
