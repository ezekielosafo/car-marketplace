import { faker } from '@faker-js/faker'

function createRandomCarList() {
  return {
    name: faker.vehicle.vehicle(),
    fuelType: faker.vehicle.fuel(),
    model: faker.vehicle.model(),
    type: faker.vehicle.type(),
    image:
      'https://www.google.com/imgres?q=bmw%20cars&imgurl=https%3A%2F%2Fweb21st.imgix.net%2Fassets%2Fimages%2Fnew-vehicles%2Fbmw%2Fbmw-x3-2021-m-sport-quarter-sophisto-grey.png%3Fw%3D1500&imgrefurl=https%3A%2F%2Fwww.group1auto.co.uk%2Fbmw%2Fhybrid-cars&docid=nVMyapWBxkT9_M&tbnid=0UN3I0E27DYKYM&vet=12ahUKEwiC_oyn16KIAxUYhf0HHZTzFiU4ChAzegQIWxAA..i&w=1500&h=848&hcb=2&ved=2ahUKEwiC_oyn16KIAxUYhf0HHZTzFiU4ChAzegQIWxAA',
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
