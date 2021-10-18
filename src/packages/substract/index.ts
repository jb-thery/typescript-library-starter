import { Operand } from "../../types/CommonsTypes"
import { checkCommonsError } from "../../helpers/checkCommonsError"

/**
 * @description Subtract two number
 *
 * @param {Operand} operand Operands
 *
 * @return {number} the subtraction result
 */
export function subtract(operand: Operand): number {
  const { a, b } = operand

  checkCommonsError({ operand, functionName: "subtract" })

  return a - b
}
