import { Operand } from "../../types/CommonsTypes"
import { checkCommonsError } from "../../helpers/checkCommonsError"

/**
 * @description Divide two number
 *
 * @param {Operand} operand Operands
 *
 * @return {number} the division result
 */
export function divide(operand: Operand): number {
  const { a, b } = operand

  checkCommonsError({ operand, functionName: "divide" })

  return a / b
}
