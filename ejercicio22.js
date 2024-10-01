const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']

const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

let fruitI = 0

for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    foodSchedule[i].name = fruits[fruitI]
    fruitI++
    foodSchedule[i].isVegan = true
    if (fruitI >= fruits.length) {
      break
    }
  }
}

console.log(foodSchedule)
