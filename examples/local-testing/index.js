const calculator = require("../../calculator")

try {
  const addResult = calculator.add({ a: 10, b: 10 })
  console.log(`Addition result -> ${addResult}`)

  const divideResult = calculator.divide({ a: 20, b: 10 })
  console.log(`Division result -> ${divideResult}`)

  const multiplyResult = calculator.multiply({ a: 10, b: 10 })
  console.log(`Multiplication result -> ${multiplyResult}`)

  const subtractResult = calculator.substract({ a: 20, b: 10 })
  console.log(`Subtraction result -> ${subtractResult}`)
} catch (error) {
  console.error(error.message)
}
