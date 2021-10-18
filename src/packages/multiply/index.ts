import { Operand } from "../../types/CommonsTypes"
import { checkCommonsError } from "../../helpers/checkCommonsError"

/**
 * @description Multiply two number
 *
 * @param {Operand} operand Operands
 *
 * @return {number} the multiplication result
 */
export function multiply(operand: Operand): number {
  const { a, b } = operand

  checkCommonsError({ operand, functionName: "multiply" })

  return a * b
}
