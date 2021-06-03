/** @format */

import React from 'react'
import './FilterList.scss'

export default function FilterList({ filterMetals }) {
  console.log(filterMetals)
  return (
    <>
      <div
        className={`Filter-list-content ${
          filterMetals.length ? 'is-active' : ''
        }`}
      >
        <ul>
          {filterMetals.map(m => (
            <li>{`${m.name} (${m.weight} ${m.unit} )`}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
