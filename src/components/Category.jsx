import Data from '@/shared/Data'
// eslint-disable-next-line no-unused-vars
import React from 'react'

function Category() {
  return (
    <div className="mt-40">
      <h2 className="font-bold text-3xl text-center mb-6">Browse By Type</h2>
      <div className="grid grid-cols-3 sm:grid-col-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20">
        {Data.Category.map((Category, index) => (
          <div
            key={index}
            className="border rounded-xl p-3 items-center flex flex-col hover:shadow-lg cursor-pointer"
          >
            <img src={Category.icon} width={35} height={35} />
            <h2 className="mt-2">{Category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
