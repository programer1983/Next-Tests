import React  from 'react'

const Input = React.forwardRef((props, ref) => {
  return (
    <input ref={ref} {...props} className='custon-input'/>
  )
})

export default Input