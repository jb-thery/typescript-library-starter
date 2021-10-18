import { multiply } from "./index"

describe("multiply | should multiply two number correctly", () => {
  test("return a value", () => {
    expect(multiply({ a: 10, b: 10 })).not.toBeNull()
  })

  test("return a number", () => {
    expect(typeof multiply({ a: 10, b: 10 })).toBe("number")
  })

  test("correct addition", () => {
    expect(multiply({ a: 10, b: 10 })).toBe(100)
  })
})
