import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserCard from './UserCard'
const UserList = () => {
    const [users,setUsers]=useState([])

    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>setUsers(res.data))
        .catch((err)=>console.log(err))
    }, [])
    

  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
        {
            users.map((user)=>
            <UserCard user={user} key={user.id}/>)
        }
    </div>
  )
}

export default UserList