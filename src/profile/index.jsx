import Header from '@/components/Header'
import { Button } from '@/components/ui/Button'
// eslint-disable-next-line no-unused-vars
import React from 'react'

function Profile() {
  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 my-10">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-4xl">My Listing</h2>
          <Button>+ Add New Listing</Button>
        </div>
      </div>
    </div>
  )
}

export default Profile
