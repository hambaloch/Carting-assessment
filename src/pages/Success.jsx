import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import { API_BASE } from '../config'

const Success = ({getUser}) => {
  
  const [loading,setLoading] = useState(true)
  const navigate = useNavigate()
 
  const clearCart = async() =>{
    
    const res = await fetch(`${API_BASE}/api/cart/clear`,{
      credentials:'include'
    })
    const data = await res.json()
    if(data.success){
      getUser()
      navigate("/success")
    }
    setLoading(false)
  }
  useEffect(()=>{
    clearCart()
  },[])
  if(loading){
    return <Loader/>
  }
  
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <h2 className='text-2xl font-bold text-green-500'>Order Successfull.</h2>
    </div>
  )
}

export default Success
