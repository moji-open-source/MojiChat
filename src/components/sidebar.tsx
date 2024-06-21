"use client"

import { Badge, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image } from '@nextui-org/react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './sidebar.module.css'


export function Sidebar() {
  const pathname = usePathname()

  return <>
    <div className={`${styles.sidebar} diable-select-text`} data-tauri-drag-region>
      <div className={styles.sidebarGroup} data-tauri-drag-region>
        <div className={styles.sidebarItem}>
          <Image src="/avatar.jpg" alt="avatar" width={45} height={45} radius="sm" isBlurred={false} />
        </div>
        <div className={styles.sidebarItem} data-tauri-drag-region>
          <Link href="/main/chat">
            <Badge content={16} color="primary" size="sm">
              <i className={`fi ${pathname === '/main/chat' ? 'fi-sr-comment' : 'fi-rr-comment'} ${styles.sideBarItemIcon}`}></i>
            </Badge>
          </Link>
        </div>
        <div className={styles.sidebarItem} data-tauri-drag-region>
          <Link href="/main/contact">
            <i className={`fi ${pathname === '/main/contact' ? 'fi-sr-users' : 'fi-rr-users'} ${styles.sideBarItemIcon}`}></i>
          </Link>
        </div>
      </div>

      <div className={styles.sidebarGroup} data-tauri-drag-region>
        <div className={styles.sidebarItem}>
          <Dropdown>
            <DropdownTrigger>
              <i className={`fi fi-rr-menu-burger ${styles.sideBarItemIcon}`}></i>
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
