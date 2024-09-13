'use client'

import { Pathname } from '@/enum/pathname.enum'
import { Badge, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image } from '@nextui-org/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './sidebar.module.css'

export function Sidebar() {
  const pathname = usePathname()

  const isChatPage = pathname === Pathname.Chat
  const isContactPage = pathname === Pathname.Contact

  return <>
    <div className={`${styles.sidebar} diable-select-text`} data-tauri-drag-region>
      <div className={styles.sidebarGroup} data-tauri-drag-region>
        <div className={styles.sidebarItem}>
          <Image src="/avatar.jpg" alt="avatar" width={45} height={45} radius="sm" isBlurred={false} />
        </div>
        <div className={styles.sidebarItem} data-tauri-drag-region>
          <Link href="/main/chat">
            <Badge content={16} color="primary" size="sm">
              <span
                className={`${isChatPage ? 'icon-[solar--chat-line-bold]' : 'icon-[solar--chat-line-bold-duotone]'} ${styles.sideBarItemIcon}`}
              ></span>
            </Badge>
          </Link>
        </div>
        <div className={styles.sidebarItem} data-tauri-drag-region>
          <Link href="/main/contact">
            <span className={`${isContactPage ? 'icon-[weui--contacts-filled]' : 'icon-[weui--contacts-outlined]'} ${styles.sideBarItemIcon}`}></span>
          </Link>
        </div>
      </div>

      <div className={styles.sidebarGroup} data-tauri-drag-region>
        <div className={styles.sidebarItem}>
          <Dropdown>
            <DropdownTrigger>
              <span className={`icon-[hugeicons--text-indent-more] ${styles.sideBarItemIcon}`}></span>
              {/* <i className={`fi fi-rr-menu-burger ${styles.sideBarItemIcon}`}></i> */}
            </DropdownTrigger>
            <DropdownMenu aria-label="Example with disabled actions" >
              <DropdownItem key="edit" textValue="Setting">
                <span>Setting</span>
              </DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger" textValue="Logout">
                <span>Logout</span>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  </>
}
