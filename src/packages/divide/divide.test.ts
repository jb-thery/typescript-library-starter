import { divide } from "./index"

describe("divide | should divide two number correctly", () => {
  test("return a value", () => {
    expect(divide({ a: 10, b: 10 })).not.toBeNull()
  })

  test("return a number", () => {
    expect(typeof divide({ a: 10, b: 10 })).toBe("number")
  })

  test("correct addition", () => {
    expect(divide({ a: 10, b: 2 })).toBe(5)
  })
})
