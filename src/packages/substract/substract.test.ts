import { subtract } from "./index"

describe("subtract | should subtract two number correctly", () => {
  test("return a value", () => {
    expect(subtract({ a: 10, b: 10 })).not.toBeNull()
  })

  test("return a number", () => {
    expect(typeof subtract({ a: 10, b: 10 })).toBe("number")
  })

  test("correct addition", () => {
    expect(subtract({ a: 20, b: 10 })).toBe(10)
  })
})
