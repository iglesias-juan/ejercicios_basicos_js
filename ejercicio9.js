const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumNumbers(numberList) {
  const sumaTotal = numberList.reduce(
    (acumulador, actual) => acumulador + actual,
    0
  )
  return sumaTotal
}

console.log(sumNumbers(numbers))
