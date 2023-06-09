import React from 'react'

const Buttton = ({children, ...props}) => {
  return (
    <button {...props} className='custom-button'>{children}</button>
  )
}

export default Buttton
