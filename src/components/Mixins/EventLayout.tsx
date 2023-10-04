import React from 'react'
import HeaderEvent from '../Common/HeaderEvent'

type Props = {}

const EventLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {

  return (
      <div className='bg-white min-h-screen h-auto flex w-screen'>
          <div className='w-full'>
              <HeaderEvent/>
              {children}
          </div>
      </div>
  )
}

export default EventLayout