import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const Profile = () => {
    const navigate=useNavigate()
    const {id}=useParams()
    const [user,setUser]=useState({})

    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
        .then((res)=>setUser(...res.data))
        // possibilité de faire ça
        // .then((res)=>setUser(res.data[0]))
        .catch((err)=>console.log(err))
    }, [])
    


  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://freesvg.org/img/abstract-user-flat-4.png" />
      <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
            <Card.Text>{user.phone}</Card.Text>
            <Card.Text>{user?.address?.city}</Card.Text>
        <Button variant="primary" onClick={()=>navigate(-1)}>Back</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Profile