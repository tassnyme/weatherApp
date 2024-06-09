import React from 'react'

function TimeAndLocation({weather:{formattedLocalTime , name , country}}) {
  return (
    <div className='bg-gray-900 bg-opacity-25 rounded-lg py-2 px-2 shadow-xl '>
     <div className='flex items-center justify-center my-16'>
        <p className='text-xl font-extralight'>
        {formattedLocalTime}
        </p>
      </div>

      <div className='flex items-center justify-center my-3'>
        <p className='text-3xl font-medium '>{` ${name} , ${country}`}</p>
      </div>
    </div>
  )
}

export default TimeAndLocation
