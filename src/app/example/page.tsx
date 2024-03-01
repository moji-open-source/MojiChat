'use client'

import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Avatar
} from '@nextui-org/react'
import React from 'react';

export default function ExamplePage() {
  const [isFollowed, setIsFollowed] = React.useState(true);
  const list = React.useState([1, 2])

  return <>
    <Modal isOpen>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <Input className="mt-6" size="sm" isClearable placeholder="输入搜索关键词" startContent={
                <i className="fi fi-rs-search flex text-default-400 pointer-events-none flex-shrink-0"></i>
              } />
            </ModalHeader>
            <ModalBody>

              {list.map(() => <>
                <div className="justify-between flex mb-2">
                  <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="md" src="/avatar.jpg" />
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <h4 className="text-small font-semibold leading-none text-default-600">
                        Clover You
                      </h4>
                      <h5 className="text-small tracking-tight text-default-400">@cloveryou</h5>
                    </div>
                  </div>
                  <Button
                    className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                    color="primary"
                    radius="full"
                    size="sm"
                    variant={isFollowed ? "bordered" : "solid"}
                    onPress={() => setIsFollowed(!isFollowed)}
                  >
                    {isFollowed ? "UNADD" : "ADD"}
                  </Button>
                </div>
              </>)}

            </ModalBody>

            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
    <Button size="sm">
      <i className="fi fi-rr-user-add"></i>
    </Button>
  </>
}