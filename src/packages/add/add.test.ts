import { add } from "./index"

describe("add | should add two number correctly", () => {
  test("return a value", () => {
    expect(add({ a: 10, b: 10 })).not.toBeNull()
  })

  test("return a number", () => {
    expect(typeof add({ a: 10, b: 10 })).toBe("number")
  })

  test("correct addition", () => {
    expect(add({ a: 6, b: 6 })).toBe(12)
  })
})
