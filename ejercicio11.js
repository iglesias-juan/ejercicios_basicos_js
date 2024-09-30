const mixedElements = [
  6,
  1,
  'Marvel',
  1,
  'hamburguesa',
  '10',
  'Prometeo',
  8,
  'Hola mundo'
]

function promedio(list) {
  let sum = 0
  for (const element of list) {
    if (typeof element === 'number') {
      sum += element
    } else if (typeof element === 'string') {
      sum += element.length
    }
  }
  return sum
}

const result = promedio(mixedElements)
console.log(result)
