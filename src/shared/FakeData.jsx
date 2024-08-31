import { faker } from '@faker-js/faker'

function createRandomCarList() {
  return {
    name: faker.vehicle.vehicle(),
    fuelType: faker.vehicle.fuel(),
    model: faker.vehicle.model(),
    type: faker.vehicle.type(),
    image:
      'https://www.google.com/imgres?q=bmw%20cars&imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod%2Fimages%2Fbmw-i16-lead-65ca5c7448c9b.jpg&imgrefurl=https%3A%2F%2Fwww.caranddriver.com%2Fnews%2Fa46750903%2Fbmw-i8-replacement-design-revealed%2F&docid=4fQKJvoOvgKu3M&tbnid=ubhB1XQb3hdTYM&vet=12ahUKEwi4oNDj0J-IAxUQZkEAHfcfCkwQM3oECB4QAA..i&w=2160&h=1350&hcb=2&ved=2ahUKEwi4oNDj0J-IAxUQZkEAHfcfCkwQM3oECB4QAA',
    miles: 1000,
    gearType: 'Automatic',
    Price: faker.finance.amount({ min: 4000, max: 200000 }),
  }
}

const carList = faker.helpers.multiple(createRandomCarList, {
  count: 7,
})

export default {
  carList,
}
