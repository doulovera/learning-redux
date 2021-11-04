import React, { useEffect } from 'react'
// redux
import { fetchAllUsers } from '../store/slices/users'
import { useDispatch, useSelector } from 'react-redux'

export default function UserList() {

  const { list: users } = useSelector(state => state.users)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (
    <div>
      <ul>
        {
          users.map(user => (
            <li key={user.id}>{user.first_name} {user.last_name}</li>
          ))
        }
      </ul> 
    </div>
  )
}
