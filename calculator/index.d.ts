/**
 * @description The two numbers used for the mathematical operation
 *
 * @property {number} a first operand
 * @property {number} b second operand
 */
interface Operand {
    a: number;
    b: number;
}

/**
 * @description Add two number
 *
 * @param {Operand} operand Operands
 *
 * @return {number} the addition result
 */
declare function add(operand: Operand): number;

/**
 * @description Divide two number
 *
 * @param {Operand} operand Operands
 *
 * @return {number} the division result
 */
declare function divide(operand: Operand): number;

/**
 * @description Multiply two number
 *
 * @param {Operand} operand Operands
 *
 * @return {number} the multiplication result
 */
declare function multiply(operand: Operand): number;

/**
 * @description Subtract two number
 *
 * @param {Operand} operand Operands
 *
 * @return {number} the subtraction result
 */
declare function subtract(operand: Operand): number;

declare const _default: {
    add: typeof add;
    divide: typeof divide;
    multiply: typeof multiply;
    substract: typeof subtract;
};

export { _default as default };
