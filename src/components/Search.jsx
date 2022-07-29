import React, { useState,  useEffect } from 'react'

import "./search.css"

const Search = (props) => {

    const [searchText,setSeachText]= useState("")

    const handleChange =(e)=>{
        setSeachText(e.target.value)
    }
    useEffect(() => {
     props.onSearch(searchText)
    }, [searchText])
    
  return (
    <div className='search'>
        <input type="text" placeholder="Search Country" value={searchText} onChange={handleChange} className="search-field"/>
    </div>
  )
}

export default Search