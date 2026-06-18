import React, { useState } from 'react'
import { dummyUserData } from '../assets/assets'

const CreatePost = () => {

    const [content,setContent] = useState('')
    const [images,setImages] = useState([])
    const [loading,setLoading] = useState(false)

    const user = dummyUserData;

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to-white'>
      <div className='max-w-6xl mx-auto p-6'>
        {/* Title */}
        <div>
          <h1>Create Post</h1>
          <p>Share your thoughts with the world</p>
        </div>
      </div>

    </div>
  )
}

export default CreatePost