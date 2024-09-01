// eslint-disable-next-line no-unused-vars
import React from 'react'

function CarItem({ car }) {
  return (
    <div>
      <img src={car?.image} width={300} height={250} />
      <div></div>
    </div>
  )
}

export default CarItem

// import React from 'react'
// import PropTypes from 'prop-types'

// function CarItem({ car }) {
//   return (
//     <div>
//       <img src={car.image} width={300} height={250} alt="Car" />
//     </div>
//   )
// }

// CarItem.propTypes = {
//   car: PropTypes.shape({
//     image: PropTypes.string.isRequired,
//   }).isRequired,
// }

// export default CarItem
