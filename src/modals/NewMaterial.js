/** @format */

import { React, useRef } from 'react'
import './NewMaterial.scss'

export default function NewMaterial({
  isModalOpen,
  setIsModalOpen,
  addNewMetal
}) {
  const name = useRef()
  const weight = useRef()
  const saveMetal = () => {
    if (name.current.value === '' || weight.current.value === '') {
      return alert('fields in blank')
    }
    addNewMetal({
      name: name.current.value,
      weight: weight.current.value,
      unit: 't'
    })
    name.current.value = ''
    weight.current.value = ''
    setIsModalOpen(false)
  }
  return (
    <div>
      <>
        <div className={`modal ${isModalOpen ? 'is-active' : ''}`}>
          <div className='card'>
            <div className='card-heading'>
              <h2>Add New Material</h2>
              <div className='close-wrap'>
                <span
                  className='close-modal'
                  onClick={() => {
                    setIsModalOpen(false)
                  }}
                >
                  X
                </span>
              </div>
            </div>
            <div className='card-body'>
              <input type='text' placeholder='name' ref={name} />
              <input type='number' placeholder='weight' ref={weight} />
              <button onClick={saveMetal}>save</button>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}
