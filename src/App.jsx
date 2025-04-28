import axios from 'axios'
import { useState, useEffect } from 'react'
import { Routes } from 'react-router-dom'
import './App.css'

function App() {
  const [users, setUsers] = useState(null)
  const [selectUsers,setSelectUsers] = useState(null)

  const handleChange = (e) => { 
    setSelectUsers(e.target.value)
  }

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="">
      <select onChange={handleChange} >
        {users && users.map(user => {
          return (
            <option key={user.id} value={user.name}>{user.name}</option>
          )
        })}
      </select>
      <h1> Selected User: {selectUsers}</h1>
    </div>
  )
}

export default App
