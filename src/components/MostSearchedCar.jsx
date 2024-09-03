import FakeData from '@/shared/FakeData'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import CarItem from './CarItem'

function MostSearchedCar() {
  console.log(FakeData.carList)
  return (
    <div>
      <h2 className="font-bold text-3xl text-center my-16">
        Most Searched Cars
      </h2>

      {FakeData.carList.map((car, index) => (
        <CarItem car={car} key={index} />
      ))}
    </div>
  )
}

export default MostSearchedCar
