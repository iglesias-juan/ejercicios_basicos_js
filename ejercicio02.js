//!2.1
const jedi = { nombre: 'Luke Skywalker', edad: 19 }

jedi.edad = 25

// console.log(jedi)

//!2.2
const presentacion = {
  nombre: 'Leia',
  apellido: 'Organa',
  edad: 20
}
// console.log(
//   `Soy ${presentacion.nombre} ${presentacion.apellido}, tengo ${presentacion.edad} y soy una princesa de Alderaan.`
// )

//!2.3
const sable1 = { nombre: 'Shoto de Yoda', precio: 1500 }
const sable2 = { nombre: 'Sable de Darth Vader', precio: 2000 }
// console.log(sable1.precio * 2 + sable2.precio)

//!2.4.1
let precioBaseGlobal = 10000
precioBaseGlobal = 25000
// console.log(precioBaseGlobal)

//!2.4.2

const nave1 = { nombre: 'Ala-X', precioBase: 50000, precioFinal: 0 }
const nave2 = { nombre: 'Halcón Milenario', precioBase: 70000, precioFinal: 0 }

nave1.precioFinal = nave1.precioBase + precioBaseGlobal
nave2.precioFinal = nave2.precioBase + precioBaseGlobal

console.log(nave1)
console.log(nave2)
