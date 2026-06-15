import React, { useState } from 'react'
import {useParams} from 'react-router-dom'

const Profile = () => {
  const {profileId} = useParams()
  const [user, setUser] = useState(null)
  const [post, setPost] = useState([])
  
  return (
    <div>

    </div>
  )
}

export default Profile