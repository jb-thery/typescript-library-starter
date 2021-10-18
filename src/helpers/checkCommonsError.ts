import { checkCommonsErrorParams } from "../types/CommonsTypes"
import {
  MISSING_FUNCTION_NAME,
  MISSING_OPERAND_A,
  MISSING_OPERAND_B,
  MISSING_OPERAND_OBJECT,
  MISSING_PARAMS,
} from "../constants"

/**
 * @description Check arithmetic functions errors
 *
 * @param {checkCommonsErrorParams} params checkCommonsError parameters
 *
 * @return {void}
 */
export function checkCommonsError(params: checkCommonsErrorParams): void {
  if (!params) throw Error(MISSING_PARAMS)

  const { operand, functionName } = params

  if (!functionName) throw Error(MISSING_FUNCTION_NAME)
  if (!operand) throw Error(`${functionName} ${MISSING_OPERAND_OBJECT}`)

  const { a, b } = operand

  if (!a) throw Error(`${functionName} ${MISSING_OPERAND_A}`)
  if (!b) throw Error(`${functionName} ${MISSING_OPERAND_B}`)
}
