"use client"
import { Badge, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Image } from '@nextui-org/react'
import styles from './sidebar.module.css'


export function Sidebar() {
  return <>
    <div className={`${styles.sidebar}`} data-tauri-drag-region>
      <div className={styles.sidebarGroup}>
        <div className={styles.sidebarItem}>
          <Image src="/avatar.jpg" alt="avatar" width={45} height={45} radius="sm" isBlurred={false} />
        </div>
        <div className={styles.sidebarItem}>
          <Badge content={16} color="primary" size="sm">
            <i className={`fi fi-rr-comment ${styles.sideBarItemIcon}`}></i>
          </Badge>
        </div>
        <div className={styles.sidebarItem}>
          <i className={`fi fi-rr-users ${styles.sideBarItemIcon}`}></i>
        </div>
      </div>

      <div className={styles.sidebarGroup}>
        <div className={styles.sidebarItem}>
          <Dropdown>
            <DropdownTrigger>
              <i className={`fi fi-rr-menu-burger ${styles.sideBarItemIcon}`}></i>
            </DropdownTrigger>
            <DropdownMenu aria-label="Example with disabled actions" >
              <DropdownItem key="edit">Setting</DropdownItem>
              <DropdownItem key="delete" className="text-danger" color="danger">
                Log out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  </>
}