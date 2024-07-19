import React from 'react'

const Datacard = ({name="name here",value="0"}) => {
  return (
      <>
          <div className='bg-slate-50 bg-opacity-10 p-3 rounded-md grid'>
              <p className='text-white'>{name.toUpperCase()}</p>
              <h2 className='text-white text-3xl'>{value}</h2>
          </div>
      </>
  )
}

export default Datacard