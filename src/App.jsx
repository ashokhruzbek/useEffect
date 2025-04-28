import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import Posts from './components/Posts'

function App() {
  const [users, setUsers] = useState(null)
  const [selectUsers, setSelectUsers] = useState(null)

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
        <option value={''}>---- </option>
        {users && users.map(user => {
          return (
            <option key={user.id} value={user.name}>{user.name}</option>
          )
        })}
      </select>
      
      <h1> Selected User: {selectUsers ? selectUsers : ' No users'}</h1>
      <Posts />
    </div>
  )
}

export default App
