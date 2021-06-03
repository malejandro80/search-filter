/** @format */

import logo from './logo.svg'
import SearchBar from './components/SearchBar/SearchBar'

import { React, useState } from 'react'
import NewMaterial from './modals/NewMaterial'
import useMaterialHandler from './hooks/useMaterialHandler'
import FilterList from './components/FilterList/FilterList'
import './App.scss'

function App() {
  const { metals, setMetals, filterMetals, search, setSearch, addNewMetal } =
    useMaterialHandler()

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className='main-background'>
      <h1>searh a material</h1>
      <div>
        <SearchBar search={search} setSearch={setSearch} />
        <button
          onClick={() => {
            setIsModalOpen(true)
          }}
        >
          +
        </button>
      </div>
      <FilterList filterMetals={filterMetals} />
      <NewMaterial
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        addNewMetal={addNewMetal}
      />
    </div>
  )
}

export default App
