'use client'
/**
 * <p>
 * 联系人名片
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2023-12-19 21:41
 */
import React from "react";
import { Card, CardHeader, CardBody, Avatar, Button, Divider } from "@nextui-org/react"


export function ContcatCallingCard() {
  return <>
    <Card className="w-full border-none shadow-none">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="/avatar.jpg" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Clover You</h4>
            <h5 className="text-small tracking-tight text-default-400">@clover</h5>
          </div>
        </div>
        <Button
          color="primary"
          radius="full"
          size="sm"
          variant={"solid"}
        >
          Send Message
        </Button>
      </CardHeader>

      <CardBody className="px-3 py-0 text-small">
        <p className="text-default-400">
          Observing this world filled with so much sarcasm, how should one describe the desire for this dream?
        </p>

        <div className="pb-5">
        </div>
        <span className="flex gap-2">
          <i className="fi fi-rr-cake-birthday"></i>
          <p>4.13</p>
        </span>

        <span className="flex gap-2">
          <i className="fi fi-rr-cake-birthday"></i>
          <p>4.13</p>
        </span>
      </CardBody>
    </Card>
  </>
}