import React from 'react'

const Select = ({value, selectPersons, defaultName, options}) => {
  return (
    <select
       value={value}
       onChange={(e) => selectPersons(e.target.value)}
       className='select-user'
    >
       
       <option value="">{defaultName}</option>

       {options.map((option) => (
        <option key={option.value} value={option.value}>
            {option.name}
        </option>
       ))}
    </select>
  )
}

export default Select