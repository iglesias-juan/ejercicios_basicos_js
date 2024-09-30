const alien = {
  name: 'Xenomorph',
  species: 'Xenomorph XX121',
  origin: 'Unknown',
  weight: 180
}

for (const item in alien) {
  console.log(`La propiedad ${item} tiene como valor ${alien[item]}`)
}
