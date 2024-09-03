// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'

function CarItem({ car }) {
  return (
    <div>
      <img src={car?.image} width={300} height={250} alt={car?.name} />
      <div className="p-4">
        <h2 className="font-bold text-black text-lg mb-2">{car?.name}</h2>
      </div>
    </div>
  )
}

CarItem.propTypes = {
  car: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
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
