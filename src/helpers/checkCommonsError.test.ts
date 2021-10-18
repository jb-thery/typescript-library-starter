import { checkCommonsError } from "./checkCommonsError"
import {
  MISSING_FUNCTION_NAME,
  MISSING_OPERAND_A,
  MISSING_OPERAND_B,
  MISSING_OPERAND_OBJECT,
  MISSING_PARAMS,
} from "../constants"

const functionName = "testName"

describe("checkCommonsError | should throw arithmetic functions errors correctly", () => {
  test("throw no params provided", () => {
    try {
      // disable ts just for this test to prevent unwanted ts compilation error
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      checkCommonsError()
    } catch (error) {
      const { message } = error as Error

      expect(message).toBe(MISSING_PARAMS)
    }
  })

  test("throw no function name error", () => {
    try {
      // disable ts just for this test to prevent unwanted ts compilation error
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      checkCommonsError({ operand: { a: 10, b: 20 } })
    } catch (error) {
      const { message } = error as Error

      expect(message).toBe(MISSING_FUNCTION_NAME)
    }
  })

  test("throw no operand provided", () => {
    try {
      // disable ts just for this test to prevent unwanted ts compilation error
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      checkCommonsError({ functionName })
    } catch (error) {
      const { message } = error as Error

      expect(message).toBe(`${functionName} ${MISSING_OPERAND_OBJECT}`)
    }
  })

  test("throw no A operand provided", () => {
    try {
      // disable ts just for this test to prevent unwanted ts compilation error
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      checkCommonsError({ operand: { b: 10 }, functionName })
    } catch (error) {
      const { message } = error as Error

      expect(message).toBe(`${functionName} ${MISSING_OPERAND_A}`)
    }
  })

  test("throw B operand provided", () => {
    try {
      // disable ts just for this test to prevent unwanted ts compilation error
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      checkCommonsError({ operand: { a: 10 }, functionName })
    } catch (error) {
      const { message } = error as Error

      expect(message).toBe(`${functionName} ${MISSING_OPERAND_B}`)
    }
  })
})
