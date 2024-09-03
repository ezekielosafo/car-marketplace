import { faker } from '@faker-js/faker'

function createRandomCarList() {
  return {
    name: faker.vehicle.vehicle(),
    fuelType: faker.vehicle.fuel(),
    model: faker.vehicle.model(),
    type: faker.vehicle.type(),
    image:
      'https://robbreport.com/wp-content/uploads/2023/06/manescalade01.jpg?w=1000',
    miles: 1000,
    gearType: 'Automatic',
    price: faker.finance.amount({ min: 4000, max: 200000 }),
  }
}

const carList = faker.helpers.multiple(createRandomCarList, {
  count: 7,
})

export default {
  carList,
}
