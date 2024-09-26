const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

function nameFinder(nameList, nameFound) {
  const x = nameList.indexOf(nameFound)
  if (x !== -1) {
    return { found: true, index: x }
  } else {
    return { found: false }
  }
}

const result = nameFinder(names, 'Juan')
console.log(result)
