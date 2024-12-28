import React from 'react'
import DatabaseService from '../src/appwrite/configure'
import {Link} from 'react-router'
import authService from '../src/appwrite/auth'


function PostCard({$id, title, featuredImage,userName}) {
  
  
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <h3 className='text-left text-base font-bold text-blue-950'>{userName}</h3>
            <div className='w-full justify-center mb-4'>
                <img src={DatabaseService.getFilePreview(featuredImage)} alt={title} className='rounded-xl'/>
            </div>
                <h2 className='text-xl font-bold'>
                    {title}
                </h2>
        </div>
    </Link>
   
  )
}

export default PostCard