/**
 * @description The two numbers used for the mathematical operation
 *
 * @property {number} a first operand
 * @property {number} b second operand
 */
export interface Operand {
  a: number
  b: number
}

/**
 * @description Throw arithmetic functions errors
 *
 * @property {Operand} operand operands object
 * @property {string} functionName checked function name
 */
export interface checkCommonsErrorParams {
  operand: Operand
  functionName: string
}
