import { Operand } from "../../types/CommonsTypes"
import { checkCommonsError } from "../../helpers/checkCommonsError"

/**
 * @description Add two number
 *
 * @param {Operand} operand Operands
 *
 * @return {number} the addition result
 */
export function add(operand: Operand): number {
  const { a, b } = operand

  checkCommonsError({ operand, functionName: "add" })

  return a + b
}
