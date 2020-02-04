import React from 'react'

const SearchBar = ({ onChange }) => (
  <div className="filed control">
    <input 
      type="text" 
      className="input" 
      placeholder="Search..."
      onChange={ e => {
        const userInput = e.target.value
        onChange(userInput)
      }}
    />
  </div>
)

export default SearchBar 