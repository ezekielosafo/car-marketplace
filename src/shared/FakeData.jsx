import { faker } from '@faker-js/faker'

function createRandomCarList() {
  return {
    name: faker.vehicle.vehicle(),
    fuelType: faker.vehicle.fuel(),
    model: faker.vehicle.model(),
    type: faker.vehicle.type(),
    image: 'https://images.app.goo.gl/nuw55WwJFxLYihbN9',
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
