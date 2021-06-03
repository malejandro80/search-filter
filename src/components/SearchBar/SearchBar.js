/** @format */

import React from 'react'
import './SearchBar.scss'
export default function SearchBar({ setSearch, search }) {
  return (
    <>
      <input
        className='searchInput'
        type='text'
        placeholder='Search'
        onChange={e => {
          setSearch(e.target.value)
        }}
        value={search}
      />
    </>
  )
}
