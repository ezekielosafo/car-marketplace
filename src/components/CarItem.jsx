// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import { Separator } from '@radix-ui/react-select'
import { LuFuel } from 'react-icons/lu'
import { SiSpeedtest } from 'react-icons/si'
import { GiGearStickPattern } from 'react-icons/gi'
import { MdOutlineOpenInNew } from 'react-icons/md'

function CarItem({ car }) {
  return (
    <div className="rounded-xl bg-white border hover:shadow-md cursor-pointer">
      <h2 className="absolute m-2 bg-blue-500 px-2 rounded-full text-sm text-white">
        New
      </h2>
      <img
        src={car?.image}
        width={'100%'}
        height={250}
        className="rounded-t-xl"
      />
      <div className="p-4">
        <h2 className="font-bold text-black text-lg mb-2">{car?.name}</h2>
        <Separator className="bg-gray-300 h-px my-2" />
        <div className="grid grid-cols-3 mt-5">
          <div className="flex flex-col items-center">
            <LuFuel className="text-lg mb-2" />
            <h2>{car.miles} Miles</h2>
          </div>
          <div className="flex flex-col items-center">
            <SiSpeedtest className="text-lg mb-2" />
            <h2>{car.fuelType}</h2>
          </div>
          <div className="flex flex-col items-center">
            <GiGearStickPattern className="text-lg mb-2" />
            <h2>{car.gearType}</h2>
          </div>
        </div>
        <Separator className="bg-gray-300 h-px my-2" />
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl">${car?.price}</h2>
          <h2 className="text-primary text-sm flex gap-2 items-center">
            View Details <MdOutlineOpenInNew />
          </h2>
        </div>
      </div>
    </div>
  )
}

CarItem.propTypes = {
  car: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    miles: PropTypes.string.isRequired,
    fuelType: PropTypes.string.isRequired,
    gearType: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
}

export default CarItem

// import React from 'react'

// function CarItem({ car }) {
//   return (
//     <div>
//       <img src={car?.image} width={300} height={250} />
//       <div className="p-4">
//         <h2 className="font-bold text-black text-lg mb-2">{car?.name}</h2>
//       </div>
//     </div>
//   )
// }

// export default CarItem
