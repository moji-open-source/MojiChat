import reducer, { appendMessage, popMessage } from "@/store/chat"
import { describe, test, expect } from "vitest"

describe("chat store", () => {
  test("append message to outbox", () => {
    const action = appendMessage({ id: "10086", message: "hello world", type: "user" })
    const state = reducer({ outbox: {} }, action)
    expect(state.outbox['user-10086']).toBeTruthy()
  })

  test("pop message from outbox", () => {
    const action = popMessage({ id: "10086", type: "user" })
    const state = reducer({
      outbox: {
        "user-10086": "hello world"
      }
    }, action)

    expect(state.outbox).toEqual({})
  })
})