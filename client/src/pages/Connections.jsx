import React from 'react'
import {Users, UserPlus, UserCheck, UserRoundPen, MessageSquare} from 'lucide-react'
import {
   dummyConnectionsData as connections,
   dummyFollowersData as followers,
   dummyFollowingData as following,
   dummyPendingConnectionsData as pendingConnections
   } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


const Connections = () => {

  const navigate = useNavigate()

  const dataArray = [
    {}
  ]

  return (
    <div>

    </div>
  )
}

export default Connections