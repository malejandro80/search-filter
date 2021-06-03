/** @format */
import { useState, useEffect } from 'react'

const useMaterialHandler = () => {
  const [metals, setMetals] = useState([
    { name: 'aluminum', weight: 10, unit: 't' },
    { name: 'iron', weight: 20, unit: 't' },
    { name: 'bronce', weight: 13, unit: 't' }
  ])
  const addNewMetal = metal => {
    setMetals([...metals, metal])
  }
  const [filterMetals, setfilterMetals] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const filterItems = metals.filter(i => {
      return i.name.toLowerCase().includes(search)
    })
    console.log(filterItems, 'filterItems')
    setfilterMetals(search !== '' ? filterItems : [])
  }, [search])

  return { metals, setMetals, filterMetals, search, setSearch, addNewMetal }
}

export default useMaterialHandler
