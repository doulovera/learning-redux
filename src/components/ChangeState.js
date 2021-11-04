import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserList } from '../store/slices/users'

const ARRAY = [
  {
    id: 1,
    first_name: 'Diego',
    last_name: 'Alberto'
  },
  {
    id: 2,
    first_name: 'Jose',
    last_name: 'Barreto'
  },
]
export default function ChangeState() {
  const dispatch = useDispatch()
  const [hasClicked, setHasClicked] = useState(false)
  const handleClick = (e) => {
    e.preventDefault()
    dispatch(setUserList(ARRAY))
    setHasClicked(true)
  }
  return (
    <button onClick={handleClick} style={{ display: (hasClicked ? 'none' : 'inline-block') }}>
      Cambiar valores    
    </button>
  )
}
