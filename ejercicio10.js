const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(numberList) {
  const sumaTotal = numberList.reduce(
    (acumulador, actual) => acumulador + actual,
    0
  )
  const promedio = sumaTotal / numberList.length
  return promedio
}

console.log(average(numbers))
